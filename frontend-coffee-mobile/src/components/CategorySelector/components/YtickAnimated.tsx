import React, { FunctionComponent } from "react"
import { Animated } from "react-native"
import { MEDIUM_GREY } from "../../../system-components/system-theme/theme"
import styled from "../../../system-components/system-theme/styled-components"

export const YtickContainer = styled(Animated.View)<{ height?: number }>`
  width: 2;
  background-color: ${({ theme }) => theme.colors[MEDIUM_GREY]};
`

export const YtickAnimated: FunctionComponent<any> = ({
  label,
  factorLevel,
  prevFactorLevel
}) => {
  if (label === factorLevel) {
    const height = new Animated.Value(8)
    Animated.timing(height, {
      toValue: 24,
      duration: 1000
    }).start(() => 8)
    return <YtickContainer style={{ height }} />
  } else if (label === prevFactorLevel) {
    const height = new Animated.Value(24)
    Animated.timing(height, {
      toValue: 8,
      duration: 1000
    }).start()
    return <YtickContainer style={{ height }} />
  } else {
    return <YtickContainer style={{ height: 8 }} />
  }
}
