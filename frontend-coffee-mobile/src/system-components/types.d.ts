export declare namespace System {
  type Flex = {
    noFlex?: boolean
    justify?:
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-between"
      | "space-around"
      | "space-evenly"
    align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline"
    row?: boolean
  }

  type Space = {
    size: "SMALL" | "MEDIUM" | "LARGE" | "BIG"
  }
}
