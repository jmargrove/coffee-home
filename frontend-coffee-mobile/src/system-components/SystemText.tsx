import { Text } from "react-native"
import styled from "styled-components"
import { StyleSelector, selectBlack } from "../utils/selectors"

interface ISystemTextProps {
  color?: StyleSelector<string>
  uppercase?: boolean
  italic?: boolean
  center?: boolean
  size?: number
  blackItalic?: boolean
}

export const SystemText = styled(Text)<ISystemTextProps>`
  font-size: 16;
  font-family: Roboto;
  ${({ uppercase }) => uppercase && `text-transform: uppercase`}
  ${({ italic }) => italic && `font-style: italic`}
  ${({ center }) => center && `text-align: center`}
  ${({ size }) => size && `font-size: ${size}`}
  ${({ blackItalic }) => blackItalic && `font-family: Roboto-BlackItalic`};
  ${({ color, theme }) =>
    `color: ${color ? color({ theme }) : selectBlack({ theme })}`};
`
