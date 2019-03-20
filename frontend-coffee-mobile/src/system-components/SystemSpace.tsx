import { View } from "react-native"
import { System } from "./types"
import styled from "styled-components"

export const SystemSpace = styled(View)<System.SpaceProps>`
  ${({ theme, size, h }) => !h && `max-height: ${theme.sizes[size]}`};
  ${({ theme, size, h }) => !h && `min-height: ${theme.sizes[size]}`};
  ${({ theme, size, v }) => !v && `max-width: ${theme.sizes[size]}`};
  ${({ theme, size, v }) => !v && `min-width: ${theme.sizes[size]}`};
`
