import React from "react"
import { View } from "native-base"
import styled from "../../../system-components/system-theme/styled-components"
import { Animated } from "react-native"
import { selectWhite, StyleSelector } from "../../../utils/selectors"
import { FunctionComponent } from "react"
import { alphaFunction } from "../../../utils/alphaFunction"
import { theme } from "../../../system-components/system-theme/theme"

const MarkerCenter = styled(View)<any>`
  position: absolute;
  top: 32;
  left: 32;
  width: ${({ minDimention }) => minDimention && minDimention};
  height: ${({ minDimention }) => minDimention && minDimention};
  border-radius: ${({ minDimention }) => minDimention && minDimention / 2};
  border-width: 1.5;
  border-color: ${selectWhite};
  background-color: ${({ color }) => color && color};
`
const MarkerAnimated = styled(Animated.View)<any>`
  border-width: 1.5;
  border-color: ${({ colorBorder }) => colorBorder && colorBorder};
  background-color: ${({ color }) => color && color};
`

const MarkerContainer = styled(View)<any>`
  position: relative;
  width: ${({ maxDimention }) => maxDimention && maxDimention};
  height: ${({ maxDimention }) => maxDimention && maxDimention};
  border-radius: ${({ maxDimention }) => maxDimention && maxDimention / 2};
  background-color: ${({ color }) => color && color};
`

export const MapMarker: FunctionComponent<{
  maxDimention: number
  color: StyleSelector
}> = ({ maxDimention, color }) => {
  const dimentions = new Animated.Value(0)
  const colorAlpha = alphaFunction(color({ theme }), 0.1)
  const colorAlphaBorder = alphaFunction(color({ theme }), 0.2)

  Animated.loop(
    Animated.sequence([
      Animated.timing(dimentions, {
        toValue: 1,
        duration: 1000
      }),
      Animated.timing(dimentions, {
        toValue: 0,
        duration: 1000
      })
    ])
  ).start()

  return (
    <MarkerContainer maxDimention={maxDimention} color={colorAlpha}>
      <MarkerAnimated
        style={{
          possition: "absolute",
          top: dimentions.interpolate({
            inputRange: [0, 1],
            outputRange: [40 - 17.5 / 2, 15]
          }),
          left: dimentions.interpolate({
            inputRange: [0, 1],
            outputRange: [40 - 17.5 / 2, 15]
          }),
          width: dimentions.interpolate({
            inputRange: [0, 1],
            outputRange: [17.5, 50]
          }),
          height: dimentions.interpolate({
            inputRange: [0, 1],
            outputRange: [17.5, 50]
          }),
          borderRadius: dimentions.interpolate({
            inputRange: [0, 1],
            outputRange: [17.5 / 2, 25]
          })
        }}
        color={colorAlpha}
        colorBorder={colorAlphaBorder}
      />
      <MarkerCenter minDimention={16} color={color} />
    </MarkerContainer>
  )
}

export const AnimatedMapMarker = MapMarker
