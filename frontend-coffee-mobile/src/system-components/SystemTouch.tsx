import React, { FunctionComponent } from "react"
import { TouchableOpacity, TouchableWithoutFeedbackProps } from "react-native"

export const SystemTouch: FunctionComponent<TouchableWithoutFeedbackProps> = ({
  children,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  )
}
