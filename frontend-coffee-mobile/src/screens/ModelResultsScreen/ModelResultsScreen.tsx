import React, { FunctionComponent } from "react"
import { HeaderComponent } from "../../components/HeaderComponent"
import { Container } from "native-base"
import {
  SystemContent,
  SystemFlex,
  SystemSpace,
  SystemButtonLarge
} from "../../system-components"
import { ScatterPlot } from "./ScatterPlot"
import { ScrollView } from "react-native"
import {
  SMALL,
  BLACK,
  PRIMARY,
  WHITE
} from "../../system-components/system-theme/theme"
import { SubHeader } from "../../components/SubHeaderComponent"
import { YieldDisplay } from "../../components/YieldDisplay"
import { compose, mapProps } from "recompose"
import { observable } from "mobx"
import { observer } from "mobx-react"

export const response = [
  { year: 0, yield: 0 },
  { year: 1, yield: 0 },
  { year: 2, yield: 0 },
  { year: 3, yield: 1.14 },
  { year: 4, yield: 4.14 },
  { year: 5, yield: 4.14 }
]

export const ModelResultsScreen: FunctionComponent<{
  store: ResultsScreenStore
}> = ({ store }) => {
  console.log("store", store)
  const { focalPoint, handleIncrement, handleDecrement } = store
  return (
    <Container>
      <HeaderComponent>Model results</HeaderComponent>
      <SystemContent fill>
        <ScrollView>
          <SystemFlex align="center">
            <SystemSpace size={SMALL} />
            <SubHeader> Field </SubHeader>
            <SystemSpace size={SMALL} />
            <ScatterPlot focalPoint={focalPoint} />

            <YieldDisplay
              focalPoint={focalPoint}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
            <SystemButtonLarge
              colorBorder={PRIMARY}
              color={WHITE}
              textColor={BLACK}
              onPress={e => console.log("error", e)}
            >
              Optimize shade
            </SystemButtonLarge>
          </SystemFlex>
        </ScrollView>
      </SystemContent>
    </Container>
  )
}

class ResultsScreenStore {
  @observable
  focalPoint: { index: number; yield: number; year: number }

  @observable
  data: { yield: number; year: number }[]

  constructor({ response }: { response: { yield: number; year: number }[] }) {
    this.data = response
    this.focalPoint = { index: 4, ...response[4] }
    console.log("this.focalPoint")
  }

  handleIncrement = () => {
    console.log("hello", this.focalPoint.index)
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

const power = compose<any, any>(
  mapProps(({ rest }: any) => {
    return {
      store: new ResultsScreenStore({ response }),
      ...rest
    }
  }),
  observer
)

export const PoweredModelResultsScreen = power(ModelResultsScreen)
