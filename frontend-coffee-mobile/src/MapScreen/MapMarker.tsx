import React from "react"
import { View } from "native-base"
import { SystemFlex } from "../system-components"
import styled from "../system-components/system-theme/styled-components"
import { observable } from "mobx"
import { compose, withProps } from "recompose"
import { observer } from "mobx-react"
import { Animated, Easing } from "react-native"

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

class MapMarkerStore {
  @observable
  dimentions = new Animated.Value(20)
  radiusDimentions = new Animated.Value(10)
}

const power = compose<any, any>(
  withProps({
    store: new MapMarkerStore()
  }),
  observer
)

export const MapMarker = ({ maxDimention, color, store }: any) => {
  const midDimention = (maxDimention / 8) * 3
  const minDimention = (maxDimention / 8) * 2
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
      Animated.timing(store.dimentions, {
        toValue: maxDimention,
        duration: 1000
      }),
      Animated.timing(store.dimentions, {
        toValue: minDimention,
        duration: 1000
      })
    ])
  ).start()

  Animated.loop(
    Animated.sequence([
      Animated.timing(store.radiusDimentions, {
        toValue: maxDimention / 2,
        duration: 1000
      }),
      Animated.timing(store.radiusDimentions, {
        toValue: minDimention / 2,
        duration: 1000
      })
    ])
  ).start()

  console.log("color alpha ", colorAlpha)

  return (
    <MarkerContainer maxDimention={maxDimention} color={colorAlpha}>
      <SystemFlex justify="center" align="center">
        <MarkerAnimated
          midDimention={minDimention}
          style={{
            width: store.dimentions,
            height: store.dimentions,
            borderRadius: store.radiusDimentions
          }}
          color={colorAlpha}
          colorBorder={colorAlphaBorder}
        >
          <SystemFlex justify="center" align="center">
            <MarkerCenter minDimention={minDimention} color={color} />
          </SystemFlex>
        </MarkerAnimated>
      </SystemFlex>
    </MarkerContainer>
  )
}

export const AnimatedMapMarker = power(MapMarker)
