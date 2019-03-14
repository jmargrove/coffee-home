import React from "react"
import { View } from "native-base"
import { SystemFlex } from "../../../system-components"
import styled from "../../../system-components/system-theme/styled-components"
import { Animated } from "react-native"

const MarkerCenter = styled(View)<any>`
  width: ${({ minDimention }) => minDimention && minDimention};
  height: ${({ minDimention }) => minDimention && minDimention};
  border-radius: ${({ minDimention }) => minDimention && minDimention / 2};
  border-width: 1.5;
  border-color: white;
  background-color: ${({ color }) => color && color};
`
const MarkerAnimated = styled(Animated.View)<any>`
  width: ${({ midDimention }) => midDimention && midDimention};
  height: ${({ midDimention }) => midDimention && midDimention};
  border-radius: ${({ midDimention }) => midDimention && midDimention / 2};
  border-width: 1.5;
  border-color: ${({ colorBorder }) => colorBorder && colorBorder};
  background-color: ${({ color }) => color && color};
`

const MarkerContainer = styled(View)<any>`
  width: ${({ maxDimention }) => maxDimention && maxDimention};
  height: ${({ maxDimention }) => maxDimention && maxDimention};
  border-radius: ${({ maxDimention }) => maxDimention && maxDimention / 2};
  background-color: ${({ color }) => color && color};
`

export const MapMarker = ({ maxDimention, color, store }: any) => {
  const dimentions = new Animated.Value(0)

  const colorAlpha = color
    .replace(/[)]/g, ", 0.1)")
    .replace(/rgb/g, "rgba")
    .trim()
  const colorAlphaBorder = color
    .replace(/[)]/g, ", 0.2)")
    .replace(/rgb/g, "rgba")
    .trim()

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
      <SystemFlex justify="center" align="center">
        <MarkerAnimated
          midDimention={20}
          style={{
            width: dimentions.interpolate({
              inputRange: [0, 1],
              outputRange: [20, 50]
            }),
            height: dimentions.interpolate({
              inputRange: [0, 1],
              outputRange: [20, 50]
            }),
            borderRadius: dimentions.interpolate({
              inputRange: [0, 1],
              outputRange: [12.5, 25]
            })
          }}
          color={colorAlpha}
          colorBorder={colorAlphaBorder}
        >
          <SystemFlex justify="center" align="center">
            <MarkerCenter minDimention={20} color={color} />
          </SystemFlex>
        </MarkerAnimated>
      </SystemFlex>
    </MarkerContainer>
  )
}

export const AnimatedMapMarker = MapMarker
