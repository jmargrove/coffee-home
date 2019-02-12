import React, { FunctionComponent } from "react"
import { Container, View } from "native-base"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../types"
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from "react-native-maps"
import {
  SystemContent,
  SystemButtonLarge,
  SystemAbsolute,
  SystemSpace,
  SystemText,
  SystemFlex
} from "../system-components"
import { YEILD_SCREEN, MAP_SCREEN } from "../utils/constants"
import { observer } from "mobx-react"
import { toJS } from "mobx"
import { compose, withProps } from "recompose"
import { TouchableOpacity, Dimensions } from "react-native"
import {
  SMALL,
  PRIMARY,
  BLACK,
  theme,
  WHITE,
  LIGHT_GREY
} from "../system-components/system-theme/theme"
import { Store } from "./Store"
import { Image } from "react-native"
import { MapToolBar } from "./MapToolBar"
import styled from "../system-components/system-theme/styled-components"

const power = compose<any, any>(
  withNavigation,
  withProps({ store: new Store() }),
  observer
)

const PhoneInfoBarr = styled(View)<any>`
  height: 24;
  width: 100%;
  background-color: ${({ theme }) => theme && theme.colors[PRIMARY]};
`

const HeaderContainer = styled(View)<any>`
  width: ${Dimensions.get("window").width};
  height: 80;
  background-color: ${({ theme }) => theme && theme.colors[LIGHT_GREY]};
`
const YellowLine = styled(View)<any>`
width: ${Dimensions.get("window").width}
height: 2;
background-color: ${({ theme }) => theme && theme.colors[PRIMARY]};
`

const GreyLine = styled(View)<any>`
  width: ${Dimensions.get("window").width};
  height: 1;
  background-color: grey;
`

export const MapScreen: FunctionComponent<NavigationProps & any> = ({
  navigation,
  store
}) => {
  const {
    viewUserLocaton,
    handleZoomIn,
    handleZoomOut,
    isDisabled,
    handlePointDrop,
    userLocation,
    mapExtent,
    handleRegionChange,
    pointLocation,
    isSelectingPoint
  } = store

  return (
    <Container>
      <HeaderContainer>
        <SystemFlex justify="space-between">
          <PhoneInfoBarr />
          <SystemFlex row align="center" justify="space-between">
            <TouchableOpacity>
              <SystemFlex row noFlex>
                <SystemSpace size={SMALL} />
                <Image source={require("./../assets/back.png")} />
              </SystemFlex>
            </TouchableOpacity>

            <SystemText color={BLACK} size={24} italic bold>
              Select location
            </SystemText>
            <SystemFlex row noFlex>
              <Image source={require("./../assets/settings.png")} />
              <SystemSpace size={SMALL} />
            </SystemFlex>
          </SystemFlex>

          <SystemFlex noFlex>
            <YellowLine />
            <GreyLine />
          </SystemFlex>
        </SystemFlex>
      </HeaderContainer>
      <SystemContent fill>
        <MapView
          mapType="satellite"
          provider={PROVIDER_GOOGLE}
          style={{ width: "100%", height: "100%" }}
          region={toJS(mapExtent)}
          onRegionChangeComplete={handleRegionChange}
        >
          <Marker
            coordinate={toJS(userLocation)}
            image={require("./../assets/map-location-yellow.png")}
          />
          {isSelectingPoint && (
            <Marker
              zIndex={2}
              draggable={true}
              // onDrag={handleDraggableMarker}
              coordinate={toJS(pointLocation)}
              image={require("./../assets/map-location-red.png")}
            />
          )}
        </MapView>
        <MapToolBar
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          viewUserLocaton={viewUserLocaton}
          handlePointDrop={handlePointDrop}
        />
        {isSelectingPoint && (
          <SystemAbsolute bottom={32} horizontal={300}>
            <SystemAbsolute bottom={8}>
              <SystemButtonLarge
                colorBorder={PRIMARY}
                color={WHITE}
                textColor={BLACK}
                onPress={() => navigation.navigate(YEILD_SCREEN)}
              >
                Select location
              </SystemButtonLarge>
            </SystemAbsolute>
          </SystemAbsolute>
        )}
      </SystemContent>
    </Container>
  )
}

export const PoweredMapScreen = power(MapScreen)
