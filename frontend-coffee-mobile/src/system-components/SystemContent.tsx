import styled from "styled-components"
import { Content } from "native-base"
import { System } from "./types"

export const SystemContent = styled(Content).attrs(
  ({ fill }: { fill?: boolean }) => ({
    contentContainerStyle: fill ? { flex: 1 } : {}
  })
)<System.ContentProps>`
  background-color: black;
`
