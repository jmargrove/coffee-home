import { View } from "react-native"
import { System } from "./types"
import styled from "styled-components"

export const SystemFlex = styled(View)<System.FlexProps & any>`
  ${({ noFlex }) => (noFlex ? "" : `flex: 1`)};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
  ${({ align }) => align && `align-items: ${align}`};
  ${({ row }) => row && `flex-direction: row`};
  background-color: ${({ color, theme }) =>
    color ? color({ theme }) : "transparent"};
`
