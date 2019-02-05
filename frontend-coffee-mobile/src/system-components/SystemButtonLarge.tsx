import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { SystemText } from "./SystemText"
import { Button } from "native-base"
import { View } from "react-native"
import { SystemFlex } from "./SystemFlex"
import { System } from "./types"

const StyledButton = styled(View)<System.StyledButtonProps>`
  background-color: white;
  border-width: 1;
  border-color: purple;
  width: 300;
  border-radius: 25;
  height: 64;
`

export const SystemButtonLarge: FunctionComponent<System.ButtonLargeProps> = ({
  children,
  onPress
}) => {
  return (
    <StyledButton>
      <SystemFlex noFlex>
        <Button large transparent block rounded onPress={onPress}>
          <SystemText uppercase size={24}>
            {children}
          </SystemText>
        </Button>
      </SystemFlex>
    </StyledButton>
  )
}
