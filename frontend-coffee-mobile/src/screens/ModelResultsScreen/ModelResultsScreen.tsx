import React, { FunctionComponent } from "react"
import { HeaderComponent } from "../../components/HeaderComponent"
import { Container } from "native-base"
import {
  SystemContent,
  SystemFlex,
  SystemSpace,
  SystemText
} from "../../system-components"
import {
  withNavigation,
  NavigationScreenProp,
  NavigationRoute
} from "react-navigation"
import { ScatterPlot } from "./ScatterPlot"
import { ScrollView } from "react-native"
import { REGULAR } from "../../system-components/system-theme/theme"
import { YieldDisplay } from "../../components/YieldDisplay"
import {
  compose,
  mapProps,
  withProps,
  lifecycle,
  branch,
  renderComponent
} from "recompose"
import { observable } from "mobx"
import { observer } from "mobx-react"
import { LoadingScreen } from "../LoadingScreen/LoadingScreen"
import { handleUserShadeParameter } from "../../utils/handleShadeParameters"
import { handleUserSlopeParameter } from "../../utils/handleSlopeParameters"
import { IElementData } from "../../components/GGPlot/types"
import { GlobeIcon } from "../../assets/GlobeIcon/GlobeIcon"
import { getEndPoint } from "../../utils/getEndPoint"
import { OPTIMIZE, YIELD } from "../../utils/constants"

type OPTIMIZE = "OPTIMIZE"
type YIELD = "YIELD"
type ModelType = OPTIMIZE | YIELD

export const ModelResultsScreen: FunctionComponent<{
  store: ResultsScreenStore
  navigation: NavigationScreenProp<NavigationRoute>
  response: IElementData[]
  type: ModelType
}> = ({ store, response, type }) => {
  const { focalPoint, handleIncrement, handleDecrement } = store

  return (
    <Container>
      <HeaderComponent LeftIcon={GlobeIcon}>Model results</HeaderComponent>
      <SystemContent fill>
        <ScrollView>
          <SystemFlex align="center">
            {type === YIELD && (
              <ScatterPlot
                focalPoint={focalPoint}
                response={response}
                pointSize={10}
              />
            )}

            {type === OPTIMIZE && (
              <ScatterPlot
                focalPoint={focalPoint}
                response={response}
                pointSize={4}
              />
            )}

            <YieldDisplay
              focalPoint={focalPoint}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />

            <SystemFlex row={true} noFlex>
              <SystemSpace size={REGULAR} />
              <SystemFlex>
                <SystemText>
                  During year {focalPoint.x} we expect that the coffee yeild
                  will be {focalPoint.y} tones per hactar.
                </SystemText>
              </SystemFlex>

              <SystemSpace size={REGULAR} />
            </SystemFlex>
          </SystemFlex>
        </ScrollView>
      </SystemContent>
    </Container>
  )
}

class ResultsScreenStore {
  @observable
  public isLoading = true

  @observable
  focalPoint: { index: number; y: number; x: number }

  @observable
  data: { y: number; x: number }[]

  constructor({ response }: { response: { y: number; x: number }[] }) {
    this.data = response
    this.focalPoint = {
      index: 4,
      ...response[4]
    }
  }

  handleLoadingTrue = () => {
    this.isLoading = true
  }

  handleLoadingFalse = () => {
    this.isLoading = false
  }

  handleIncrement = () => {
    if (this.focalPoint.index < this.data.length - 1) {
      this.focalPoint = {
        index: this.focalPoint.index + 1,
        ...this.data[this.focalPoint.index + 1]
      }
    }
  }

  handleDecrement = () => {
    if (this.focalPoint.index > 0) {
      this.focalPoint = {
        index: this.focalPoint.index - 1,
        ...this.data[this.focalPoint.index - 1]
      }
    }
  }
}

const power = compose<
  any,
  { navigation: NavigationScreenProp<NavigationRoute> }
>(
  withNavigation,
  withProps({
    isLoading: true
  }),
  lifecycle<any, { navigation: NavigationScreenProp<NavigationRoute> }, any>({
    async componentDidMount() {
      const {
        lng,
        lat,
        userShadeValue,
        userIrrValue,
        userSlopeValue
      } = this.props.navigation.getParam("point")
      console.log({
        lng,
        lat,
        userShadeValue: handleUserShadeParameter(userShadeValue),
        userIrrValue: userIrrValue ? 1 : 0,
        userSlopeValue: handleUserSlopeParameter(userSlopeValue)
      })
      const type: ModelType = this.props.navigation.getParam("type")

      const handleSend = async () => {
        const data = {
          lng,
          lat,
          userShadeValue: handleUserShadeParameter(userShadeValue),
          userIrrValue: userIrrValue ? 1 : 0,
          userSlopeValue: handleUserSlopeParameter(userSlopeValue)
        }

        const response = await fetch(getEndPoint({ type }), {
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
          method: "POST"
        })

        return response.json()
      }

      const response = await handleSend()
      console.log(response)

      if (type === YIELD) {
        const res = response.map((el: { [x: string]: number }) => {
          return {
            y: el.yield,
            x: el.year - 1
          }
        })

        this.setState({ response: res, isLoading: false, type })
      }

      if (type === OPTIMIZE) {
        const res = response.map((el: { [x: string]: number }) => {
          return {
            x: el.shade,
            y: el.yieldIrrFALSE
          }
        })
        this.setState({ response: res, isLoading: false, type })
      }
    }
  }),
  branch(
    ({ isLoading }: { isLoading: boolean }) => isLoading,
    renderComponent(LoadingScreen)
  ),
  mapProps(({ response, ...rest }: any) => ({
    store: new ResultsScreenStore({ response }),
    response,
    ...rest
  })),
  observer
)

export const PoweredModelResultsScreen = power(ModelResultsScreen)
