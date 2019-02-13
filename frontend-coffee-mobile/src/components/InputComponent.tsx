import React from "react"
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

export const TextInputComponent = ({
  label,
  value,
  onChangeText,
  autoFocus
}: any) => {
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
              value={value}
              autoFocus={autoFocus}
              onChangeText={onChangeText}
              IconToggle={SystemIconToggle}
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
          width: 300,
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
