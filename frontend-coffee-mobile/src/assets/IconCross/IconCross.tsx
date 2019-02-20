import React, { FunctionComponent } from "react"
import { Image, View } from "react-native"
import styled from "../../system-components/system-theme/styled-components"
import { PRIMARY, WHITE } from "../../system-components/system-theme/theme"
import { SystemFlex } from "../../system-components"
const source = require("./cross.png")

const IconContainer = styled(View)<any>`
  border-width: 0.8;
  border-color: ${({ theme }) => theme && theme.colors[PRIMARY]};
  border-radius: 10;
  width: 20;
  height: 20;
  background-color: ${({ theme }) => theme && theme.colors[WHITE]};
`

export const IconCross: FunctionComponent<{}> = () => {
  return (
    <IconContainer>
      <SystemFlex justify="center" align="center">
        <Image source={source} />
      </SystemFlex>
    </IconContainer>
  )
}
