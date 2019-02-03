import React, { FunctionComponent } from "react"
import { Container } from "native-base"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "./types"
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"
import { SystemContent } from "./system-components/SystemContent"

export const MapScreen: FunctionComponent<NavigationProps> = ({
  navigation
}) => {
  return (
    <Container>
      <SystemContent fill={true}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          provider={PROVIDER_GOOGLE}
          style={{ width: "100%", height: "100%" }}
        />
      </SystemContent>
    </Container>
  )
}

export const PoweredMapScreen = withNavigation(MapScreen)
