import React from "react"
import { Image } from "react-native"
import { SystemTouch } from "../../system-components/SystemTouch"
import NavigationServices from "../../utils/NavigationServices"
import { SETTINGS_SCREEN } from "../../utils/constants"
const source = require("./settings.png")

export const SettingsIcon: React.FC = () => {
  const goToSettings = () => NavigationServices.navigate(SETTINGS_SCREEN, {})
  return (
    <SystemTouch onPress={goToSettings}>
      <Image source={source} />
    </SystemTouch>
  )
}
