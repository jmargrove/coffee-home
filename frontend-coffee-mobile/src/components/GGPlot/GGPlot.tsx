import React, { FunctionComponent } from "react"
import styled from "../../system-components/system-theme/styled-components"
import { View, Text } from "react-native"
import { IData } from "./types"
import { observable, action } from "mobx"
import { compose, withProps } from "recompose"
import { LayoutChangeEvent } from "react-native"
import { observer } from "mobx-react"

const XYAxis = styled(View)`
  border-left-width: 1
  border-left-color: black;
  border-bottom-width: 1
  border-bottom-color: black;
  width: 300; 
  height: 150;
`

const XTickMajor = styled(View)<any>`
  position: absolute;
  bottom: ${({ y }) => y && y};
  left: ${({ x }) => x && x};
  width: 2;
  height: 12;
  background-color: black;
`

const XLabMajor = styled(Text)<any>`
  position: absolute;
  bottom: ${({ y }) => y && y};
  left: ${({ x }) => x && x};
`

const GGPlot: FunctionComponent<IData & { store: GGPlotStore }> = ({
  children,
  data,
  store
}) => {
  const { handleLayoutInfo, width, height } = store
  const numberOfPoints = data.length
  const distanceBetweenPoints = width / (numberOfPoints - 1)
  return (
    <XYAxis onLayout={handleLayoutInfo}>
      {children}
      {data.map((el, i) => {
        return (
          <XTickMajor key={i} x={distanceBetweenPoints * el.year - 1} y={-12} />
        )
      })}
      {data.map((el, i) => {
        return (
          <XLabMajor
            key={i}
            x={distanceBetweenPoints * el.year - 4}
            y={-16 - 12}
          >
            {el.year}
          </XLabMajor>
        )
      })}
    </XYAxis>
  )
}

class GGPlotStore {
  @observable
  width: number = 0
  @observable
  height: number = 0

  @action
  handleLayoutInfo = (event: LayoutChangeEvent) => {
    this.width = event.nativeEvent.layout.width
    this.height = event.nativeEvent.layout.height
  }
}

const withStore = compose<any, any>(
  withProps({
    store: new GGPlotStore()
  }),
  observer
)

export default withStore(GGPlot)
