import React, { FunctionComponent } from "react"
import { Container } from "native-base"
import { MAP_SCREEN } from "./../../utils/constants"
import {
  SystemContent,
  SystemFlex,
  SystemTitle,
  SystemText,
  SystemSpace,
  SystemButtonLarge,
  SystemAbsolute
} from "./../../system-components"
import { BIG } from "./../../system-components/system-theme/theme"
import NavigationServices from "../../utils/NavigationServices"
import { LogoYelloLarge } from "../../assets"

export const WelcomeScreen: FunctionComponent = () => {
  const goToMapScreen = () => NavigationServices.navigate(MAP_SCREEN, {})
  return (
    <Container>
      <SystemContent fill={true}>
        <SystemFlex justify="center" align="center">
          <SystemTitle>Coffee Engine</SystemTitle>
          <SystemSpace size={BIG} />
          <LogoYelloLarge size={50} />
          <SystemSpace size={BIG} />
          <SystemText size={24} center>
            Get yield estimates for any location on the globe.
          </SystemText>
          <SystemSpace size={BIG} />
          <SystemAbsolute bottom={24}>
            <SystemButtonLarge onPress={goToMapScreen}>
              Get started
            </SystemButtonLarge>
          </SystemAbsolute>
        </SystemFlex>
      </SystemContent>
    </Container>
  )
}
