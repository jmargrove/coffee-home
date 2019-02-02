import styled from "styled-components"
import { Content } from "native-base"

export const SystemContent = styled(Content).attrs(({ fill }: any) => ({
  contentContainerStyle: fill ? { flex: 1 } : {}
}))<any>`
  background-color: rgba(255, 255, 255, 0.5);
`
