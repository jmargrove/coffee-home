import React, { FunctionComponent } from "react"
import { Container, View } from "native-base"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../../types"
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"
import {
  SystemContent,
  SystemAbsolute,
  SystemFlex
} from "../../system-components"
import { SET_PARAMETERS_SCREEN } from "../../utils/constants"
import { observer } from "mobx-react"
import { toJS } from "mobx"
import { compose, withProps, lifecycle } from "recompose"
import { StatusBar, TouchableOpacity } from "react-native"
import { Store } from "./Store"
import { AnimatedMapMarker } from "./components/MapMarker"
import BurgerIcon from "../../assets/BurgerIcon/BurgerIcon"
import { IconPlus } from "../../assets/IconPlus/IconPlus"
import { MapSelectLocationButton } from "./components/MapSelectLocationButton"
import {
  selectPercentageHeight,
  selectPercentageWidth,
  selectPrimary,
  selectThird
} from "../../utils/selectors"
import { CloseIcon } from "../../assets/"
import { SAVE_DATA_LOCALLY } from "../../utils/constants"
import { AsyncStorage, Alert } from "react-native"
import { theme } from "../../system-components/system-theme/theme"

const power = compose<any, any>(
  withNavigation,
  lifecycle({
    async componentDidMount() {
      const getPoints = async () => {
        return await AsyncStorage.getItem(SAVE_DATA_LOCALLY)
      }

      const savedPoints = await getPoints()
      this.setState({ savedPoints: JSON.parse(savedPoints!) })
    }
  }),
  withProps({ store: new Store() }),
  observer
)

export const MapScreen: FunctionComponent<NavigationProps & any> = ({
  navigation,
  store,
  savedPoints
}) => {
  const {
    handlePointLocation,
    mapExtent,
    pointLocation,
    isSelectingPoint
  } = store

  console.log("the points", savedPoints)

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
        >
          {savedPoints &&
            savedPoints.map((el, i) => {
              console.log(el)

              return (
                <Marker
                  key={i}
                  zIndex={99}
                  coordinate={{ latitude: el.lat, longitude: el.lng }}
                  onPress={() => {
                    Alert.alert(el.pointName, " would you like to...", [
                      { text: "Calculate yield" },
                      { text: "Optimize shade" }
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
