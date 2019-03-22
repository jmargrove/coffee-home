import { Text } from "react-native"
import styled from "styled-components"
import { selectBlack, selectTextMassive } from "../utils/selectors"

export const SystemTitle = styled(Text)<{}>`
  font-size: ${selectTextMassive}
  color: ${selectBlack}
  font-weight: bold;
  font-style: italic;
`
