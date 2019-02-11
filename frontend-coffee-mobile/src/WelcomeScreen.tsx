import React, { FunctionComponent } from "react"
import { Container } from "native-base"
import { Image } from "react-native"
import { withNavigation } from "react-navigation"
import { MAP_SCREEN } from "./utils/constants"
import { NavigationProps } from "./types.d"
import {
  SystemContent,
  SystemFlex,
  SystemTitle,
  SystemText,
  SystemSpace,
  SystemButtonLarge,
  SystemAbsolute
} from "./system-components"
import {
  BIG,
  BLACK,
  PRIMARY,
  ALPHA_PRIMARY,
  WHITE
} from "./system-components/system-theme/theme"

export const WelcomeScreen: FunctionComponent<NavigationProps> = ({
  navigation
}) => {
  return (
    <Container>
      <SystemContent fill={true}>
        <SystemFlex justify="center" align="center">
          <SystemTitle>Coffee Engine</SystemTitle>
          <SystemSpace size={BIG} />
          <Image source={require("./assets/logo-yellow-large.png")} />
          <SystemSpace size={BIG} />
          <SystemText size={24} center color={BLACK}>
            Get yeild estimates for any location on the globe.
          </SystemText>
          <SystemSpace size={BIG} />
          <SystemAbsolute bottom={24}>
            <SystemButtonLarge
              colorBorder={PRIMARY}
              color={WHITE}
              textColor={BLACK}
              onPress={() => navigation.navigate(MAP_SCREEN)}
            >
              Get started
            </SystemButtonLarge>
          </SystemAbsolute>
        </SystemFlex>
      </SystemContent>
    </Container>
  )
}

export const PoweredWelcomeScreen = withNavigation(WelcomeScreen)
