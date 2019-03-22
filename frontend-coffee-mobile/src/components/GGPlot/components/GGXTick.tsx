import React, { FunctionComponent } from "react"
import styled from "../../../system-components/system-theme/styled-components"
import { View, Text, StyleSheet } from "react-native"
import { IXYCoordinates } from "../types"
import { IGGAxisTitleProps } from "./GGYTick"
import { SystemFlex } from "../../../system-components"
import { selectBlack } from "../../../utils/selectors"
import { theme } from "../../../system-components/system-theme/theme"

const XTickMajor = styled(View)<IXYCoordinates>`
  position: absolute;
  left: ${({ x }) => x && x};
  top: ${({ y }) => y && y};
  width: ${StyleSheet.hairlineWidth}
  height: 8;
  background-color: ${selectBlack}
  z-index: 20;
`

const XLabMajor = styled(Text)<IXYCoordinates>`
  position: absolute;
  font-size: 12;
  left: ${({ x }) => x && x};
  top: ${({ y }) => y && y};
  z-index: 20;
`
interface IGGTickProps {
  length: number
  tickNumber: number
  xValues: number[]
  xlab: string
}

export const GGXTick: FunctionComponent<IGGTickProps> = ({
  length,
  xlab,
  tickNumber,
  xValues
}) => {
  const axisEndPadding = 30
  const tickSpaces = tickNumber - 1
  const xTickPosition = Array(tickNumber)
    .fill(1)
    .map((el, i) => {
      return Math.round(((length - axisEndPadding) / tickSpaces) * i * 10) / 10
    })

  const xLabValues = Array(tickNumber)
    .fill(1)
    .map((el, i) => {
      return (Math.max(...xValues) / tickSpaces) * i
    })
  console.log(xTickPosition)
  console.log(xLabValues)
  return (
    <>
      <View
        style={{
          width: length,
          height: StyleSheet.hairlineWidth,
          backgroundColor: selectBlack({ theme }),
          top: 0,
          left: 0,
          zIndex: 20
        }}
      />
      {xTickPosition.map((el, i) => {
        return (
          <React.Fragment key={i}>
            <XTickMajor key={i} x={el} y={0} />
            <XLabMajor x={el - 3} y={8}>
              {xLabValues[i]}
            </XLabMajor>
          </React.Fragment>
        )
      })}
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          rigth: 0,
          width: "100%"
        }}
      >
        <SystemFlex justify="center" align="center">
          <GGXAxisTitle>{xlab}</GGXAxisTitle>
        </SystemFlex>
      </View>
    </>
  )
}

const GGXAxisTitle = styled(Text)<IGGAxisTitleProps>`
  padding-top: 20;
`
