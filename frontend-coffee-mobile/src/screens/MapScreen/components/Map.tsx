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
import { selectPercentageWidth, selectThird } from "../../../utils/selectors"
import { Alert } from "react-native"
import { theme } from "../../../system-components/system-theme/theme"
import NavigationServices from "../../../utils/NavigationServices"
import { demoStore, IDataAddition } from "../../../store/demoStore"
import { SystemTouch } from "../../../system-components/SystemTouch"

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
              onPress={() => {
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
              }}
            >
              <View
                style={{
                  backgroundColor: selectThird({ theme: theme }),
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  borderWidth: 1.5,
                  borderColor: "white"
                }}
              />
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
