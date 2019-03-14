import React, { FunctionComponent } from "react"
import { SystemText } from "./SystemText"
import { Button } from "native-base"
import { View } from "react-native"
import { SystemFlex } from "./SystemFlex"
import { System } from "./types"
import styled from "./system-theme/styled-components"
import { WHITE, PRIMARY, theme } from "./system-theme/theme"
import {
  selectHeavyGrey,
  selectWhite,
  selectLightGrey,
  selectPrimary
} from "../utils/selectors"

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
      <StyledButton
        color={selectWhite({ theme })}
        colorBorder={selectLightGrey({ theme })}
      >
        <SystemFlex noFlex>
          <Button large transparent block rounded onPress={onPress}>
            <SystemText size={24} color={selectHeavyGrey}>
              {children}
            </SystemText>
          </Button>
        </SystemFlex>
      </StyledButton>
    )
  } else {
    return (
      <StyledButton
        color={selectWhite({ theme })}
        colorBorder={selectPrimary({ theme })}
      >
        <SystemFlex noFlex>
          <Button large transparent block rounded onPress={onPress}>
            <SystemText size={24}>{children}</SystemText>
          </Button>
        </SystemFlex>
      </StyledButton>
    )
  }
}
