import React, { FunctionComponent } from "react"
import { ImageBackground } from "react-native"
const source = require("./dial-outer-ring.png")

export const DialOuterRing: FunctionComponent = ({ children }) => {
  return (
    <ImageBackground source={source} style={{ width: 215, height: 215 }}>
      {children}
    </ImageBackground>
  )
}
