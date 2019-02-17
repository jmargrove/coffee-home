import React, { FunctionComponent } from "react"
import { Image, TouchableOpacity } from "react-native"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../../types"
const source = require("./back.png")

const IconBackDefault: FunctionComponent<NavigationProps> = ({
  navigation
}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={source} />
    </TouchableOpacity>
  )
}

export const IconBack = withNavigation(IconBackDefault)
