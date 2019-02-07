import { View } from "react-native"
import styled from "./system-theme/styled-components"

export const SystemExtent = styled(View)<any>`
  ${({ square }) => square && `width: ${square}; height: ${square}`};
  ${({ circle }) =>
    circle &&
    `width: ${circle}; height: ${circle}; border-radius: ${circle / 2}`};
  ${({ color }) => color && `background-color: ${color}`}
`
