import React, { FunctionComponent } from "react"
import { SystemFlex } from "../../../system-components/SystemFlex"
import { TouchableOpacity } from "react-native"
import { View } from "react-native"
import {
  MEDIUM_GREY,
  theme,
  BLACK
} from "../../../system-components/system-theme/theme"
import { SystemText } from "../../../system-components"
import { YtickAnimated, YtickContainer } from "./YtickAnimated"
import { SelectionGlowAnimated } from "./SelectionGlowAnimated"
import { IconTick } from "../../../assets/IconTick/IconTick"
import { IconCross } from "../../../assets/IconCross/IconCross"

interface ITickProps {
  handleShadeChange: (shade: string) => void
  shadeLevel: string
  prevShadeLevel?: string
  label: string
}

const GreaterTick: FunctionComponent<ITickProps> = ({
  handleShadeChange,
  shadeLevel,
  prevShadeLevel,
  label
}) => (
  <TouchableOpacity onPress={() => handleShadeChange(label)}>
    <SystemFlex noFlex align="center">
      <SelectionGlowAnimated
        label={label}
        shadeLevel={shadeLevel}
        prevShadeLevel={prevShadeLevel}
      >
        <SystemFlex justify="center" align="center">
          {label === shadeLevel ? <IconTick /> : <IconCross />}
        </SystemFlex>
      </SelectionGlowAnimated>
      <YtickAnimated
        label={label}
        shadeLevel={shadeLevel}
        prevShadeLevel={prevShadeLevel}
      />
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
  prevShadeLevel: string
}

export const AxisNode: FunctionComponent<IAxisNode> = ({
  left,
  right,
  label,
  handleShadeChange,
  shadeLevel,
  prevShadeLevel
}) => {
  return (
    <SystemFlex noFlex align="center">
      <GreaterTick
        handleShadeChange={handleShadeChange}
        shadeLevel={shadeLevel}
        prevShadeLevel={prevShadeLevel}
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
