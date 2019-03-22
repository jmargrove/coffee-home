import React, { FunctionComponent } from "react"
import { SystemText } from "./SystemText"
import { Button } from "native-base"
import { View } from "react-native"
import { SystemFlex } from "./SystemFlex"
import { System } from "./types"
import styled from "./system-theme/styled-components"
import {
  selectHeavyGrey,
  selectWhite,
  selectLightGrey,
  selectPrimary,
  selectTextBig
} from "../utils/selectors"

const StyledButton = styled(View)<System.StyledButtonProps & any>`
  background-color: ${({ color }) => color};
  border-width: 2;
   border-color: ${({ colorBorder }) => colorBorder}
  height: 64;
`

export const SystemButtonLarge: FunctionComponent<System.ButtonLargeProps> = ({
  isDisabled,
  children,
  onPress
}) => {
  if (isDisabled) {
    return (
      <StyledButton color={selectWhite} colorBorder={selectLightGrey}>
        <SystemFlex noFlex>
          <Button large transparent block rounded>
            <SystemText size={selectTextBig} color={selectHeavyGrey}>
              {children}
            </SystemText>
          </Button>
        </SystemFlex>
      </StyledButton>
    )
  } else {
    return (
      <StyledButton color={selectWhite} colorBorder={selectPrimary}>
        <SystemFlex>
          <Button large transparent block rounded onPress={onPress}>
            <SystemText size={selectTextBig}>{children}</SystemText>
          </Button>
        </SystemFlex>
      </StyledButton>
    )
  }
}
