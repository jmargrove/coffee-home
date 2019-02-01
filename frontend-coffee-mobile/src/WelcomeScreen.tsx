import { FunctionComponent } from "react"
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
import { NavigationProps } from "./types"
import { MAP_SCREEN } from "./utils/constants"

export const WelcomeScreen: FunctionComponent<NavigationProps> = ({
  navigation
}): any => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Welcome</Title>
        </Body>
      </Header>
      <Content>
        <Button rounded large onPress={() => navigation.navigate(MAP_SCREEN)}>
          <Text>Getting Started</Text>
        </Button>
      </Content>
      <Footer />
    </Container>
  )
}

export const PoweredWelcomeScreen = withNavigation(WelcomeScreen)
