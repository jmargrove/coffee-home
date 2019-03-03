import React, { FunctionComponent } from "react"
import { View } from "native-base"
import { BoundsBar } from "./BoundsBar"
import {
  REGULAR,
  PRIMARY,
  SMALL,
  BLACK
} from "../system-components/system-theme/theme"
import { SystemSpace, SystemFlex, SystemText } from "../system-components"
import styled from "../system-components/system-theme/styled-components"

const SubHeaderContainer = styled(View)`
  width: 328;
  height: 32;
  background-color: #f0f0f0;
`

export const SubHeader: FunctionComponent = ({ children }) => {
  return (
    <>
      <BoundsBar space={REGULAR} color={PRIMARY} />
      <SystemSpace size={SMALL} />
      <SubHeaderContainer>
        <SystemFlex row align="center">
          <SystemSpace size={SMALL} />
          <SystemText size={24} color={BLACK}>
            {children}
          </SystemText>
        </SystemFlex>
      </SubHeaderContainer>
      <SystemSpace size={SMALL} />
      <BoundsBar space={REGULAR} color={PRIMARY} />
    </>
  )
}
