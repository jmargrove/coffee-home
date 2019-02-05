import { ReactNode } from "react"

export declare namespace System {
  interface ButtonLarge {
    children: string | ReactNode
    onPress: () => void
  }
  interface Content {}
  interface Flex {}
  interface Space {}
  interface Text {}
  interface Title {}
}
