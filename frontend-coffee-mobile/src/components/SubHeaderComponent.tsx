import React, { FunctionComponent } from "react"
import { View } from "native-base"
import { BoundsBar } from "./BoundsBar"
import { REGULAR } from "../system-components/system-theme/theme"
import { SystemSpace, SystemFlex, SystemText } from "../system-components"
import styled from "../system-components/system-theme/styled-components"
import { selectSmall, selectTextBig } from "../utils/selectors"

const SubHeaderContainer = styled(View)`
  width: 328;
  height: 32;
  background-color: #f0f0f0;
`

export const SubHeader: FunctionComponent = ({ children }) => {
  return (
    <>
      <BoundsBar space={REGULAR} />
      <SystemSpace size={selectSmall} />
      <SubHeaderContainer>
        <SystemFlex row align="center">
          <SystemSpace size={selectSmall} />
          <SystemText size={selectTextBig}>{children}</SystemText>
        </SystemFlex>
      </SubHeaderContainer>
      <SystemSpace size={selectSmall} />
      <BoundsBar space={REGULAR} />
    </>
  )
}
