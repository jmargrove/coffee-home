import styled from "./system-theme/styled-components"
import { View } from "react-native"
import { System } from "./types"

export const SystemAbsolute = styled(View)<System.AbsoluteProps>`
  display: absolute;
  ${({ top }) => top && `top: ${top}`};
  ${({ left }) => left && `left: ${left}`};
  ${({ bottom }) => bottom && `bottom: ${bottom}`};
  ${({ right }) => right && `right: ${right}`};
`
