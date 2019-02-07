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
import {
  NativeEventEmitter,
  NativeTouchEvent,
  View,
  TouchableHighlight,
  TouchableOpacity
} from "react-native"
import { SystemExtent } from "../system-components/SystemExtent"
import { BIG, SMALL } from "../system-components/system-theme/theme"

class Store {
  constructor() {
    this.handleInitialLocation()
  }

  @observable
  marker: { latitude: number; longitude: number } = {
    latitude: 0,
    longitude: 0
  }

  @observable
  zoom = { latitudeDelta: 0.015, longitudeDelta: 0.0121 }

  @action
  handleMakerLocation = ({ nativeEvent }: any) => {
    this.marker = nativeEvent.coordinate
  }

  @action
  handleInitialLocation = () => {
    navigator.geolocation.getCurrentPosition(
      location => {
        console.log("location", location)
        const { latitude, longitude } = location.coords
        this.marker = { latitude, longitude }
        this.zoom = { latitudeDelta: 0.015, longitudeDelta: 0.0121 }
      },
      error => {
        console.log("error", error)
      },
      {
        timeout: 1000 * 5,
        enableHighAccuracy: false
      }
    )
  }

  @action handleZoomIn = () => {
    const { latitudeDelta, longitudeDelta } = this.zoom
    this.zoom = {
      latitudeDelta: latitudeDelta / 3,
      longitudeDelta: longitudeDelta / 3
    }
  }

  @action handleZoomOut = () => {
    const { latitudeDelta, longitudeDelta } = this.zoom
    this.zoom = {
      latitudeDelta: latitudeDelta * 3,
      longitudeDelta: longitudeDelta * 3
    }
  }
}

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
        <SystemAbsolute bottom={200} right={24}>
          <TouchableOpacity onPress={handleZoomIn}>
            <SystemExtent circle={48} color="orange">
              <SystemFlex justify="center" align="center">
                <SystemText>+</SystemText>
              </SystemFlex>
            </SystemExtent>
          </TouchableOpacity>

          <SystemSpace size={SMALL} />
          <TouchableHighlight onPress={handleZoomOut}>
            <SystemExtent circle={48} color="red">
              <SystemFlex justify="center" align="center">
                <SystemText>-</SystemText>
              </SystemFlex>
            </SystemExtent>
          </TouchableHighlight>

          <SystemSpace size={SMALL} />
          <TouchableHighlight onPress={handleInitialLocation}>
            <SystemExtent circle={48} color="blue">
              <SystemFlex justify="center" align="center">
                <SystemText>Go</SystemText>
              </SystemFlex>
            </SystemExtent>
          </TouchableHighlight>
        </SystemAbsolute>
        <SystemAbsolute bottom={64} horizontal={300}>
          <SystemButtonLarge
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
