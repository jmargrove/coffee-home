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
import { theme } from "../../system-components/system-theme/theme"
import { Store } from "./Store"
import { AnimatedMapMarker } from "./components/MapMarker"
import BurgerIcon from "../../assets/BurgerIcon/BurgerIcon"
import { IconPlus } from "../../assets/IconPlus/IconPlus"
import {
  selectPercentageHeight,
  selectPercentageWidth,
  selectPrimary,
  selectThird,
  selectBlack,
  selectWhite
} from "../../utils/selectors"

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
            colorBorder={selectPrimary({ theme })}
            color={selectWhite({ theme })}
            textColor={selectBlack({ theme })}
            onPress={() => {
              navigation.navigate(SET_PARAMETERS_SCREEN, {
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

  const selectPoint = navigation.getParam("selectPoint")
  return (
    <Container>
      <StatusBar backgroundColor="transparent" />
      {/* <HeaderComponent>Select location</HeaderComponent> */}
      <SystemContent fill>
        <SystemAbsolute top={32} left={32} zIndex={32}>
          <BurgerIcon />
        </SystemAbsolute>
        <MapView
          mapType="satellite"
          provider={PROVIDER_GOOGLE}
          style={{ width: "100%", height: "100%" }}
          // region={toJS(mapExtent)}
          // onRegionChangeComplete={handleRegionChange}
        >
          <Marker coordinate={toJS(userLocation)}>
            <AnimatedMapMarker
              maxDimention={80}
              color={selectPrimary({ theme })}
            />
          </Marker>
        </MapView>

        {selectPoint && (
          <View
            style={{
              position: "relative",
              left: selectPercentageWidth({ percent: 0.5 }),
              bottom: selectPercentageHeight({ percent: 0.5 })
            }}
          >
            <Marker zIndex={2} coordinate={toJS(pointLocation)}>
              <AnimatedMapMarker
                maxDimention={80}
                color={selectThird({ theme })}
              />
            </Marker>
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
                        latitude: mapExtent.latitude,
                        longitude: mapExtent.longitude
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
