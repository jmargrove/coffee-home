import React, { FunctionComponent } from "react"
import { Container, View } from "native-base"
import {
  withNavigation,
  NavigationInjectedProps,
  NavigationScreenProp
} from "react-navigation"
import { NavigationProps } from "../types"
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from "react-native-maps"
import {
  SystemContent,
  SystemButtonLarge,
  SystemAbsolute
} from "../system-components"
import { YEILD_SCREEN } from "../utils/constants"
import { observer } from "mobx-react"
import { toJS } from "mobx"
import { compose, withProps } from "recompose"
import { Dimensions } from "react-native"
import {
  PRIMARY,
  BLACK,
  theme,
  WHITE,
  LIGHT_GREY,
  THIRD
} from "../system-components/system-theme/theme"
import { Store } from "./Store"

import { MapToolBar } from "./MapToolBar"
import styled from "../system-components/system-theme/styled-components"
import { AnimatedMapMarker } from "./MapMarker"
import { HeaderComponent } from "../components/HeaderComponent"

const power = compose<any, any>(
  withNavigation,
  withProps({ store: new Store() }),
  observer
)

const MapSelectLocationButton: FunctionComponent<{
  mapExtent: any
  navigation: any
  isActive: boolean
}> = ({ mapExtent, navigation, isActive }) => {
  if (isActive) {
    return (
      <SystemAbsolute bottom={32} horizontal={300}>
        <SystemAbsolute bottom={8}>
          <SystemButtonLarge
            colorBorder={PRIMARY}
            color={WHITE}
            textColor={BLACK}
            onPress={() => {
              navigation.navigate(YEILD_SCREEN, {
                point: {
                  latitude: mapExtent.latitude,
                  longitude: mapExtent.longitude
                }
              })
            }}
          >
            Select location
          </SystemButtonLarge>
        </SystemAbsolute>
      </SystemAbsolute>
    )
  } else {
    return null
  }
}

export const MapScreen: FunctionComponent<NavigationProps & any> = ({
  navigation,
  store
}) => {
  const {
    viewUserLocaton,
    handleZoomIn,
    handleZoomOut,
    handlePointDrop,
    userLocation,
    mapExtent,
    handleRegionChange,
    pointLocation,
    isSelectingPoint
  } = store
  return (
    <Container>
      <HeaderComponent />
      <SystemContent fill>
        <MapView
          mapType="satellite"
          provider={PROVIDER_GOOGLE}
          style={{ width: "100%", height: "100%" }}
          region={toJS(mapExtent)}
          onRegionChangeComplete={handleRegionChange}
        >
          <Marker coordinate={toJS(userLocation)}>
            <AnimatedMapMarker
              maxDimention={80}
              color={theme.colors[PRIMARY]}
            />
          </Marker>
        </MapView>
        <MapToolBar
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          viewUserLocaton={viewUserLocaton}
          handlePointDrop={handlePointDrop}
          isSelectingPoint={isSelectingPoint}
        />
        {isSelectingPoint && (
          <View
            style={{
              position: "relative",
              left: Dimensions.get("window").width / 2,
              bottom: Dimensions.get("window").height / 2 - 40
            }}
          >
            <Marker zIndex={2} coordinate={toJS(pointLocation)}>
              <AnimatedMapMarker
                maxDimention={80}
                color={theme.colors[THIRD]}
              />
            </Marker>
          </View>
        )}
        <MapSelectLocationButton
          isActive={isSelectingPoint}
          navigation={navigation}
          mapExtent={mapExtent}
        />
      </SystemContent>
    </Container>
  )
}

export const PoweredMapScreen = power(MapScreen)
