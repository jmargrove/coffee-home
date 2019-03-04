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
import styled from "../../system-components/system-theme/styled-components"
import { View, ScrollView } from "react-native"
import {
  SMALL,
  BLACK,
  PRIMARY,
  WHITE
} from "../../system-components/system-theme/theme"

import { SubHeader } from "../../components/SubHeaderComponent"
import { YieldDisplay } from "../../components/YieldDisplay"
import { compose, withProps } from "recompose";

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
        <ScrollView>
          <SystemFlex align="center">
            <SystemSpace size={SMALL} />
            <SubHeader> Field </SubHeader>
            <SystemSpace size={SMALL} />
            <ScatterPlot />

            <YieldDisplay />
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


