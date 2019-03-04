import React, { FunctionComponent } from "react"
import styled from "../../../system-components/system-theme/styled-components"
import { View, Animated } from "react-native"
import { PRIMARY } from "../../../system-components/system-theme/theme"
import { SystemFlex } from "../../../system-components"
import { alphaFunction } from "../../../utils/alphaFunction"

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
  ${({ size }) => size && `border-radius: ${size}`}
  ${({ width }) => width && `width: ${width * 2}`}
  ${({ height }) => height && `height: ${height * 2}`}
  `

const PointAnimated = styled(Animated.View)<any>`
  border-width: 0.8;
  border-color: ${({ theme }) => theme && theme.colors[PRIMARY]}
  width: 20;
  height: 20;
  background-color:  ${({ theme }) =>
    theme && alphaFunction(theme.colors[PRIMARY], 0.5)}
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
  focalPoint: { index: number; yeild: number; year: number }
  data: { x: number; y: number }[]
  size: number
}

export const GGPoint: FunctionComponent<IGGPointProps> = ({
  data,
  size,
  focalPoint
}) => {
  const animatedValue = new Animated.Value(0)
  Animated.loop(
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 1000
      })
    ])
  ).start()

  return (
    <>
      {data.map((el, i) => {
        console.log(i, focalPoint.index)
        if (i === focalPoint.index) {
          const size = 25
          return (
            <React.Fragment key={i}>
              <PointAnimatedContainer x={el.x - 25} y={el.y - 25} size={10}>
                <SystemFlex justify="center" align="center">
                  <PointAnimated
                    style={{
                      width: animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 50]
                      }),
                      height: animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 50]
                      }),
                      borderRadius: animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [12.5, 25]
                      })
                    }}
                  />
                </SystemFlex>
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
