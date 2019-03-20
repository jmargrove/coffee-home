import React, { FunctionComponent } from "react"
import { TouchableOpacity } from "react-native"

export const SystemTouch: FunctionComponent<{ onPress: () => void }> = ({
  children,
  onPress
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
    >
      {children}
    </TouchableOpacity>
  )
}
