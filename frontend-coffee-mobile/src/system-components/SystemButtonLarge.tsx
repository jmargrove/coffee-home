import React, { FunctionComponent } from "react"
import { SystemText } from "./SystemText"
import { Button } from "native-base"
import { View } from "react-native"
import { SystemFlex } from "./SystemFlex"
import { System } from "./types"
import styled from "./system-theme/styled-components"

const StyledButton = styled(View)<System.StyledButtonProps & any>`
  ${({ color, theme }) => color && `background-color: ${theme.colors[color]}`};
  border-width: 1;
  ${({ colorBorder, theme }) =>
    colorBorder && `border-color: ${theme.colors[colorBorder]}`};
  width: 300;
  height: 64;
`

export const SystemButtonLarge: FunctionComponent<System.ButtonLargeProps> = ({
  children,
  color,
  colorBorder,
  textColor,
  onPress
}) => {
  return (
    <StyledButton color={color} colorBorder={colorBorder}>
      <SystemFlex noFlex>
        <Button large transparent block rounded onPress={onPress}>
          <SystemText uppercase size={24} color={textColor}>
            {children}
          </SystemText>
        </Button>
      </SystemFlex>
    </StyledButton>
  )
}
