import React, { FunctionComponent } from "react"
import { Container, Button, Text, Image, H2 } from "native-base"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "./types"
import { SystemFlex } from "./system-components/SystemFlex"
import { SystemContent } from "./system-components/SystemContent"
import { BIG } from "./utils/theme"
import { SystemSpace } from "./system-components/SystemSpace"
import { MAP_SCREEN } from "./utils/constants"
import { View, ImageBackground } from "react-native"

const ButtonLarge: FunctionComponent<any> = ({ to, navigation }) => {
  const navigationHandler = () => navigation.navigate(to)

  return (
    <Button block large onPress={navigationHandler} dark>
      <Text>Get Started</Text>
    </Button>
  )
}

const PoweredButtonLarge = withNavigation(ButtonLarge)

export const WelcomeScreen: FunctionComponent<NavigationProps> = () => {
  return (
    <Container>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("./assests/coffee-farm.png")}
      >
        <SystemContent fill={true}>
          <SystemFlex justify="flex-end">
            <SystemFlex justify="center" align="center">
              <View
                style={{
                  height: 200,
                  width: 200,
                  borderWidth: 4,
                  borderRadius: 4,
                  backgroundColor: "rgba(225,225,225, 0.75)"
                }}
              >
                <SystemFlex justify="center" align="center">
                  <H2>Coffee Engine</H2>
                </SystemFlex>
              </View>
            </SystemFlex>
            <SystemFlex noFlex row justify="center">
              <PoweredButtonLarge to={MAP_SCREEN} />
            </SystemFlex>
            <SystemSpace size={BIG} />
          </SystemFlex>
        </SystemContent>
      </ImageBackground>
    </Container>
  )
}

export const PoweredWelcomeScreen = WelcomeScreen
