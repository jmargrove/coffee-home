import { ReactNode } from "react"
import { StyleSelector } from "../utils/selectors"

export declare namespace System {
  interface ButtonLargeProps {
    isDisabled?: boolean
    colorBorder?: string
    color?: string
    textColor?: string
    children: string | ReactNode
    onPress: () => void
  }
  interface StyledButtonProps {
    children: ReactNode
  }

  type PRIMARY = "PRIMARY"
  interface ContentProps {
    color?: PRIMARY
    children: ReactNode
    fill?: boolean
  }

  type Justify =
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "flex-start"
    | "flex-end"

  type Align =
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"

  type AlignContent = "start" | "center" | "space-between" | "space-around"
  interface FlexProps {
    children: ReactNode
    noFlex?: boolean
    justify?: Justify
    alignContent?: AlignContent
    align?: Align
    row?: boolean
  }

  interface SpaceProps {
    v?: boolean
    h?: boolean
    size: StyleSelector<number>
    vertical?: boolean
  }
  interface Text {}
  interface Title {}

  interface AbsoluteProps {
    children: ReactNode
    top?: number
    bottom?: number
    left?: number
    right?: number
  }
}
