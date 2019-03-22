import React from "react"
import { SystemSpace } from "./SystemSpace"
import { SystemFlex } from "./SystemFlex"
import { StyleSelector } from "../utils/selectors"

export const SystemPadding: React.FC<{
  size: StyleSelector<number>
  noFlex?: boolean
  horizontalOnly?: boolean
}> = ({ children, size, noFlex, horizontalOnly }) => {
  return (
    <SystemFlex noFlex={noFlex}>
      {!horizontalOnly && <SystemSpace size={size} />}
      <SystemFlex row={true} noFlex={noFlex}>
        <SystemSpace size={size} />
        {children}
        <SystemSpace size={size} />
      </SystemFlex>
      {!horizontalOnly && <SystemSpace size={size} />}
    </SystemFlex>
  )
}
