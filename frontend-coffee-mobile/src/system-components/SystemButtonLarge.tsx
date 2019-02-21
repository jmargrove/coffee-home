import React, { FunctionComponent } from "react"
import { SystemText } from "./SystemText"
import { Button } from "native-base"
import { View } from "react-native"
import { SystemFlex } from "./SystemFlex"
import { System } from "./types"
import styled from "./system-theme/styled-components"
import {
  LIGHT_GREY,
  HEAVY_GREY,
  WHITE,
  PRIMARY,
  MEDIUM_GREY,
  BLACK
} from "./system-theme/theme"

const StyledButton = styled(View)<System.StyledButtonProps & any>`
  ${({ color, theme }) => color && `background-color: ${theme.colors[color]}`};
  border-width: 2;
  ${({ colorBorder, theme }) =>
    colorBorder && `border-color: ${theme.colors[colorBorder]}`};
  width: 300;
  height: 64;
`

export const SystemButtonLarge: FunctionComponent<System.ButtonLargeProps> = ({
  isDisabled,
  children,
  onPress
}) => {
  if (isDisabled) {
    return (
      <StyledButton color={WHITE} colorBorder={LIGHT_GREY}>
        <SystemFlex noFlex>
          <Button large transparent block rounded onPress={onPress}>
            <SystemText size={24} color={HEAVY_GREY}>
              {children}
            </SystemText>
          </Button>
        </SystemFlex>
      </StyledButton>
    )
  } else {
    return (
      <StyledButton color={WHITE} colorBorder={PRIMARY}>
        <SystemFlex noFlex>
          <Button large transparent block rounded onPress={onPress}>
            <SystemText size={24} color={BLACK}>
              {children}
            </SystemText>
          </Button>
        </SystemFlex>
      </StyledButton>
    )
  }
}
