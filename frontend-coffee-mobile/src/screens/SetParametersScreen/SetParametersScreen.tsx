import React, { FunctionComponent } from "react"
import { HeaderComponent } from "../../components/HeaderComponent"
import { Container, Input } from "native-base"
import {
  SystemContent,
  SystemFlex,
  SystemSpace,
  SystemText
} from "../../system-components"
import styled from "../../system-components/system-theme/styled-components"
import { View, TextInput } from "react-native"
import {
  REGULAR,
  BLACK,
  PRIMARY,
  theme,
  SMALL,
  LIGHT_GREY,
  HEAVY_GREY,
  MEDIUM_GREY
} from "../../system-components/system-theme/theme"
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../../types"
import { AnimatedMapMarker } from "../MapScreen/components/MapMarker"
import { BoundsBar } from "../../components/BoundsBar"
import { PoweredSystemInput } from "../../system-components/SystemInput/SystemInput"
import { compose, withProps, mapProps } from "recompose"
import { observable, action } from "mobx"
import { observer } from "mobx-react"
import { SystemIconToggle } from "../../system-components/SystemInput/SystemIconToggle"
import { TextInputComponent } from "../../components/InputComponent"

const SelectedLocationContainer = styled(View)<any>`
  height: 132;
`

const MapFixed: FunctionComponent<{ point: any }> = ({ point }) => {
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
          <AnimatedMapMarker maxDimention={60} color={theme.colors[PRIMARY]} />
        </Marker>
      </MapView>
    </SystemFlex>
  )
}

const SelectLocationTextComponent = ({ field, value }) => {
  return (
    <SystemFlex row justify="space-between">
      <SystemText size={12} color={MEDIUM_GREY}>
        {field}
      </SystemText>
      <SystemText size={12} color={BLACK}>
        {value}
      </SystemText>
    </SystemFlex>
  )
}

const SelectedLocation: FunctionComponent<{ point: any }> = ({ point }) => {
  return (
    <SystemFlex row noFlex>
      <SystemSpace size={REGULAR} />
      <SelectedLocationContainer>
        <SystemFlex>
          <BoundsBar space={REGULAR} color={PRIMARY} />
          <SystemFlex row>
            <SystemSpace size={REGULAR} />
            <SystemFlex>
              <SystemText color={BLACK}>SelectedLocation</SystemText>
              <SystemSpace size={SMALL} />
              <SelectLocationTextComponent field="Country:" value="Malaysia" />
              <SelectLocationTextComponent field="Region:" value="Sandakan" />
              <SelectLocationTextComponent
                field="Latitude:"
                value={`${Math.round(point.latitude * 1000) / 1000}°`}
              />
              <SelectLocationTextComponent
                field="Longitude:"
                value={`${Math.round(point.longitude * 1000) / 1000}°`}
              />
            </SystemFlex>
            <MapFixed point={point} />
            <SystemSpace size={REGULAR} />
          </SystemFlex>
          <BoundsBar space={REGULAR} color={PRIMARY} />
        </SystemFlex>
      </SelectedLocationContainer>
      <SystemSpace size={REGULAR} />
    </SystemFlex>
  )
}

const SetParametersScreen: FunctionComponent<{ store: any }> = ({ store }) => {
  const { point, pointName, handleNameChange } = store
  console.log("props", point, pointName, handleNameChange)
  return (
    <Container>
      <HeaderComponent>Set Parameters</HeaderComponent>
      <SystemContent fill>
        <SystemSpace size={REGULAR} />
        <SelectedLocation point={point} />
        <SystemSpace size={REGULAR} />

        <SystemSpace size={REGULAR} />
        <TextInputComponent
          label="Enter point Name"
          value={pointName}
          autoFocus={false}
          onChangeText={handleNameChange}
        />
      </SystemContent>
    </Container>
  )
}

class ParametersStore {
  @observable
  pointName = ""

  @action
  public handleNameChange = (pointName: string) => {
    this.pointName = pointName
  }

  point = { latitude: 0, longitude: 0 }

  constructor({ point }: any) {
    this.point = point
  }
}

const power = compose<any, any>(
  withNavigation,
  mapProps(({ navigation }: any) => ({
    store: new ParametersStore({ point: navigation.getParam("point") })
  })),
  observer
)

export const PoweredSetParametersScreen = power(SetParametersScreen)
