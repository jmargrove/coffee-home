import React, { FunctionComponent } from "react"
import { HeaderComponent } from "../../components/HeaderComponent"
import { Container } from "native-base"
import {
  SystemContent,
  SystemFlex,
  SystemText,
  SystemSpace
} from "../../system-components"
import styled from "../../system-components/system-theme/styled-components"
import { View, Text } from "react-native"
import {
  SMALL,
  MEDIUM,
  REGULAR,
  PRIMARY
} from "../../system-components/system-theme/theme"

const response = [
  { year: 0, yield: 0 },
  { year: 1, yield: 0 },
  { year: 2, yield: 0 },
  { year: 3, yield: 1.14 },
  { year: 4, yield: 4.14 },
  { year: 5, yield: 4.14 }
]

const XYAxis = styled(View)`
  border-left-width: 1
  border-left-color: black;
  border-bottom-width: 1
  border-bottom-color: black;
  width: 300; 
  height: 150;
`

const Point = styled(View)<any>`
  position: absolute;
  bottom: ${({ y }) => y && y};
  left: ${({ x }) => x && x};
  background-color: white;
  border-width: 0.8;
  border-color: ${({ theme }) => theme && theme.colors[PRIMARY]}
  width: 20;
  height: 20;
  border-radius: 10;
`

const XTickMajor = styled(View)<any>`
  position: absolute;
  bottom: ${({ y }) => y && y};
  left: ${({ x }) => x && x};
  width: 2;
  height: 4;
  background-color: black;
`

const XLabMajor = styled(Text)<any>`
  position: absolute;
  bottom: ${({ y }) => y && y};
  left: ${({ x }) => x && x};
`

export const ModelResultsScreen: FunctionComponent = () => {
  return (
    <Container>
      <HeaderComponent>Model results</HeaderComponent>
      <SystemContent fill>
        <SystemFlex justify="center" align="center">
          <SystemFlex noFlex={true} justify="center" align="center">
            <XYAxis>
              {response.map((el, i) => {
                console.log("yeild", (150 / 4.14) * el.yield)
                return (
                  <Point
                    key={i}
                    x={(300 / 5) * el.year - 10}
                    y={((150 - 40) / 4.14) * el.yield - 10}
                  />
                )
              })}
              {response.map((el, i) => {
                return <XTickMajor key={i} x={(300 / 5) * el.year - 1} y={-4} />
              })}
              {response.map((el, i) => {
                return (
                  <XLabMajor key={i} x={(300 / 5) * el.year - 4} y={-20}>
                    {el.year}
                  </XLabMajor>
                )
              })}
            </XYAxis>
            <SystemSpace size={REGULAR} />
            <SystemText>Year</SystemText>
          </SystemFlex>
        </SystemFlex>
      </SystemContent>
    </Container>
  )
}
