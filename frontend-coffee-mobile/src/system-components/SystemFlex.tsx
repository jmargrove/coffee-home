import React, { Component } from "react"
import styled from "styled-components"
import { View } from "react-native"
import { System } from "./types"

// export const SystemFlex = styled(View)<System.Flex>`
//     display: flex;
//     ${({ noFlex }) => (noFlex ? `` : `flex: 1;`)}
//     ${({ justify }) => justify && `justify-content: ${justify};`}
//     ${({ align }) => align && `align-items: ${align};`}
//     ${({ row }) => row && `flex-direction: row;`};
// `

interface IStyledFlex {
  noFlex?: boolean
  row?: boolean
  align?: "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end"
  justify?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "flex-start"
    | "flex-end"
  wrap?: boolean
  color?: string
  alignContent?: "start" | "center" | "space-between" | "space-around"
  pad?: string
}

export const StyledFlex = styled(View)<IStyledFlex>`
  display: flex;
  ${({ noFlex }) => (noFlex ? "" : `flex: 1;`)};
  ${({ row }) => row && `flex-direction: row;`};
  ${({ align }) => align && `align-items: ${align};`};
  ${({ justify }) => justify && `justify-content: ${justify};`};
  ${({ wrap }) => wrap && `flex-wrap: wrap;`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
  ${({ color }) => color && `background-color: ${color}`};
  ${({ theme, pad }) => (pad ? `padding: ${theme.sizes[pad]}px` : "")};
`

export class SystemFlex extends Component<IStyledFlex> {
  render() {
    const { children, ...rest } = this.props

    return <StyledFlex {...rest}>{children}</StyledFlex>
  }
}
