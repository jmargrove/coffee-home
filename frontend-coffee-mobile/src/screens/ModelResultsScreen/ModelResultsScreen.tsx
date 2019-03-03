import React, { FunctionComponent } from "react"
import { HeaderComponent } from "../../components/HeaderComponent"
import { Container } from "native-base"
import {
  SystemContent,
  SystemFlex,
  SystemText,
  SystemSpace
} from "../../system-components"
import { ScatterPlot } from "./ScatterPlot"
import styled from "../../system-components/system-theme/styled-components"
import { View } from "react-native"
import {
  SMALL,
  BLACK,
  REGULAR,
  PRIMARY
} from "../../system-components/system-theme/theme"
import { BoundsBar } from "../../components/BoundsBar"
import { SubHeader } from "../../components/SubHeaderComponent"

export const response = [
  { year: 0, yield: 0 },
  { year: 1, yield: 0 },
  { year: 2, yield: 0 },
  { year: 3, yield: 1.14 },
  { year: 4, yield: 4.14 },
  { year: 5, yield: 4.14 }
]

export const ModelResultsScreen: FunctionComponent = () => {
  return (
    <Container>
      <HeaderComponent>Model results</HeaderComponent>
      <SystemContent fill>
        <SystemFlex align="center">
          <SystemSpace size={SMALL} />
          <SubHeader> Field </SubHeader>
          <SystemSpace size={SMALL} />
          <ScatterPlot />
          <SystemText>hellow</SystemText>
        </SystemFlex>
      </SystemContent>
    </Container>
  )
}
