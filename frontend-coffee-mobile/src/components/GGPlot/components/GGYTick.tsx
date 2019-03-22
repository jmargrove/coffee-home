import React, { FunctionComponent } from "react"
import styled from "../../../system-components/system-theme/styled-components"
import { View, Text, StyleSheet } from "react-native"
import { IXYCoordinates } from "../types.d"
import { SystemFlex } from "../../../system-components"
import { selectBlack } from "../../../utils/selectors"
import { theme } from "../../../system-components/system-theme/theme"

const YTickMajor = styled(View)<IXYCoordinates>`
  position: absolute;
  right: ${({ x }) => x && x};
  bottom: ${({ y }) => y && y};
  width: 8;
  height: ${StyleSheet.hairlineWidth}
  background-color: ${selectBlack}
  z-index: 20;
`

const YLabMajor = styled(Text)<IXYCoordinates>`
  position: absolute;
  right: ${({ x }) => x && x};
  bottom: ${({ y }) => y && y};
  font-size: 12;
  z-index: 20;
`

interface GGYTickProps {
  length: number
  yAxisTheme: {
    yTickPosition: number[]
    yLabValues: number[]
    axisEndPadding: number
  }
  ylab: string
}

export const GGYTick: FunctionComponent<GGYTickProps> = ({
  ylab,
  length,
  yAxisTheme
}) => {
  const { yLabValues, yTickPosition } = yAxisTheme

  return (
    <>
      <View
        style={{
          width: StyleSheet.hairlineWidth,
          height: length,
          top: 0,
          left: 60 - StyleSheet.hairlineWidth / 2,
          bottom: 0,
          zIndex: 20,
          backgroundColor: selectBlack({ theme })
        }}
      />
      {yTickPosition.map((el, i) => {
        return (
          <React.Fragment key={i}>
            <YTickMajor key={i} y={el - StyleSheet.hairlineWidth / 2} x={0} />
            <YLabMajor y={el - 7} x={12}>
              {i % 2 !== 0 ? yLabValues[i] : ""}
            </YLabMajor>
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
          width: 40
        }}
      >
        <SystemFlex justify="center" align="center">
          <GGYAxisTitle>{ylab}</GGYAxisTitle>
        </SystemFlex>
      </View>
    </>
  )
}

export interface IGGAxisTitleProps {}

const GGYAxisTitle = styled(Text)<IGGAxisTitleProps>`
  transform: rotate(-90deg);
`
