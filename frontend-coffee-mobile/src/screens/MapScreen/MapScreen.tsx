import React, { FunctionComponent } from "react"
import { Container, View } from "native-base"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../../types"
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"
import {
  SystemContent,
  SystemButtonLarge,
  SystemAbsolute,
  SystemFlex
} from "../../system-components"
import { SET_PARAMETERS_SCREEN } from "../../utils/constants"
import { observer } from "mobx-react"
import { toJS } from "mobx"
import { compose, withProps } from "recompose"
import { StatusBar, TouchableOpacity } from "react-native"
import { Store } from "./Store"
import { AnimatedMapMarker } from "./components/MapMarker"
import BurgerIcon from "../../assets/BurgerIcon/BurgerIcon"
import { IconPlus } from "../../assets/IconPlus/IconPlus"
import { MapSelectLocationButton } from "./components/MapSelectLocationButton"
import {
  selectPercentageHeight,
  selectPercentageWidth,
  selectPrimary
} from "../../utils/selectors"
import { CloseIcon } from "../../assets/"

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
    handlePointLocation,
    mapExtent,
    pointLocation,
    isSelectingPoint
  } = store

  const selectPoint = navigation.getParam("selectPoint")
  return (
    <Container>
      <StatusBar backgroundColor="transparent" />
      <SystemContent fill>
        {!selectPoint && <BurgerIcon />}
        {selectPoint && <CloseIcon />}

        <MapView
          showsUserLocation={true}
          mapType="hybrid"
          showsCompass={true}
          showsScale={true}
          provider={PROVIDER_GOOGLE}
          style={{ width: "100%", height: "100%" }}
          onRegionChange={handlePointLocation}
        />
        <Marker zIndex={2} coordinate={toJS(pointLocation)} />
        {selectPoint && (
          <View
            style={{
              position: "absolute",
              left: selectPercentageWidth({ percent: 0.5 }) - 40,
              bottom: selectPercentageHeight({ percent: 0.5 }) - 40
            }}
          >
            <AnimatedMapMarker maxDimention={80} color={selectPrimary} />
          </View>
        )}

        {selectPoint && (
          <SystemAbsolute bottom={0} left={0}>
            <View
              style={{
                width: selectPercentageWidth({ percent: 1 }),
                height: 100
              }}
            >
              <SystemFlex justify="center" align="center">
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(SET_PARAMETERS_SCREEN, {
                      point: {
                        latitude: pointLocation.latitude,
                        longitude: pointLocation.longitude
                      }
                    })
                  }}
                >
                  <IconPlus />
                </TouchableOpacity>
              </SystemFlex>
            </View>
          </SystemAbsolute>
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
