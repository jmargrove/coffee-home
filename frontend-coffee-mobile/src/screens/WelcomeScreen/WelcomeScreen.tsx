import React, { FunctionComponent } from "react"
import { Container } from "native-base"
import { MAP_SCREEN } from "./../../utils/constants"
import {
  SystemContent,
  SystemFlex,
  SystemTitle,
  SystemText,
  SystemSpace,
  SystemButtonLarge
} from "./../../system-components"
import {
  MEDIUM,
  REGULAR,
  LARGE
} from "./../../system-components/system-theme/theme"
import NavigationServices from "../../utils/NavigationServices"
import { LogoYelloLarge } from "../../assets"

export const WelcomeScreen: FunctionComponent = () => {
  const goToMapScreen = () => NavigationServices.navigate(MAP_SCREEN, {})
  return (
    <Container>
      <SystemContent fill={true}>
        <SystemFlex justify="center" align="center">
          <SystemFlex>
            <SystemSpace size={LARGE} />
            <SystemTitle>Coffee Engine</SystemTitle>
          </SystemFlex>
          <SystemFlex>
            <LogoYelloLarge size={120} />
          </SystemFlex>
          <SystemFlex justify="flex-end">
            <SystemText size={24} center>
              Get yield estimates for any location on the globe.
            </SystemText>
            <SystemSpace size={REGULAR} />
            <SystemButtonLarge onPress={goToMapScreen}>
              Get started
            </SystemButtonLarge>
            <SystemSpace size={MEDIUM} />
          </SystemFlex>
        </SystemFlex>
      </SystemContent>
    </Container>
  )
}
