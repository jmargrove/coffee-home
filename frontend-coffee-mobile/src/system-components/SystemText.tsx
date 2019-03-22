import { Text } from "react-native"
import styled from "styled-components"
import {
  StyleSelector,
  selectBlack,
  selectTextRegular
} from "../utils/selectors"

interface ISystemTextProps {
  color?: StyleSelector<string>
  uppercase?: boolean
  italic?: boolean
  center?: boolean
  size?: StyleSelector<number>
  blackItalic?: boolean
}

export const SystemText = styled(Text)<ISystemTextProps>`
 font-size: ${({ size, theme }) =>
   size ? size({ theme }) : selectTextRegular({ theme })};
  ${({ uppercase }) => uppercase && `text-transform: uppercase`}
  ${({ italic }) => italic && `font-style: italic`}
  ${({ size }) => size && `font-size: ${size}`}
  ${({ blackItalic }) => blackItalic && `font-weight: 500`};
  color: ${({ color, theme }) =>
    color ? color({ theme }) : selectBlack({ theme })};
  ${({ center }) => center && `text-align: center`}
`
