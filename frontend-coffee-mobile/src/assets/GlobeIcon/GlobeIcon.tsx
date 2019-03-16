import React, { FunctionComponent } from "react"
import { Image, TouchableOpacity } from "react-native"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../../types"
import { DRAWER_CONTAINER } from "../../utils/constants"
const source = require("./globe-icon.png")

const GlobeIconDefault: FunctionComponent<NavigationProps> = ({
  navigation
}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(DRAWER_CONTAINER)}>
      <Image source={source} />
    </TouchableOpacity>
  )
}

export const GlobeIcon = withNavigation(GlobeIconDefault)
