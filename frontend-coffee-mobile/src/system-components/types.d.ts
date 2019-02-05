import { ReactNode } from "react"

export declare namespace System {
  interface ButtonLargeProps {
    children: string | ReactNode
    onPress: () => void
  }
  interface StyledButtonProps {
    children: ReactNode
  }

  interface ContentProps {
    children: ReactNode
    fill?: boolean
  }

  interface FlexProps {
    noFlex?: boolean
    justify?:
      | "start"
      | "center"
      | "space-between"
      | "space-around"
      | "space-evenly"
      | "flex-start"
      | "flex-end"
    alignContent?: "start" | "center" | "space-between" | "space-around"
    align?: "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end"
    row?: boolean
  }

  interface SpaceProps {
    size:
      | "ATOMIC"
      | "SMALL"
      | "REGULAR"
      | "MEDIUM"
      | "BIG"
      | "LARGE"
      | "MASSIVE"
  }
  interface Text {}
  interface Title {}
}
