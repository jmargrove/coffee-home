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
import NavigationServices from "../../utils/NavigationServices"
import { LogoYelloLarge } from "../../assets"
import { selectLarge, selectRegular, selectMedium } from "../../utils/selectors"

export const WelcomeScreen: FunctionComponent = () => {
  const goToMapScreen = () => NavigationServices.navigate(MAP_SCREEN, {})
  return (
    <Container>
      <SystemContent fill={true}>
        <SystemFlex justify="center" align="center">
          <SystemFlex>
            <SystemSpace size={selectLarge} />
            <SystemTitle>Coffee Engine</SystemTitle>
          </SystemFlex>
          <SystemFlex>
            <LogoYelloLarge size={120} />
          </SystemFlex>
          <SystemFlex justify="flex-end">
            <SystemText size={24} center>
              Get yield estimates for any location on the globe.
            </SystemText>
            <SystemSpace size={selectRegular} />
            <SystemButtonLarge onPress={goToMapScreen}>
              Get started
            </SystemButtonLarge>
            <SystemSpace size={selectMedium} />
          </SystemFlex>
        </SystemFlex>
      </SystemContent>
    </Container>
  )
}
