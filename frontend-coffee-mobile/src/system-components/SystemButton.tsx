import React from "react"
import styled from "styled-components"
import { SystemText } from "./SystemText"
import { Button } from "native-base"
import { View } from "react-native"
import { REGULAR } from "./theme"
import { SystemSpace } from "./SystemSpace"
import { SystemFlex } from "./SystemFlex"

const StyledButton = styled(View)<any>`
  background-color: white;
  border-width: 1;
  border-color: purple;
  width: 300;
  border-radius: 25;
  height: 64;
`

export const SystemButtonLarge = ({ children, onPress }: any) => {
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
