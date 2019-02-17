import React, { FunctionComponent } from "react"
import { SystemFlex } from "../../../../../system-components"
import styled from "../../../../../system-components/system-theme/styled-components"
import { View } from "react-native"
import {
  PRIMARY,
  theme
} from "../../../../../system-components/system-theme/theme"
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"
import { AnimatedMapMarker } from "../../../../MapScreen/components/MapMarker"

export const MapFixed: FunctionComponent<{ point: any }> = ({ point }) => {
  return (
    <SystemFlex justify="center" align="flex-end">
      <MapView
        mapType="satellite"
        provider={PROVIDER_GOOGLE}
        style={{ width: 120, height: 120 }}
        initialRegion={{
          ...point,
          latitudeDelta: 20,
          longitudeDelta: 20
        }}
      >
        <Marker coordinate={point}>
          <AnimatedMapMarker maxDimention={60} color={theme.colors[PRIMARY]} />
        </Marker>
      </MapView>
    </SystemFlex>
  )
}
