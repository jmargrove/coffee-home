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
  SystemPadding
} from "./../../system-components"
import NavigationServices from "../../utils/NavigationServices"
import { LogoYelloLarge } from "../../assets"
import {
  selectRegular,
  selectMedium,
  selectTextBig,
  selectBig
} from "../../utils/selectors"
import { Platform, StatusBar } from "react-native"

export const WelcomeScreen: FunctionComponent = () => {
  const goToMapScreen = () => NavigationServices.navigate(MAP_SCREEN, {})
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Platform.select({
          ios: "transparent",
          android: "white"
        })}
      />
      <SystemContent fill={true}>
        <SystemPadding size={selectRegular}>
          <SystemFlex justify="center" align="center">
            <SystemFlex>
              <SystemSpace size={selectBig} vertical />
              <SystemTitle>Coffee Engine</SystemTitle>
            </SystemFlex>
            <SystemFlex justify="center" align="center">
              <LogoYelloLarge size={120} />
            </SystemFlex>
            <SystemFlex justify="flex-end">
              <SystemText size={selectTextBig} center>
                Get yield estimates for any location on the globe.
              </SystemText>
              <SystemSpace size={selectRegular} />
              <SystemButtonLarge onPress={goToMapScreen}>
                Get started
              </SystemButtonLarge>
              <SystemSpace size={selectMedium} />
            </SystemFlex>
          </SystemFlex>
        </SystemPadding>
      </SystemContent>
    </Container>
  )
}
