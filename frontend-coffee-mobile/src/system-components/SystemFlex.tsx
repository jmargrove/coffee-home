import styled from "styled-components"
import { View } from "react-native"
import { System } from "./types"

export const SystemFlex = styled(View)<System.FlexProps>`
  ${({ noFlex }) => (noFlex ? "" : `flex: 1`)};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
  ${({ align }) => align && `align-items: ${align}`};
  ${({ row }) => row && `flex-direction: row`};
`
