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
import { SystemFlex } from "./system-components/SystemFlex"
import MapView, {PROVIDER_GOOGLE } from "react-native-maps"

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
        <MapView provider={PROVIDER_GOOGLE} style={{width: 100, height: 100}} />
        <SystemFlex justify="center" align="center">
          <Button
            rounded
            large
            onPress={() => navigation.navigate(YEILD_SCREEN)}
          >
            <Text>Calculate Yeild</Text>
          </Button>
        </SystemFlex>
      </Content>
      <Footer />
    </Container>
  )
}

export const PoweredMapScreen = withNavigation(MapScreen)
