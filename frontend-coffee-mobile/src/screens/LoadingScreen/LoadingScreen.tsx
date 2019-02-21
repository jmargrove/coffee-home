import React, { FunctionComponent } from "react"
import { Container } from "native-base"
import { SystemFlex } from "../../system-components/SystemFlex"
import { BeanLogoLarge } from "../../assets/BeanLogoLarge/BeenLogoLarge"
import { SystemText } from "../../system-components"
import { LARGE } from "../../system-components/system-theme/theme"

export const LoadingScreen: FunctionComponent = () => {
  return (
    <Container>
      <SystemFlex justify="center" align="center">
        <SystemText> Running</SystemText>
        <SystemText italic size={LARGE}>
          Coffee Engine
        </SystemText>
        <BeanLogoLarge />
      </SystemFlex>
    </Container>
  )
}
