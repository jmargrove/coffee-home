import React, { FunctionComponent } from "react"
import styled from "../../../system-components/system-theme/styled-components"
import { View, Text } from "react-native"
import { IData } from "../types.d"
import { compose, mapProps } from "recompose"
import { GG } from "../GG"
import { StyleSheet } from "react-native"

const XTickMajor = styled(View)<any>`
  position: absolute;
  left: ${({ x }) => x && x};
  top: ${({ y }) => y && y};
  width: ${StyleSheet.hairlineWidth}
  height: 8;
  background-color: black;
  z-index: 20;
`

const XLabMajor = styled(Text)<any>`
  position: absolute;
  font-size: 12;
  left: ${({ x }) => x && x};
  top: ${({ y }) => y && y};
  z-index: 20;
`

const GGXTickDefault: FunctionComponent<any> = ({
  length,
  tickNumber,
  store
}) => {
  const { xValues } = store
  const tickSpaces = tickNumber - 1
  const xTickPosition = Array(tickNumber)
    .fill(1)
    .map((el, i) => {
      return Math.round((length / tickSpaces) * i * 10) / 10
    })

  const xLabValues = Array(tickNumber)
    .fill(1)
    .map((el, i) => {
      return (Math.max(...xValues) / tickSpaces) * i
    })

  return (
    <>
      <View
        style={{
          width: 350 - 80,
          height: StyleSheet.hairlineWidth,
          backgroundColor: "black",
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
      <GGXAxisTitle left={length / 2 - 4 * 4} bottom={-30}>
        Year
      </GGXAxisTitle>
    </>
  )
}

const GGXAxisTitle = styled(Text)<any>`
  ${({ bottom }) => bottom && `bottom: ${bottom}`};
  ${({ left }) => left && `left: ${left}`};
`

const withStore = compose<
  { store: GG } & { length: number; tickNumber: number },
  { length: number; tickNumber: number } & IData
>(
  mapProps(
    ({
      data,
      length,
      tickNumber
    }: IData & { length: number; tickNumber: number }) => {
      return {
        store: new GG(data, { width: 350 - 80, height: 250 - 80 }),
        length: length,
        tickNumber: tickNumber
      }
    }
  )
)

export const GGXTick = withStore(GGXTickDefault)
