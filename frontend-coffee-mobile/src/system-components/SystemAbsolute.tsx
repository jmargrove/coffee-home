import styled from "./system-theme/styled-components"
import { View, Dimensions } from "react-native"
import { System } from "./types"
import {
  selectPercentageHeight,
  selectPercentageWidth
} from "../utils/selectors"

export const SystemAbsolute = styled(View)<System.AbsoluteProps & any>`
  position: absolute;
  ${({ top }) => top && `top: ${top}`};
  ${({ left }) => left && `left: ${left}`};
  ${({ bottom }) => bottom && `bottom: ${bottom}`};
  ${({ right }) => right && `right: ${right}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ zIndex }) => zIndex && `z-index: ${zIndex}`};
  ${({ horizontal }) =>
    horizontal &&
    `left: ${(selectPercentageWidth({ percent: 1 }) - horizontal) / 2}`};
  ${({ vertical }) =>
    vertical &&
    `top: ${(selectPercentageHeight({ percent: 1 }) - vertical) / 2}`};
`
