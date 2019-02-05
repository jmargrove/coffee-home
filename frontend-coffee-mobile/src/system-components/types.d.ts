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
  interface Flex {}
  interface Space {}
  interface Text {}
  interface Title {}
}
