import styled from "styled-components"
import { View } from "react-native"
import { System } from "./types"
import { theme } from "../utils/theme"

export const SystemSpace = styled(View)<System.Space>`
  max-height: ${({ size }) => size && theme.sizes[size]};
  min-height: ${({ size }) => size && theme.sizes[size]};
  max-width: ${({ size }) => size && theme.sizes[size]};
  min-width: ${({ size }) => size && theme.sizes[size]};
`
