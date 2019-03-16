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
import { REACT_APP_SIMPLE_MODEL_REQUEST } from "react-native-dotenv"
import { LoadingScreen } from "../LoadingScreen/LoadingScreen"
import { handleUserShadeParameter } from "../../utils/handleShadeParameters"
import { handleUserSlopeParameter } from "../../utils/handleSlopeParameters"
import { IData } from "../../components/GGPlot/types"

export const response = [
  { year: 0, yield: 0 },
  { year: 1, yield: 0 },
  { year: 2, yield: 0 },
  { year: 3, yield: 0 },
  { year: 4, yield: 0 },
  { year: 5, yield: 0 }
]

export const ModelResultsScreen: FunctionComponent<{
  store: ResultsScreenStore
  navigation: NavigationScreenProp<NavigationRoute>
  response: IData
}> = ({ store }) => {
  const { focalPoint, handleIncrement, handleDecrement } = store
  console.log("respo in funcitonal", response)

  return (
    <Container>
      <HeaderComponent>Model results</HeaderComponent>
      <SystemContent fill>
        <ScrollView>
          <SystemFlex align="center">
            <ScatterPlot focalPoint={focalPoint} response={response} />

            <YieldDisplay
              focalPoint={focalPoint}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />

            <SystemFlex row={true} noFlex>
              <SystemSpace size={REGULAR} />
              <SystemFlex>
                <SystemText>
                  During year {focalPoint.year} we expect that the coffee yeild
                  will be {focalPoint.yield} tones per hactar.
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
  focalPoint: { index: number; yield: number; year: number }

  @observable
  data: { yield: number; year: number }[]

  constructor({ response }: { response: { yield: number; year: number }[] }) {
    this.data = response
    this.focalPoint = { index: 4, ...response[4] }
  }

  handleLoadingTrue = () => {
    this.isLoading = true
  }

  handleLoadingFalse = () => {
    this.isLoading = false
  }

  handleIncrement = () => {
    if (this.focalPoint.index < 5) {
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
  lifecycle<{}, { navigation: NavigationScreenProp<NavigationRoute> }, any>({
    async componentDidMount() {
      this.setState({ isLoading: true })
      const {
        lng,
        lat,
        userShadeValue,
        userIrrValue,
        userSlopeValue
      } = this.props.navigation.getParam("point")

      const handleSend = async () => {
        const data = {
          lng,
          lat,
          userShadeValue: handleUserShadeParameter(userShadeValue),
          userIrrValue: userIrrValue ? 1 : 0,
          userSlopeValue: handleUserSlopeParameter(userSlopeValue)
        }

        const response = await fetch(REACT_APP_SIMPLE_MODEL_REQUEST, {
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
          method: "POST"
        })

        return response.json()
      }

      const response = await handleSend()
      this.setState({ response, isLoading: false })
    }
  }),
  branch(
    ({ isLoading }: { isLoading: boolean }) => false, //isLoading,
    renderComponent(LoadingScreen)
  ),
  mapProps(({ ...rest }: any) => ({
    store: new ResultsScreenStore({ response }),
    response,
    ...rest
  })),
  observer
)

export const PoweredModelResultsScreen = power(ModelResultsScreen)
