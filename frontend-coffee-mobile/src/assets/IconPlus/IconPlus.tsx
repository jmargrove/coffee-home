import React, { FunctionComponent } from "react"
import { Image, View } from "react-native"
import styled from "../../system-components/system-theme/styled-components"
import { SystemFlex } from "../../system-components"
import { selectPrimary, selectWhite } from "../../utils/selectors"
const source = require("./../plus.png")

const IconContainer = styled(View)<{}>`
  border-width: 0.8;
  border-color: ${selectPrimary};
  border-radius: 25;
  width: 50;
  height: 50;
  background-color: ${selectWhite};
`

export const IconPlus: FunctionComponent<{}> = () => {
  return (
    <IconContainer>
      <SystemFlex justify="center" align="center">
        <Image source={source} />
      </SystemFlex>
    </IconContainer>
  )
}
