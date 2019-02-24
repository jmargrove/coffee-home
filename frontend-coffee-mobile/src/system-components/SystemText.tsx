import { Text } from "react-native"
import styled from "styled-components"

interface ISystemTextProps {
  color?: string
  uppercase?: boolean
  italic?: boolean
  center?: boolean
  size?: number
  blackItalic?: boolean
}

export const SystemText = styled(Text)<ISystemTextProps>`
  font-size: 16;
  font-family: Roboto-Medium;
  ${({ color, theme }) => color && `color: ${theme.colors[color]}`};
  ${({ uppercase }) => uppercase && `text-transform: uppercase`}
  ${({ italic }) => italic && `font-style: italic`}
  ${({ center }) => center && `text-align: center`}
  ${({ size }) => size && `font-size: ${size}`}
  ${({ blackItalic }) => blackItalic && `font-family: Roboto-BlackItalic`}
`
