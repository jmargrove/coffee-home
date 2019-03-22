import React, { FunctionComponent } from "react"
import { Image } from "react-native"
import { SystemTouch } from "../../system-components"
import { verticalScale } from "react-native-size-matters"
const source = require("./console-left-arrow.png")

export const ConsoleLeftArrow: FunctionComponent<{ onPress: () => void }> = ({
  onPress
}) => {
  return (
    <SystemTouch onPress={onPress}>
      <Image
        style={{
          width: verticalScale(32),
          height: verticalScale(72)
        }}
        source={source}
      />
    </SystemTouch>
  )
}
