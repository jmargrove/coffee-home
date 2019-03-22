import React, { useState } from "react"
import { View } from "native-base"
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"
import { SystemAbsolute, SystemFlex } from "../../../system-components"
import {
  SET_PARAMETERS_SCREEN,
  YIELD,
  MODEL_RESULTS_SCREEN,
  OPTIMIZE
} from "../../../utils/constants"
import { IconPlus } from "../../../assets/IconPlus/IconPlus"
import { selectPercentageWidth } from "../../../utils/selectors"
import { Alert } from "react-native"
import NavigationServices from "../../../utils/NavigationServices"
import { demoStore, IDataAddition } from "../../../store/demoStore"
import { SystemTouch } from "../../../system-components/SystemTouch"
import { SavedLocationMarker } from "./SavedLocationMarker"

type AlertPointAction = (args: { point: IDataAddition }) => void

const alertPointAction: AlertPointAction = ({ point }) => {
  Alert.alert(point.pointName, " would you like to...", [
    {
      text: "Calculate yield",
      onPress: () =>
        NavigationServices.navigate(MODEL_RESULTS_SCREEN, {
          point,
          type: YIELD
        })
    },
    {
      text: "Optimize shade",
      onPress: () =>
        NavigationServices.navigate(MODEL_RESULTS_SCREEN, {
          point,
          type: OPTIMIZE
        })
    },
    { text: "Cancel", style: "destructive" }
  ])
}

export const Map: React.FC<{ selectPoint: boolean }> = ({ selectPoint }) => {
  const [pointLocation, setPointLocation] = useState({
    latitude: 0,
    longitude: 0
  })

  return (
    <>
      <MapView
        showsUserLocation={true}
        mapType="hybrid"
        showsCompass={true}
        showsScale={true}
        provider={PROVIDER_GOOGLE}
        style={{ width: "100%", height: "100%" }}
        onRegionChange={({ longitude, latitude }) =>
          setPointLocation({ longitude, latitude })
        }
      >
        {demoStore.savedPoints.map((point: IDataAddition, i: number) => {
          return (
            <Marker
              key={i}
              zIndex={99}
              coordinate={{ latitude: point.lat, longitude: point.lng }}
              onPress={() => alertPointAction({ point })}
            >
              <SavedLocationMarker />
            </Marker>
          )
        })}
      </MapView>
      {selectPoint && (
        <SystemAbsolute bottom={0} left={0}>
          <View
            style={{
              width: selectPercentageWidth({ percent: 1 }),
              height: 100
            }}
          >
            <SystemFlex justify="center" align="center">
              <SystemTouch
                onPress={() => {
                  demoStore.handleUpdateCoordinates({
                    coordinates: {
                      lat: pointLocation.latitude,
                      lng: pointLocation.longitude
                    }
                  })
                  NavigationServices.navigate(SET_PARAMETERS_SCREEN, {})
                }}
              >
                <IconPlus />
              </SystemTouch>
            </SystemFlex>
          </View>
        </SystemAbsolute>
      )}
    </>
  )
}
