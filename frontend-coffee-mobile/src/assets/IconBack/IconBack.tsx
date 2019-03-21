import React, { FunctionComponent } from "react"
import { Image } from "react-native"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../../types"
import { SystemTouch } from "../../system-components"
const source = require("./back.png")

const IconBackDefault: FunctionComponent<NavigationProps> = ({
  navigation
}) => {
  return (
    <SystemTouch onPress={() => navigation.goBack()}>
      <Image source={source} />
    </SystemTouch>
  )
}

export const IconBack = withNavigation(IconBackDefault)
