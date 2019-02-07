import styled from "./system-theme/styled-components"
import { View, Dimensions } from "react-native"
import { System } from "./types"

export const SystemAbsolute = styled(View)<System.AbsoluteProps & any>`
  position: absolute;
  ${({ top }) => top && `top: ${top}`};
  ${({ left }) => left && `left: ${left}`};
  ${({ bottom }) => bottom && `bottom: ${bottom}`};
  ${({ right }) => right && `right: ${right}`};
  ${({ horizontal }) =>
    horizontal && `left: ${(Dimensions.get("window").width - horizontal) / 2}`};
  ${({ vertical }) =>
    vertical && `top: ${(Dimensions.get("window").height - vertical) / 2}`};
`
