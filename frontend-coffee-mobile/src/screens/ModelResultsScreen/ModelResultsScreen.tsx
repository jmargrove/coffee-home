import React, { FunctionComponent } from "react"
import { HeaderComponent } from "../../components/HeaderComponent"
import { Container } from "native-base"
import {
  SystemContent,
  SystemFlex,
  SystemSpace,
  SystemText,
  SystemPadding
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
import { OPTIMIZE, YIELD, MAP_SCREEN } from "../../utils/constants"
import { Coordinates } from "../SetParametersScreen/SetParametersScreen"
import { View } from "react-native"
import { PointInformationCard } from "../PointScreen/components/PointInformationCard"
import { IDataAddition, demoStore } from "../../store/demoStore"
import { Alert } from "react-native"
import NavigationServices from "../../utils/NavigationServices"

type OPTIMIZE = "OPTIMIZE"
type YIELD = "YIELD"
type ModelType = OPTIMIZE | YIELD

export const ModelResultsScreen: FunctionComponent<{
  store: ResultsScreenStore
  navigation: NavigationScreenProp<NavigationRoute>
  response: IElementData[]
  type: ModelType
  point: IDataAddition
}> = ({ store, response, type, point }) => {
  const { focalPoint, handleIncrement, handleDecrement } = store

  return (
    <Container>
      <HeaderComponent LeftIcon={GlobeIcon} RightIcon={View}>
        Model results
      </HeaderComponent>
      <SystemContent fill>
        <ScrollView>
          <SystemSpace size={REGULAR} />
          <SystemFlex align="center">
            <SystemText size={24}>{point.pointName}</SystemText>
          </SystemFlex>
          <Coordinates coordinates={{ lat: point.lat, lng: point.lng }} />

          <SystemPadding size={REGULAR}>
            <SystemText size={12} center>
              During year {focalPoint.x} we expect that the{"\n"}coffee yield
              will be {focalPoint.y} tones per hectar.
            </SystemText>
          </SystemPadding>

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
            <SystemPadding size={REGULAR}>
              <SystemText center>
                Your coffee yield currently is {point.userCurrentYield} tons per
                hectar. Our model suggest that it is possible to grow a
                approximatly {response[5].y} tons per ha.
              </SystemText>
            </SystemPadding>
          </SystemFlex>
          <SystemSpace size={REGULAR} />
          <SystemText size={24} center>
            Parameters
          </SystemText>
          <SystemPadding size={REGULAR}>
            <PointInformationCard
              pointShade={point.userShadeValue.toString()}
              pointIrrigated={!!point.userIrrValue}
              pointSlope={point.userSlopeValue.toString()}
            />
          </SystemPadding>
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
      const point = this.props.navigation.getParam("point")
      const { lng, lat, userShadeValue, userIrrValue, userSlopeValue } = point
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

      try {
        const response = await handleSend()
        if (type === YIELD) {
          const res = response.map((el: { [x: string]: number }) => {
            return {
              y: el.yield,
              x: el.year - 1
            }
          })

          this.setState({ response: res, isLoading: false, type, point })
        }

        if (type === OPTIMIZE) {
          const res = response.map((el: { [x: string]: number }) => {
            return {
              x: el.shade,
              y: el.yieldIrrFALSE
            }
          })

          this.setState({ response: res, isLoading: false, type, point })
        }
      } catch (e) {
        Alert.alert("Server Error", "Issue with point", [
          {
            text: "Delete",
            onPress: () => {
              demoStore.handleDeletePoint(point)
              NavigationServices.navigate(MAP_SCREEN, {})
            }
          },
          {
            text: "Back",
            onPress: () => {
              NavigationServices.navigate(MAP_SCREEN, {})
            }
          }
        ])
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
