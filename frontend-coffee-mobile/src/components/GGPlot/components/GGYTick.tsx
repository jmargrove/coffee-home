import React, { FunctionComponent } from "react"
import styled from "../../../system-components/system-theme/styled-components"
import { View, Text, StyleSheet } from "react-native"

const YTickMajor = styled(View)<any>`
  position: absolute;
  right: ${({ x }) => x && x};
  bottom: ${({ y }) => y && y};
  width: 8;
  height: ${StyleSheet.hairlineWidth}
  background-color: black;
  z-index: 20;
`

const YLabMajor = styled(Text)<any>`
  position: absolute;
  right: ${({ x }) => x && x};
  top: ${({ y }) => y && y};
  font-size: 12;
  z-index: 20;
`

export const GGYTick: FunctionComponent<any> = ({
  length,
  tickNumber,
  yValues
}) => {
  const tickSpaces = tickNumber - 1
  const yTickPosition = Array(tickNumber)
    .fill(1)
    .map((el, i) => {
      return Math.round((length / tickSpaces) * i * 10) / 10
    })
    .reverse()

  const yLabValues = Array(tickNumber)
    .fill(1)
    .map((el, i) => {
      return Math.round((Math.max(...yValues) / tickSpaces) * i * 10) / 10
    })

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
          backgroundColor: "black"
        }}
      />
      {yTickPosition.map((el, i) => {
        return (
          <React.Fragment key={i}>
            <YTickMajor key={i} y={el - StyleSheet.hairlineWidth / 2} x={0} />
            <YLabMajor y={el - 5} x={12}>
              {yLabValues[i]}
            </YLabMajor>
          </React.Fragment>
        )
      })}
      <GGYAxisTitle left={-20} bottom={(250 - 80) / 2 + 20}>
        Yield
      </GGYAxisTitle>
    </>
  )
}

const GGYAxisTitle = styled(Text)<any>`
  transform: rotate(-90deg);
  ${({ bottom }) => bottom && `bottom: ${bottom}`};
  ${({ left }) => left && `left: ${left}`};
`
