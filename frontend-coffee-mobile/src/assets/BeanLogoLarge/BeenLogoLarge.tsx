import { FunctionComponent } from "react"
import { Image } from "react-native"
const source = require("./bean-logo-white.png")

export const BeanLogoLarge: FunctionComponent = () => {
  return <Image source={source} />
}
