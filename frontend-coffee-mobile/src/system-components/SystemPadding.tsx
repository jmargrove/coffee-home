import React from "react"
import { SystemSpace } from "./SystemSpace"
import { SystemFlex } from "./SystemFlex"
import { System } from "./types"

export const SystemPadding: React.FC<{
  size: System.Size
  noFlex?: boolean
}> = ({ children, size, noFlex }) => {
  return (
    <SystemFlex row={true} noFlex={noFlex}>
      <SystemSpace size={size} />
      <SystemFlex noFlex={noFlex}>
        <SystemSpace size={size} />
        {children}
        <SystemSpace size={size} />
      </SystemFlex>
      <SystemSpace size={size} />
    </SystemFlex>
  )
}
