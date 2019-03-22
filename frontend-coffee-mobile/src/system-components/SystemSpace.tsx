import { View } from "react-native"
import { System } from "./types"
import styled from "styled-components"

export const SystemSpace = styled(View)<System.SpaceProps>`
  ${({ size, h, theme, vertical }) =>
    !h && `max-height: ${size({ theme, vertical })}`};
  ${({ size, h, theme, vertical }) =>
    !h && `min-height: ${size({ theme, vertical })}`};
  ${({ size, v, theme, vertical }) =>
    !v && `max-width: ${size({ theme, vertical })}`};
  ${({ size, v, theme, vertical }) =>
    !v && `min-width: ${size({ theme, vertical })}`};
`
