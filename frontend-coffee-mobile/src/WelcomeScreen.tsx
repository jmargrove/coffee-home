import React, { FunctionComponent } from "react"
import { Container, Content, Button } from "native-base"
import { Text, Image } from "react-native"
import { withNavigation } from "react-navigation"
import { MAP_SCREEN } from "./utils/constants"
import { NavigationProps } from "./types"
import { SystemContent } from "./system-components/SystemContent"
import { SystemFlex } from "./system-components/SystemFlex"
import { SystemTitle } from "./system-components/SystemTitle"
import { SystemText } from "./system-components/SystemText"
import { SystemSpace } from "./system-components/SystemSpace"
import { REGULAR, BIG, WHITE } from "./system-components/theme"
import { SystemButtonLarge } from "./system-components/SystemButton"

export const WelcomeScreen: FunctionComponent<NavigationProps> = ({
  navigation
}) => {
  return (
    <Container>
      <SystemContent fill={true}>
        <SystemFlex justify="center" align="center">
          <SystemTitle>Coffee Engine</SystemTitle>
          <SystemSpace size={BIG} />
          <Image source={require("./assets/bean-logo-white.png")} />
          <SystemSpace size={BIG} />
          <SystemText color={WHITE}>
            Get yeild estimates for any location on the globe.
          </SystemText>
          <SystemSpace size={BIG} />
          <SystemButtonLarge onPress={() => navigation.navigate(MAP_SCREEN)}>
            Get started
          </SystemButtonLarge>
        </SystemFlex>
      </SystemContent>
    </Container>
  )
}

export const PoweredWelcomeScreen = withNavigation(WelcomeScreen)
