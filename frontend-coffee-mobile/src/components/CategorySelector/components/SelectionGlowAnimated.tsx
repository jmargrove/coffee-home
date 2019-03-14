import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { Animated } from "react-native"
import { SystemFlex } from "../../../system-components"
import { selectPrimary } from "../../../utils/selectors"

const alphaFunction = (color: string, alpha: number) => {
  return color
    .replace(/[)]/g, `, ${alpha})`)
    .replace(/rgb/g, "rgba")
    .trim()
}

const SelectionGlow = styled(Animated.View)<{}>`
  width: 50;
  height: 50;
  border-radius: 25;
  background-color: ${({ theme }) =>
    theme && alphaFunction(selectPrimary({ theme }), 0.2)};
`

const CenterCircle = styled(Animated.View)<any>`
  border-color: ${({ theme }) =>
    theme && alphaFunction(selectPrimary({ theme }), 0.5)}
  border-width: 0.8;
  background-color: ${({ theme }) =>
    theme && alphaFunction(selectPrimary({ theme }), 0.2)}
`

const CenterCircleAnimation: FunctionComponent = ({ children }) => {
  const diameter = new Animated.Value(20)
  const radius = new Animated.Value(10)

  Animated.timing(diameter, {
    toValue: 50,
    duration: 1000
  }).start()

  Animated.timing(radius, {
    toValue: 25,
    duration: 1000
  }).start()

  return (
    <CenterCircle
      style={{ width: diameter, height: diameter, borderRadius: radius }}
    >
      {children}
    </CenterCircle>
  )
}

export const SelectionGlowAnimated = ({
  label,
  factorLevel,
  children,
  prevFactorLevel
}: any) => {
  if (label === factorLevel) {
    const diameter = new Animated.Value(20)
    const radius = new Animated.Value(10)
    Animated.timing(diameter, {
      toValue: 50,
      duration: 500
    }).start()

    Animated.timing(radius, {
      toValue: 25,
      duration: 500
    }).start()

    return (
      <SelectionGlow
        style={{ borderRadius: radius, height: diameter, width: diameter }}
      >
        <SystemFlex justify="center" align="center">
          <CenterCircleAnimation>{children}</CenterCircleAnimation>
        </SystemFlex>
      </SelectionGlow>
    )
  } else if (label === prevFactorLevel) {
    const diameter = new Animated.Value(50)
    const radius = new Animated.Value(25)
    Animated.timing(diameter, {
      toValue: 20,
      duration: 500
    }).start()

    Animated.timing(radius, {
      toValue: 10,
      duration: 500
    }).start()

    return (
      <SelectionGlow
        style={{ borderRadius: radius, height: diameter, width: diameter }}
      >
        {children}
      </SelectionGlow>
    )
  } else {
    return (
      <SelectionGlow style={{ borderRadius: 10, height: 20, width: 20 }}>
        {children}
      </SelectionGlow>
    )
  }
}
