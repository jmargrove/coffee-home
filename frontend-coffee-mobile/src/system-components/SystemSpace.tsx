import { View } from "react-native"
import { System } from "./types"
import styled from "styled-components"

export const SystemSpace = styled(View)<System.SpaceProps>`
  ${({ size, h, theme }) => !h && `max-height: ${size({ theme })}`};
  ${({ size, h, theme }) => !h && `min-height: ${size({ theme })}`};
  ${({ size, v, theme }) => !v && `max-width: ${size({ theme })}`};
  ${({ size, v, theme }) => !v && `min-width: ${size({ theme })}`};
`
