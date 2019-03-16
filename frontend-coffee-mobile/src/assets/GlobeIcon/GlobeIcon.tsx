import React, { FunctionComponent } from "react"
import { Image, TouchableOpacity } from "react-native"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../../types"
import { MAP_SCREEN } from "../../utils/constants"
import { SystemFlex } from "../../system-components/SystemFlex"
import { SystemSpace } from "../../system-components/SystemSpace"
import { SMALL } from "../../system-components/system-theme/theme"
const source = require("./globe-icon.png")

const GlobeIconDefault: FunctionComponent<NavigationProps> = ({
  navigation
}) => {
  return (
    <SystemFlex row noFlex>
      <SystemSpace size={SMALL} />
      <TouchableOpacity onPress={() => navigation.navigate(MAP_SCREEN)}>
        <Image source={source} />
      </TouchableOpacity>
    </SystemFlex>
  )
}

export const GlobeIcon = withNavigation(GlobeIconDefault)
