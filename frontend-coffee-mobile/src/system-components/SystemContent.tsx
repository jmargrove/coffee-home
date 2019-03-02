import { Content } from "native-base"
import { System } from "./types"
import styled from "./system-theme/styled-components"
import { WHITE } from "./system-theme/theme"

export const SystemContent = styled(Content).attrs(
  ({ fill }: { fill?: boolean }) => ({
    contentContainerStyle: fill ? { flex: 1 } : {}
  })
)<System.ContentProps>`
  ${({ theme }) => theme && `background-color: ${theme.colors[WHITE]}`}
  ${({ theme, color }) => color && `background-color: ${theme.colors[color]}`}
`
