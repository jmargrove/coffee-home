import React, { FunctionComponent } from "react"
import {
  Container,
  Header,
  Title,
  Body,
  Button,
  Footer,
  Text
} from "native-base"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "./types"
import { SystemFlex } from "./system-components/SystemFlex"
import { SystemContent } from "./system-components/SystemContent"
import { SMALL, LARGE, BIG } from "./utils/theme"
import { SystemSpace } from "./system-components/SystemSpace"
import { MAP_SCREEN } from "./utils/constants"

const ButtonLarge: FunctionComponent<any> = ({ to, navigation }) => {
  const navigationHandler = () => navigation.navigate(to)

  return (
    <Button bordered rounded block large onPress={navigationHandler}>
      <Text>Getting Started</Text>
    </Button>
  )
}

const PoweredButtonLarge = withNavigation(ButtonLarge)

export const WelcomeScreen: FunctionComponent<NavigationProps> = () => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Welcome</Title>
        </Body>
      </Header>
      <SystemContent fill={true}>
        <SystemFlex justify="flex-end">
          <SystemFlex noFlex row justify="center">
            <PoweredButtonLarge to={MAP_SCREEN} />
          </SystemFlex>
          <SystemSpace size={BIG} />
        </SystemFlex>
      </SystemContent>
    </Container>
  )
}

export const PoweredWelcomeScreen = WelcomeScreen
