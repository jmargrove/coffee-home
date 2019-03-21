import React, { FunctionComponent } from "react"
import { Image } from "react-native"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../../types"
import { MAP_SCREEN } from "../../utils/constants"
import { SystemFlex } from "../../system-components/SystemFlex"
import { SystemSpace } from "../../system-components/SystemSpace"
import { SMALL } from "../../system-components/system-theme/theme"
import { SystemTouch } from "../../system-components"
const source = require("./globe-icon.png")

const GlobeIconDefault: FunctionComponent<NavigationProps> = ({
  navigation
}) => {
  return (
    <SystemFlex row noFlex>
      <SystemSpace size={SMALL} />
      <SystemTouch onPress={() => navigation.navigate(MAP_SCREEN)}>
        <Image source={source} />
      </SystemTouch>
    </SystemFlex>
  )
}

export const GlobeIcon = withNavigation(GlobeIconDefault)
