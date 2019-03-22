import React, { FunctionComponent } from "react"
import { Animated } from "react-native"
import { verticalScale } from "react-native-size-matters"
const source = require("./dial-outer-ring.png")

export const DialOuterRing: FunctionComponent = ({ children }) => {
  const animatedValue = new Animated.Value(0)

  Animated.timing(animatedValue, {
    toValue: 1,
    duration: 1000
  }).start()

  return (
    <Animated.Image
      source={source}
      style={{
        position: "absolute",
        width: verticalScale(170),
        height: verticalScale(170),
        transform: [
          {
            rotate: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: ["0deg", "360deg"]
            })
          }
        ]
      }}
    >
      {children}
    </Animated.Image>
  )
}
