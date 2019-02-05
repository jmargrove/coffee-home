import styled from "styled-components"
import { View } from "react-native"

export const SystemFlex = styled(View)<any>`
  ${({ noFlex }) => (noFlex ? "" : `flex: 1`)};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
  ${({ align }) => align && `align-items: ${align}`};
  ${({ row }) => row && `flex-direction: row`};
`
