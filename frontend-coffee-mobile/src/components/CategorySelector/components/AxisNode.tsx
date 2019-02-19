import React, { FunctionComponent } from "react"
import { SystemFlex } from "../../../system-components/SystemFlex"
import { Image, TouchableOpacity } from "react-native"
import { View } from "react-native"
import {
  MEDIUM_GREY,
  theme,
  BLACK,
  PRIMARY
} from "../../../system-components/system-theme/theme"
import { SystemText } from "../../../system-components"
import styled from "../../../system-components/system-theme/styled-components"
import { YtickAnimated, YtickContainer } from "./YtickAnimated"
import { SelectionGlowAnimated } from "./SelectionGlowAnimated"

interface ITickProps {
  handleShadeChange: (shade: string) => void
  shadeLevel: string
  label: string
}

const SelectionGlow = styled(View)<any>`
  width: 50;
  height: 50;
  border-radius: 25;
  background-color: ${({ theme }) => theme && theme.colors[PRIMARY]};
`

const GreaterTick: FunctionComponent<ITickProps> = ({
  handleShadeChange,
  shadeLevel,
  label
}) => (
  <TouchableOpacity onPress={() => handleShadeChange(label)}>
    <SystemFlex noFlex align="center">
      <SelectionGlowAnimated label={label} shadeLevel={shadeLevel}>
        <SystemFlex justify="center" align="center">
          {label === shadeLevel ? (
            <Image source={require("../../../assets/edit-text.png")} />
          ) : (
            <Image source={require("../../../assets/clear-text.png")} />
          )}
        </SystemFlex>
      </SelectionGlowAnimated>
      <YtickAnimated label={label} shadeLevel={shadeLevel} />
    </SystemFlex>
  </TouchableOpacity>
)

const Xaxis = ({ left, right }: any) => (
  <SystemFlex row noFlex>
    <View
      style={{
        flexGrow: 1,
        height: 2,
        backgroundColor: left ? undefined : theme.colors[MEDIUM_GREY]
      }}
    />
    <View
      style={{
        width: 2,
        height: 2,
        backgroundColor: theme.colors[MEDIUM_GREY]
      }}
    />
    <View
      style={{
        flexGrow: 1,
        height: 2,
        backgroundColor: right ? undefined : theme.colors[MEDIUM_GREY]
      }}
    />
  </SystemFlex>
)

const LowerTick: FunctionComponent<ITickProps> = ({
  label,
  handleShadeChange,
  shadeLevel
}) => (
  <TouchableOpacity onPress={() => handleShadeChange(label)}>
    <SystemFlex noFlex align="center">
      <YtickContainer />
      <SystemText color={shadeLevel === label ? BLACK : MEDIUM_GREY}>
        {label}
      </SystemText>
    </SystemFlex>
  </TouchableOpacity>
)

interface IAxisNode {
  left?: boolean
  right?: boolean
  label: string
  handleShadeChange: (shade: string) => void
  shadeLevel: string
}

export const AxisNode: FunctionComponent<IAxisNode> = ({
  left,
  right,
  label,
  handleShadeChange,
  shadeLevel
}) => {
  return (
    <SystemFlex noFlex align="center">
      <GreaterTick
        handleShadeChange={handleShadeChange}
        shadeLevel={shadeLevel}
        label={label}
      />
      <Xaxis left={left} right={right} />
      <LowerTick
        handleShadeChange={handleShadeChange}
        shadeLevel={shadeLevel}
        label={label}
      />
    </SystemFlex>
  )
}
