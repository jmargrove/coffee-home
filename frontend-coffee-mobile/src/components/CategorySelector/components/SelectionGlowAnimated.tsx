import React from "react"
import styled from "styled-components"
import { View } from "native-base"
import { PRIMARY } from "../../../system-components/system-theme/theme"
import { Animated } from "react-native"
import { intercept, observe, observable } from "mobx"
import { observer } from "mobx-react"

const SelectionGlow = styled(Animated.View)<any>`
  width: 50;
  height: 50;
  border-radius: 25;
  background-color: ${({ theme }) => theme && theme.colors[PRIMARY]};
`

export const SelectionGlowAnimated = ({ label, shadeLevel, children }: any) => {
  //   let changed = false
  //   observe(shadeLevel, change => {
  //     if (change && change.oldValue && change.oldValue === label) {
  //       changed = true
  //     } else {
  //       changed = false
  //     }
  //   })

  if (label === shadeLevel) {
    const diameter = new Animated.Value(0)
    const radius = new Animated.Value(0)
    Animated.timing(diameter, {
      toValue: 50,
      duration: 1000
    }).start()

    Animated.timing(radius, {
      toValue: 25,
      duration: 1000
    }).start()

    return (
      <SelectionGlow
        style={{ borderRadius: radius, height: diameter, width: diameter }}
      >
        {children}
      </SelectionGlow>
    )
  } else {
    const diameter = new Animated.Value(50)
    const radius = new Animated.Value(25)
    Animated.timing(diameter, {
      toValue: 19,
      duration: 1000
    }).start()

    Animated.timing(radius, {
      toValue: 19 / 2,
      duration: 1000
    }).start()

    return (
      <SelectionGlow
        style={{ borderRadius: radius, height: diameter, width: diameter }}
      >
        {children}
      </SelectionGlow>
    )
  }
}
