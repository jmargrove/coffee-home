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
import {
  selectRegular,
  selectTextSmall,
  selectTextBig,
  selectTextRegular
} from "../../utils/selectors"

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
  const { focalPoint, handleIncrement, handleDecrement, maxOptimize } = store

  return (
    <Container>
      <HeaderComponent LeftIcon={GlobeIcon} RightIcon={View}>
        Model results
      </HeaderComponent>
      <SystemContent fill>
        <ScrollView>
          <SystemSpace size={selectRegular} />
          <SystemFlex align="center">
            <SystemText size={selectTextBig}>{point.pointName}</SystemText>
          </SystemFlex>
          <Coordinates coordinates={{ lat: point.lat, lng: point.lng }} />
          <SystemSpace size={selectRegular} />
          {type === YIELD ? (
            <SystemFlex align="center">
              <SystemText size={selectTextRegular} center>
                During year {maxOptimize.x} we expect that the{"\n"}coffee yield
                will be {maxOptimize.y} tones per hectar.
              </SystemText>
            </SystemFlex>
          ) : (
            <SystemFlex align="center">
              <SystemText size={selectTextRegular} center>
                Our model suggests this location would{"\n"}optimally produce{" "}
                {focalPoint.y} tons of coffee {"\n "}per hectare, with shade
                tree converage of
                {focalPoint.x}%.
              </SystemText>
            </SystemFlex>
          )}
          <SystemFlex align="center">
            {type === YIELD && (
              <ScatterPlot
                xlab="Year"
                ylab="Yield"
                focalPoint={focalPoint}
                response={response}
                pointSize={10}
                tickNumber={6}
              />
            )}

            {type === OPTIMIZE && (
              <ScatterPlot
                xlab="Shade %"
                ylab="Yield"
                focalPoint={focalPoint}
                response={response}
                pointSize={4}
                tickNumber={10}
              />
            )}

            <YieldDisplay
              ylab={type === YIELD ? "Year" : "Shade %"}
              focalPoint={focalPoint}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
          </SystemFlex>
          {type === YIELD && (
            <>
              <SystemPadding size={selectRegular}>
                <SystemText center>
                  Your coffee yield currently is {point.userCurrentYield} tons
                  per{"\n"}hectar. Our model suggest that it is possible to
                  {"\n"}grow a approximatly {response[5].y} tons per ha.
                </SystemText>
              </SystemPadding>
              <SystemSpace size={selectRegular} />
              <SystemText size={selectTextBig} center>
                Parameters
              </SystemText>
              <SystemPadding size={selectRegular}>
                <PointInformationCard
                  pointShade={point.userShadeValue.toString()}
                  pointIrrigated={!!point.userIrrValue}
                  pointSlope={point.userSlopeValue.toString()}
                />
              </SystemPadding>
            </>
          )}
        </ScrollView>
      </SystemContent>
    </Container>
  )
}

type FocalPoint = { index: number; y: number; x: number }
class ResultsScreenStore {
  @observable
  public isLoading = true

  @observable
  focalPoint: FocalPoint

  @observable
  data: { y: number; x: number }[]

  @observable
  maxOptimize!: FocalPoint

  constructor({ response }: { response: { y: number; x: number }[] }) {
    this.data = response
    this.focalPoint = this.data.reduce(
      (acc: FocalPoint, el, index) => {
        if (el.y > acc.y) {
          return { index, ...el }
        } else {
          return acc
        }
      },
      { index: 0, x: 0, y: 0 }
    )
    this.maxOptimize = this.data.reduce(
      (acc: FocalPoint, el, index) => {
        if (el.y > acc.y) {
          return { index, ...el }
        } else {
          return acc
        }
      },
      { index: 0, x: 0, y: 0 }
    )
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
              x: el.shade * 10,
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
