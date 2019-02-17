import React, { FunctionComponent } from "react"
import { SystemFlex, SystemText } from "../../../../../system-components"
import {
  MEDIUM_GREY,
  BLACK
} from "../../../../../system-components/system-theme/theme"

export const SelectLocationTextComponent: FunctionComponent<{
  field: string
  value: string
}> = ({ field, value }) => {
  return (
    <SystemFlex row justify="space-between">
      <SystemText size={12} color={MEDIUM_GREY}>
        {field}
      </SystemText>
      <SystemText size={12} color={BLACK}>
        {value}
      </SystemText>
    </SystemFlex>
  )
}
