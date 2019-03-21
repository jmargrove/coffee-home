import React, { FunctionComponent } from "react"
import { Image } from "react-native"
import { SystemAbsolute } from "../../system-components/SystemAbsolute"
import { MAP_SCREEN } from "../../utils/constants"
import NavigationServices from "../../utils/NavigationServices"
import { SystemTouch } from "../../system-components"
const source = require("./close-icon.png")

export const CloseIcon: FunctionComponent<{ enable: boolean }> = ({
  enable
}) => {
  if (enable) {
    return (
      <SystemAbsolute top={48} right={30} zIndex={32}>
        <SystemTouch
          onPress={() =>
            NavigationServices.navigate(MAP_SCREEN, { selectPoint: false })
          }
        >
          <Image source={source} />
        </SystemTouch>
      </SystemAbsolute>
    )
  } else {
    return null
  }
}
