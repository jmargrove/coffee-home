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
import { YEILD_SCREEN } from "./utils/constants"
import { NavigationProps } from "./types"

export const MapScreen: FunctionComponent<NavigationProps> = ({
  navigation
}) => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Map</Title>
        </Body>
      </Header>
      <Content>
        <Button rounded large onPress={() => navigation.navigate(YEILD_SCREEN)}>
          <Text>Calculate Yeild</Text>
        </Button>
      </Content>
      <Footer />
    </Container>
  )
}

export const PoweredMapScreen = withNavigation(MapScreen)
