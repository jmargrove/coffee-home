import React from "react"
import { Image } from "react-native"
import { SystemTouch } from "../../system-components/SystemTouch"
const source = require("./arrow-down-black.png")

export const ArrowDownBlack: React.FC<{ onPress: () => void }> = ({
  onPress
}) => {
  return (
    <SystemTouch onPress={onPress}>
      <Image source={source} />
    </SystemTouch>
  )
}
