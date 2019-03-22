import React, { FunctionComponent, ReactNode } from "react"
import { SystemText, SystemSpace, SystemFlex } from "../system-components"
import { PoweredSystemInput } from "../system-components/SystemInput/SystemInput"
import { theme } from "../system-components/system-theme/theme"
import { SystemIconToggle } from "../system-components/SystemInput/SystemIconToggle"
import { View } from "react-native"
import { compose, shouldUpdate } from "recompose"
import {
  selectRegular,
  selectSmall,
  selectMediumGrey
} from "../utils/selectors"

interface ITextInputComponentProps {
  label: string
  autoFocus: boolean
  value: string
  handleChange: any
  units: string
  IconToggle?: boolean | ReactNode
  editable?: boolean
  selectTextOnFocus?: boolean
  textSize?: number
}

export const NumericInputComponent: FunctionComponent<
  ITextInputComponentProps
> = ({ label, autoFocus, units, value, handleChange, textSize, ...rest }) => {
  return (
    <SystemFlex noFlex row>
      <SystemSpace size={selectRegular} />
      <SystemFlex>
        <SystemText>{label}</SystemText>
        <SystemSpace size={selectSmall} />
        <SystemFlex row noFlex>
          <SystemSpace size={selectRegular} />
          <SystemFlex>
            <PoweredSystemInput
              textSize={textSize}
              keyboardType="numeric"
              units={units}
              value={value}
              autoFocus={autoFocus}
              onChangeText={handleChange}
              IconToggle={SystemIconToggle}
              maxLength={3}
              {...rest}
            />
          </SystemFlex>
          <SystemSpace size={selectRegular} />
        </SystemFlex>
        <InputTray />
      </SystemFlex>
      <SystemSpace size={selectRegular} />
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

const InputTray: React.FC = () => {
  return (
    <SystemFlex noFlex row align="flex-end">
      <View
        style={{
          height: 8,
          width: 2,
          backgroundColor: selectMediumGrey({ theme })
        }}
      />
      <View
        style={{
          width: 74,
          height: 2,
          backgroundColor: selectMediumGrey({ theme })
        }}
      />
      <View
        style={{
          height: 8,
          width: 2,
          backgroundColor: selectMediumGrey({ theme })
        }}
      />
      <View
        style={{
          flexGrow: 1,
          height: 2,
          backgroundColor: selectMediumGrey({ theme })
        }}
      />
      <View
        style={{
          height: 8,
          width: 2,
          backgroundColor: selectMediumGrey({ theme })
        }}
      />
    </SystemFlex>
  )
}
