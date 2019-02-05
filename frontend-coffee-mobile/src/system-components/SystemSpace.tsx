import { View } from "react-native"
import { System } from "./types"
import styled from "styled-components"

export const SystemSpace = styled(View)<System.SpaceProps>`
  max-width: ${({ theme, size }) => size && theme.sizes[size]};
  min-width: ${({ theme, size }) => size && theme.sizes[size]};
  max-height: ${({ theme, size }) => size && theme.sizes[size]};
  min-height: ${({ theme, size }) => size && theme.sizes[size]};
`
