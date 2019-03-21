import React, { FunctionComponent } from "react"
import { SystemFlex } from "../../../system-components/SystemFlex"
import { View } from "react-native"
import {
  MEDIUM_GREY,
  theme
} from "../../../system-components/system-theme/theme"
import { SystemText, SystemTouch } from "../../../system-components"
import { YtickAnimated, YtickContainer } from "./YtickAnimated"
import { SelectionGlowAnimated } from "./SelectionGlowAnimated"
import { IconTick } from "../../../assets/IconTick/IconTick"
import { IconCross } from "../../../assets/IconCross/IconCross"
import { selectBlack, selectMediumGrey } from "../../../utils/selectors"

interface ITickProps {
  handleFactorChange: (shade: string) => void
  factorLevel: string
  prevFactorLevel?: string
  label: string
}

const GreaterTick: FunctionComponent<ITickProps> = ({
  handleFactorChange,
  factorLevel,
  prevFactorLevel,
  label
}) => (
  <SystemTouch onPress={() => handleFactorChange(label)}>
    <SystemFlex noFlex align="center">
      <SelectionGlowAnimated
        label={label}
        factorLevel={factorLevel}
        prevFactorLevel={prevFactorLevel}
      >
        <SystemFlex justify="center" align="center">
          {label === factorLevel ? <IconTick /> : <IconCross />}
        </SystemFlex>
      </SelectionGlowAnimated>
      <YtickAnimated
        label={label}
        factorLevel={factorLevel}
        prevFactorLevel={prevFactorLevel}
      />
    </SystemFlex>
  </SystemTouch>
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
  handleFactorChange,
  factorLevel
}) => (
  <SystemTouch onPress={() => handleFactorChange(label)}>
    <SystemFlex noFlex align="center">
      <YtickContainer />
      <SystemText
        color={factorLevel === label ? selectBlack : selectMediumGrey}
      >
        {label}
      </SystemText>
    </SystemFlex>
  </SystemTouch>
)

interface IAxisNode {
  left?: boolean
  right?: boolean
  label: string
  handleFactorChange: (shade: string) => void
  factorLevel: string
  prevFactorLevel: string
}

export const AxisNode: FunctionComponent<IAxisNode> = ({
  left,
  right,
  label,
  handleFactorChange,
  factorLevel,
  prevFactorLevel
}) => {
  return (
    <SystemFlex noFlex align="center">
      <GreaterTick
        handleFactorChange={handleFactorChange}
        factorLevel={factorLevel}
        prevFactorLevel={prevFactorLevel}
        label={label}
      />
      <Xaxis left={left} right={right} />
      <LowerTick
        handleFactorChange={handleFactorChange}
        factorLevel={factorLevel}
        label={label}
      />
    </SystemFlex>
  )
}
