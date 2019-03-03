import React, { FunctionComponent } from "react"
import { HeaderComponent } from "../../components/HeaderComponent"
import { Container } from "native-base"
import { SystemContent, SystemFlex, SystemText } from "../../system-components"
import { ScatterPlot } from "./ScatterPlot"
import styled from "../../system-components/system-theme/styled-components"
import { View } from "react-native"

export const response = [
  { year: 0, yield: 0 },
  { year: 1, yield: 0 },
  { year: 2, yield: 0 },
  { year: 3, yield: 1.14 },
  { year: 4, yield: 4.14 },
  { year: 5, yield: 4.14 }
]

const SubHeader = styled(View)`
  width: 80%;
  height: 32;
  background-color: lightgrey;
`

export const ModelResultsScreen: FunctionComponent = () => {
  return (
    <Container>
      <HeaderComponent>Model results</HeaderComponent>
      <SystemContent fill>
        <SystemFlex align="center">
          <SubHeader>
            <SystemText>hellow</SystemText>
          </SubHeader>

          <ScatterPlot />
          <SystemText>hellow</SystemText>
        </SystemFlex>
      </SystemContent>
    </Container>
  )
}
