import React, { FunctionComponent } from "react"
import { Image } from "react-native"
import { SystemTouch } from "../../system-components"
import { scale } from "react-native-size-matters"
const source = require("./console-left-arrow.png")

export const ConsoleLeftArrow: FunctionComponent<{ onPress: () => void }> = ({
  onPress
}) => {
  return (
    <SystemTouch onPress={onPress}>
      <Image
        style={{
          width: scale(32),
          height: scale(72)
        }}
        source={source}
      />
    </SystemTouch>
  )
}
