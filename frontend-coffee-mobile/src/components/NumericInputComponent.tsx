import React, { FunctionComponent } from "react"
import { SystemText, SystemSpace, SystemFlex } from "../system-components"
import { PoweredSystemInput } from "../system-components/SystemInput/SystemInput"
import {
  BLACK,
  SMALL,
  theme,
  REGULAR,
  MEDIUM_GREY
} from "../system-components/system-theme/theme"
import { SystemIconToggle } from "../system-components/SystemInput/SystemIconToggle"
import { View } from "react-native"
import { observable, action } from "mobx"
import { compose, withProps } from "recompose"
import { observer } from "mobx-react"

interface ITextInputComponent {
  label: string
  value: string
  autoFocus: boolean
  onChangeText: OnChangeText
}

type OnChangeText = (value: string) => void

interface ITextInputComponent {
  label: string
  autoFocus: boolean
  retrieve: any
  store: Store
}

class Store {
  @observable
  public value: string = ""

  @action
  public handleChange: OnChangeText = (value: string) => {
    this.value = value
  }
}

const power = compose<any, any>(
  withProps({
    store: new Store()
  }),
  observer
)

export const NumericInputComponent: FunctionComponent<ITextInputComponent> = ({
  label,
  autoFocus,
  retrieve,
  store,
  ...rest
}) => {
  const { value, handleChange } = store
  retrieve(value)
  return (
    <SystemFlex noFlex row>
      <SystemSpace size={REGULAR} />
      <SystemFlex>
        <SystemText color={BLACK}>{label}</SystemText>
        <SystemSpace size={SMALL} />
        <SystemFlex row noFlex>
          <SystemSpace size={REGULAR} />
          <SystemFlex>
            <PoweredSystemInput
              keyboardType="numeric"
              units="tones of coffee per hectar"
              value={value}
              autoFocus={autoFocus}
              onChangeText={handleChange}
              IconToggle={SystemIconToggle}
              {...rest}
            />
          </SystemFlex>
          <SystemSpace size={REGULAR} />
        </SystemFlex>
        <InputTray />
      </SystemFlex>
      <SystemSpace size={REGULAR} />
    </SystemFlex>
  )
}

export const NumericInputWithStore = power(NumericInputComponent)

const InputTray = () => {
  return (
    <SystemFlex noFlex row align="flex-end">
      <View
        style={{
          height: 8,
          width: 2,
          backgroundColor: theme.colors[MEDIUM_GREY]
        }}
      />
      <View
        style={{
          width: 74,
          height: 2,
          backgroundColor: theme.colors[MEDIUM_GREY]
        }}
      />
      <View
        style={{
          height: 8,
          width: 2,
          backgroundColor: theme.colors[MEDIUM_GREY]
        }}
      />
      <View
        style={{
          width: 224,
          height: 2,
          backgroundColor: theme.colors[MEDIUM_GREY]
        }}
      />
      <View
        style={{
          height: 8,
          width: 2,
          backgroundColor: theme.colors[MEDIUM_GREY]
        }}
      />
    </SystemFlex>
  )
}
