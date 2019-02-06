import React, { FunctionComponent } from "react"
import { Container } from "native-base"
import { withNavigation } from "react-navigation"

import { NavigationProps } from "../types"
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"
import { SystemContent } from "../system-components/SystemContent"
import { SystemButtonLarge } from "../system-components/SystemButtonLarge"
import { YEILD_SCREEN } from "../utils/constants"
import { View } from "react-native"

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
      enableHighAccuracy: true
    }
  )

  return (
    <Container>
      <SystemContent fill>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ width: "100%", height: "100%" }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 24,
            backgroundColor: "blue",
            left: "12%"
          }}
        >
          <SystemButtonLarge onPress={() => navigation.navigate(YEILD_SCREEN)}>
            select location
          </SystemButtonLarge>
        </View>
      </SystemContent>
    </Container>
  )
}

export const PoweredMapScreen = withNavigation(MapScreen)
