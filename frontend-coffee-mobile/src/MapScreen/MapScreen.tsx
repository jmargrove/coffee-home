import React, { FunctionComponent } from "react"
import { Container } from "native-base"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../types"
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"
import {
  SystemContent,
  SystemButtonLarge,
  SystemAbsolute,
  SystemText,
  SystemFlex,
  SystemSpace
} from "../system-components"
import { YEILD_SCREEN } from "../utils/constants"
import { observer } from "mobx-react"
import { observable, action, toJS } from "mobx"
import { compose, withProps } from "recompose"
import { TouchableHighlight, TouchableOpacity } from "react-native"
import { SystemExtent } from "../system-components/SystemExtent"
import {
  SMALL,
  WHITE,
  PRIMARY,
  SECONDARY
} from "../system-components/system-theme/theme"
import { Store } from "./Store"
import { Image } from "react-native"
const power = compose<any, any>(
  withNavigation,
  withProps({ store: new Store() }),
  observer
)

export const MapScreen: FunctionComponent<NavigationProps & any> = ({
  navigation,
  store
}) => {
  const {
    handleMakerLocation,
    handleInitialLocation,
    handleZoomIn,
    handleZoomOut,
    marker,
    zoom
  } = store

  return (
    <Container>
      <SystemContent fill>
        <MapView
          onPress={handleMakerLocation}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          style={{ width: "100%", height: "100%" }}
          region={{
            latitude: marker.latitude,
            longitude: marker.longitude,
            latitudeDelta: zoom.latitudeDelta,
            longitudeDelta: zoom.longitudeDelta
          }}
        >
          <Marker coordinate={toJS(marker)} />
        </MapView>
        <SystemAbsolute bottom={104} right={16}>
          <TouchableOpacity onPress={handleZoomIn}>
            <Image source={require("./../assets/possitive-button.png")} />
          </TouchableOpacity>

          <SystemSpace size={SMALL} />
          <TouchableOpacity onPress={handleZoomOut}>
            <Image source={require("./../assets/negative-button.png")} />
          </TouchableOpacity>

          <SystemSpace size={SMALL} />
          <TouchableOpacity onPress={handleInitialLocation}>
            <Image source={require("./../assets/cardinal-button.png")} />
          </TouchableOpacity>
        </SystemAbsolute>
        <SystemAbsolute bottom={32} horizontal={300}>
          <SystemButtonLarge
            colorBorder={SECONDARY}
            color={PRIMARY}
            textColor={WHITE}
            onPress={() =>
              navigation.navigate(YEILD_SCREEN, { coordinates: toJS(marker) })
            }
          >
            select location
          </SystemButtonLarge>
        </SystemAbsolute>
      </SystemContent>
    </Container>
  )
}

export const PoweredMapScreen = power(MapScreen)
