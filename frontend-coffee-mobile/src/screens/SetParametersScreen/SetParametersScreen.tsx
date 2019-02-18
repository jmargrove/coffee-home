import React, { FunctionComponent } from "react"
import { HeaderComponent } from "../../components/HeaderComponent"
import { Container } from "native-base"
import {
  SystemContent,
  SystemSpace,
  SystemText,
  SystemFlex
} from "../../system-components"
import {
  REGULAR,
  MEDIUM,
  theme,
  MEDIUM_GREY
} from "../../system-components/system-theme/theme"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../../types"
import { compose, mapProps } from "recompose"
import { observer } from "mobx-react"
import { TextInputComponent } from "../../components/InputComponent"
import { SelectedLocation } from "./components.ts/SelectedLocation/SelectedLocation"
import { ParametersStore } from "./ParametersStore"
import { NumericInputComponent } from "../../components/NumericInputComponent"
import styled from "../../system-components/system-theme/styled-components"
import { View, Image } from "react-native"

const SetParametersScreen: FunctionComponent<{ store: ParametersStore }> = ({
  store
}) => {
  const {
    point,
    pointName,
    userCurrentYield,
    handleNameChange,
    handleYieldChange
  } = store
  return (
    <Container>
      <HeaderComponent>Set Parameters</HeaderComponent>
      <SystemContent>
        <SystemSpace size={REGULAR} />
        <SelectedLocation point={point} />
        <SystemSpace size={MEDIUM} />
        <TextInputComponent
          label="Enter point Name"
          value={pointName}
          autoFocus={false}
          onChangeText={handleNameChange}
        />
        <SystemSpace size={MEDIUM} />
        <NumericInputComponent
          label="Your current yield"
          value={userCurrentYield}
          autoFocus={false}
          onChangeText={handleYieldChange}
        />
        <SystemSpace size={MEDIUM} />
        <FactorLevelSelection />
      </SystemContent>
    </Container>
  )
}

const FactorLevelSelectionContainer = styled(View)<any>`
height: 72 
width: 100%

`

const FactorLevelSelection = () => {
  return (
    <>
      <SystemText>Your shade level</SystemText>

      <SystemFlex noFlex row>
        <SystemSpace size={REGULAR} />
        <FactorLevelSelectionContainer>
          <SystemFlex justify="flex-end">
            <InputTray />
          </SystemFlex>
        </FactorLevelSelectionContainer>
        <SystemSpace size={REGULAR} />
      </SystemFlex>
    </>
  )
}

const InputTray = () => {
  return (
    <SystemFlex noFlex align="center">
      <SystemFlex noFlex align="center">
        <Image source={require("../../assets/clear-text.png")} />
        <View
          style={{
            height: 8,
            width: 2,
            backgroundColor: theme.colors[MEDIUM_GREY]
          }}
        />
      </SystemFlex>
      <SystemFlex row noFlex>
        <View
          style={{
            height: 2,
            width: 49
          }}
        />
        <View
          style={{
            height: 2,
            width: 51,
            backgroundColor: theme.colors[MEDIUM_GREY]
          }}
        />
      </SystemFlex>

      <SystemFlex noFlex align="center">
        <View
          style={{
            height: 2,
            width: 2,
            backgroundColor: theme.colors[MEDIUM_GREY]
          }}
        />
        <SystemText color={MEDIUM_GREY}>none</SystemText>
      </SystemFlex>
    </SystemFlex>
  )
}

const power = compose<any, any>(
  withNavigation,
  mapProps(({ navigation }: NavigationProps) => ({
    store: new ParametersStore({ point: navigation.getParam("point") })
  })),
  observer
)

export const PoweredSetParametersScreen = power(SetParametersScreen)
