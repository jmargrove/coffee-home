import { Text } from "react-native"
import styled from "styled-components"
import { BLACK } from "./system-theme/theme"

export const SystemTitle = styled(Text)<any>`
  font-size: 48;
  ${({ theme }) => theme && `color: ${theme.colors[BLACK]}`}
  font-weight: bold;
  font-style: italic;
`
