import styled from "styled-components"
import { View } from "react-native"

export const SystemSpace = styled(View)<any>`
max-width: ${({ theme, size }) => size && theme.sizes[size]}
min-width: ${({ theme, size }) => size && theme.sizes[size]}
max-height: ${({ theme, size }) => size && theme.sizes[size]}
min-height: ${({ theme, size }) => size && theme.sizes[size]}
`
