import React, { FunctionComponent } from "react"
import { Container } from "native-base"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../types"
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"
import {
  SystemContent,
  SystemButtonLarge,
  SystemAbsolute
} from "../system-components"
import { YEILD_SCREEN } from "../utils/constants"

export const MapScreen: FunctionComponent<NavigationProps> = ({
  navigation
}) => {
  navigator.geolocation.getCurrentPosition(
    location => {
      console.log("location:", location)
    },
    error => {
      console.log("error", error)
    },
    {
      timeout: 1000 * 5,
      enableHighAccuracy: false
    }
  )

  return (
    <Container>
      <SystemContent fill>
        <MapView
          onPress={p => console.log(p)}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          style={{ width: "100%", height: "100%" }}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >
          <Marker
            style={{ width: 20, height: 20, backgroundColor: "black" }}
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}
          />
        </MapView>
        <SystemAbsolute bottom={64} horizontal={300}>
          <SystemButtonLarge onPress={() => navigation.navigate(YEILD_SCREEN)}>
            select location
          </SystemButtonLarge>
        </SystemAbsolute>
      </SystemContent>
    </Container>
  )
}

export const PoweredMapScreen = withNavigation(MapScreen)
