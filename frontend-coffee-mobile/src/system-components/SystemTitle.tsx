import { Text } from "react-native"
import styled from "styled-components"
import { selectBlack } from "../utils/selectors"

export const SystemTitle = styled(Text)<{}>`
  font-size: 48;
  color: ${selectBlack}
  font-weight: bold;
  font-style: italic;
`
