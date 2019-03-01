import React, { FunctionComponent } from "react"
import { HeaderComponent } from "../../components/HeaderComponent"
import { Container } from "native-base"
import {
  SystemContent,
  SystemFlex,
  SystemText,
  SystemSpace
} from "../../system-components"
import { REGULAR } from "../../system-components/system-theme/theme"
import { ScatterPlot } from "./ScatterPlot"
import { GGPosition } from "../../components/GGPlot/components/GGPosition"

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
          <SystemText>hellow</SystemText>

          {/* <ScatterPlot data={response} /> */}
          <GGPosition />
          <SystemText>hellow</SystemText>
        </SystemFlex>
      </SystemContent>
    </Container>
  )
}
