import React, { FunctionComponent } from "react"
import { SystemFlex } from "../../../../../system-components"
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"
import { AnimatedMapMarker } from "../../../../MapScreen/components/MapMarker"
import { selectPrimary } from "../../../../../utils/selectors"

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
          <AnimatedMapMarker maxDimention={60} color={selectPrimary} />
        </Marker>
      </MapView>
    </SystemFlex>
  )
}
