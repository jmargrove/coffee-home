import React, { FunctionComponent } from "react"
import { Image } from "react-native"
import { SystemTouch } from "../../system-components"
const source = require("./console-right-arrow.png")

export const ConsoleRightArrow: FunctionComponent<{ onPress: () => void }> = ({
  onPress
}) => {
  return (
    <SystemTouch onPress={onPress}>
      <Image source={source} />
    </SystemTouch>
  )
}
