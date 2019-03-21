import React from "react"
import { Image } from "react-native"
import { SystemTouch } from "../../system-components/SystemTouch"
const source = require("./arrow-up-primary.png")

export const ArrowUpPrimary: React.FC<{ onPress: () => void }> = ({
  onPress
}) => {
  return (
    <SystemTouch onPress={onPress}>
      <Image source={source} />
    </SystemTouch>
  )
}
