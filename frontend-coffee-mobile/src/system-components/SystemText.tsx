import { Text } from "react-native"
import styled from "styled-components"

export const SystemText = styled(Text)<any>`
  font-size: 16;
  ${({ color, theme }) => color && `color: ${theme.colors[color]}`};
  ${({ uppercase }) => uppercase && `text-transform: uppercase`}
  ${({ center }) => center && `text-align: center`}
  ${({ size }) => size && `font-size: ${size}`}
  font-weight: bold;
  font-family: Roboto;

`
