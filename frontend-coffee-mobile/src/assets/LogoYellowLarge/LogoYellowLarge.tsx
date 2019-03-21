import React, { FunctionComponent } from "react"
import { Image } from "react-native"
const source = require("./logo-yellow-large.png")

export const LogoYelloLarge: FunctionComponent<{ size?: number }> = ({
  size
}) => {
  return (
    <Image
      source={source}
      style={{ width: size, height: size! * 2, resizeMode: "contain" }}
    />
  )
}
