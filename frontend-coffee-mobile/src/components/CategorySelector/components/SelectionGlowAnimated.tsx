import React from "react"
import styled from "styled-components"
import { PRIMARY } from "../../../system-components/system-theme/theme"
import { Animated } from "react-native"
import { SystemFlex } from "../../../system-components"

const alphaFunction = (color: string, alpha: number) => {
  return color
    .replace(/[)]/g, `, ${alpha})`)
    .replace(/rgb/g, "rgba")
    .trim()
}

const SelectionGlow = styled(Animated.View)<any>`
  width: 50;
  height: 50;
  border-radius: 25;
  background-color: ${({ theme }) =>
    theme && alphaFunction(theme.colors[PRIMARY], 0.2)};
`

const CenterCircle = styled(Animated.View)<any>`
  border-color: ${({ theme }) =>
    theme && alphaFunction(theme.colors[PRIMARY], 0.5)}
  border-width: 0.8;
  background-color: ${({ theme }) =>
    theme && alphaFunction(theme.colors[PRIMARY], 0.2)}
`

const CenterCircleAnimation = ({ children }: any) => {
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
  shadeLevel,
  children,
  prevShadeLevel
}: any) => {
  if (label === shadeLevel) {
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
  } else if (label === prevShadeLevel) {
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
