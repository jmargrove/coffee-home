import React, { FunctionComponent } from "react"
import { Image, TouchableOpacity } from "react-native"
import { SystemAbsolute } from "../../system-components/SystemAbsolute"
import { MAP_SCREEN } from "../../utils/constants"
import NavigationServices from "../../utils/NavigationServices"
const source = require("./close-icon.png")

export const CloseIcon: FunctionComponent<{ enable: boolean }> = ({
  enable
}) => {
  if (enable) {
    return (
      <SystemAbsolute top={48} right={30} zIndex={32}>
        <TouchableOpacity
          onPress={() =>
            NavigationServices.navigate(MAP_SCREEN, { selectPoint: false })
          }
        >
          <Image source={source} />
        </TouchableOpacity>
      </SystemAbsolute>
    )
  } else {
    return null
  }
}
