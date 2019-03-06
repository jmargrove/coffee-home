import React, { FunctionComponent } from "react"
import styled from "../../../../system-components/system-theme/styled-components"
import { View, Animated } from "react-native"
import {
  PRIMARY,
  theme
} from "../../../../system-components/system-theme/theme"
import { alphaFunction } from "../../../../utils/alphaFunction"

const PointStandard = styled(View)<any>`
  position: absolute;
  z-index: 2;
  bottom: ${({ y }) => y && y};
  left: ${({ x }) => x && x};
  background-color: white;
  border-width: 0.8;
  border-color: ${({ theme }) => theme && theme.colors[PRIMARY]}
  width: 20;
  height: 20;
  ${({ size }) => size && `border-radius: ${size}`};
  ${({ width }) => width && `width: ${width * 2}`};
  ${({ height }) => height && `height: ${height * 2}`};
  `

const PointAnimated = styled(Animated.View)<any>`
  border-width: 0.8;
  border-color: ${({ theme }) => theme && theme.colors[PRIMARY]}
  width: 20;
  height: 20;
`

const PointAnimatedContainer = styled(View)<any>`
  position: absolute;
  z-index: 1;
  bottom: ${({ y }) => y && y};
  left: ${({ x }) => x && x};
  width: 50;
  height: 50;
`

export interface IGGPointProps {
  focalPoint: { index: number; yield: number; year: number }
  data: { x: number; y: number }[]
  size: number
}

const CircleAnimation: FunctionComponent<{
  animationValue: Animated.Value
}> = ({ animationValue, children }) => {
  return (
    <PointAnimated
      style={{
        position: "absolute",
        left: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [15, 0]
        }),
        bottom: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [15, 0]
        }),
        width: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 50]
        }),
        height: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 50]
        }),
        borderRadius: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [12.5, 25]
        }),
        backgroundColor: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [
            alphaFunction(theme.colors[PRIMARY], 1),
            alphaFunction(theme.colors[PRIMARY], 0)
          ]
        }),
        borderColor: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [
            alphaFunction(theme.colors[PRIMARY], 1),
            alphaFunction(theme.colors[PRIMARY], 0)
          ]
        })
      }}
    >
      {children}
    </PointAnimated>
  )
}

export const GGPoint: FunctionComponent<IGGPointProps> = ({
  data,
  size,
  focalPoint
}) => {
  const animatedCircle1 = new Animated.Value(0)
  const animatedCircle2 = new Animated.Value(0)
  const animatedCircle3 = new Animated.Value(0)
  const animatedCircle4 = new Animated.Value(0)

  Animated.stagger(500, [
    Animated.loop(
      Animated.timing(animatedCircle1, {
        toValue: 1,
        duration: 2000
      })
    ),
    Animated.loop(
      Animated.timing(animatedCircle2, {
        toValue: 1,
        duration: 2000
      })
    ),
    Animated.loop(
      Animated.timing(animatedCircle3, {
        toValue: 1,
        duration: 2000
      })
    ),
    Animated.loop(
      Animated.timing(animatedCircle4, {
        toValue: 1,
        duration: 2000
      })
    )
  ]).start()

  return (
    <>
      {data.map((el, i) => {
        if (i === focalPoint.index) {
          return (
            <React.Fragment key={i}>
              <PointAnimatedContainer x={el.x - 25} y={el.y - 25} size={10}>
                <CircleAnimation animationValue={animatedCircle1} />
                <CircleAnimation animationValue={animatedCircle2} />
                <CircleAnimation animationValue={animatedCircle3} />
                <CircleAnimation animationValue={animatedCircle4} />
              </PointAnimatedContainer>
              <PointStandard x={el.x - 10} y={el.y - 10} size={10} />
            </React.Fragment>
          )
        } else {
          return (
            <PointStandard key={i} x={el.x - size} y={el.y - size} size={10} />
          )
        }
      })}
    </>
  )
}
