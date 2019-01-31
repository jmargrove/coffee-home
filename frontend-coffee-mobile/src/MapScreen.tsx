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

export const MapScreen: FunctionComponent = withNavigation(
  ({ navigation }: any) => {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Map</Title>
          </Body>
        </Header>
        <Content>
          <Button
            rounded
            large
            onPress={() => navigation.navigate(YEILD_SCREEN)}
          >
            <Text>Calculate Yeild</Text>
          </Button>
        </Content>
        <Footer />
      </Container>
    )
  }
)
