import React, { FunctionComponent } from "react"
import { Image, View } from "react-native"
import styled from "../../system-components/system-theme/styled-components"
import { SystemFlex } from "../../system-components"
import { selectWhite, selectPrimary } from "../../utils/selectors"
const source = require("./cross.png")

const IconContainer = styled(View)<{}>`
  border-width: 0.8;
  border-color: ${selectPrimary};
  border-radius: 10;
  width: 20;
  height: 20;
  background-color: ${selectWhite};
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
