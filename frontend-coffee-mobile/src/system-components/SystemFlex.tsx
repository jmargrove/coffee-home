import styled from "styled-components"
import { View } from "react-native"
import { System } from "./types"

export const SystemFlex = styled(View)<System.Flex>`
    ${({ justify }) => justify && `justify-content: ${justify}`}
    ${({ align }) => align && `align-items: ${align}`}
    ${({ direction }) => direction && `flex-direction: ${direction}`}
    flex: ${({ noFlex }) => (noFlex ? null : 1)}
`
