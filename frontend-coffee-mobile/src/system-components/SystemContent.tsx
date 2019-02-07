import { Content } from "native-base"
import { System } from "./types"
import styled from "./system-theme/styled-components"
import { PRIMARY } from "./system-theme/theme"

export const SystemContent = styled(Content).attrs(
  ({ fill }: { fill?: boolean }) => ({
    contentContainerStyle: fill ? { flex: 1 } : {}
  })
)<System.ContentProps>`
  ${({ theme }) => theme && `background-color: ${theme.colors[PRIMARY]}`}
`
