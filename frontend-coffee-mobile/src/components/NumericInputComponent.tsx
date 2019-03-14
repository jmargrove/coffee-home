import React, { FunctionComponent } from "react"
import { SystemText, SystemSpace, SystemFlex } from "../system-components"
import { PoweredSystemInput } from "../system-components/SystemInput/SystemInput"
import {
  SMALL,
  theme,
  REGULAR,
  MEDIUM_GREY
} from "../system-components/system-theme/theme"
import { SystemIconToggle } from "../system-components/SystemInput/SystemIconToggle"
import { View } from "react-native"
import { compose, shouldUpdate } from "recompose"

interface ITextInputComponentProps {
  label: string
  autoFocus: boolean
  value: string
  handleChange: any
  units: string
}

export const NumericInputComponent: FunctionComponent<
  ITextInputComponentProps
> = ({ label, autoFocus, units, value, handleChange, ...rest }) => {
  return (
    <SystemFlex noFlex row>
      <SystemSpace size={REGULAR} />
      <SystemFlex>
        <SystemText>{label}</SystemText>
        <SystemSpace size={SMALL} />
        <SystemFlex row noFlex>
          <SystemSpace size={REGULAR} />
          <SystemFlex>
            <PoweredSystemInput
              keyboardType="numeric"
              units={units}
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

const power = compose<ITextInputComponentProps, ITextInputComponentProps>(
  shouldUpdate(
    (props: ITextInputComponentProps, nextProps: ITextInputComponentProps) => {
      if (props.value === nextProps.value) {
        return false
      } else {
        return true
      }
    }
  )
)

export default power(NumericInputComponent)

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
