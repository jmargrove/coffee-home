import React, { FunctionComponent } from "react"
import {
  Container,
  Header,
  Footer,
  Content,
  Title,
  Body,
  Button
} from "native-base"
import { Text } from "react-native"
import { withNavigation } from "react-navigation"
import { MAP_SCREEN } from "./utils/constants"
import { NavigationProps } from "./types"
import { SystemFlex } from "./system-components/SystemFlex"
import { SystemContent } from "./system-components/SystemContent"

export const WelcomeScreen: FunctionComponent<NavigationProps> = ({
  navigation
}) => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Welcome</Title>
        </Body>
      </Header>
      <SystemContent>
        <SystemFlex justify="center" align="center">
          <Button rounded large onPress={() => navigation.navigate(MAP_SCREEN)}>
            <Text>Getting Started</Text>
          </Button>
        </SystemFlex>
      </SystemContent>
      <Footer />
    </Container>
  )
}

export const PoweredWelcomeScreen = withNavigation(WelcomeScreen)
