import React, { FunctionComponent } from "react"
import { Image, View } from "react-native"
import styled from "../../system-components/system-theme/styled-components"
import { SystemFlex, SystemTouch } from "../../system-components"
import { selectWhite, selectPrimary } from "../../utils/selectors"
const source = require("./tick.png")

const IconContainer = styled(View)<any>`
  border-width: 0.8;
  border-color: ${selectPrimary};
  border-radius: 10;
  width: 20;
  height: 20;
  background-color: ${selectWhite};
`

export const IconTick: FunctionComponent<{ onPress?: () => void }> = ({
  onPress
}) => {
  return (
    <SystemTouch onPress={onPress ? onPress : () => {}} disabled={!onPress}>
      <IconContainer>
        <SystemFlex justify="center" align="center">
          <Image source={source} />
        </SystemFlex>
      </IconContainer>
    </SystemTouch>
  )
}
