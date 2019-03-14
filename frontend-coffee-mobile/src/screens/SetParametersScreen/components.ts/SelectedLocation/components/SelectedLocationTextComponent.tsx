import React, { FunctionComponent } from "react"
import { SystemFlex, SystemText } from "../../../../../system-components"
import { selectMediumGrey } from "../../../../../utils/selectors"

export const SelectLocationTextComponent: FunctionComponent<{
  field: string
  value: string
}> = ({ field, value }) => {
  return (
    <SystemFlex row justify="space-between">
      <SystemText size={12} color={selectMediumGrey}>
        {field}
      </SystemText>
      <SystemText size={12}>{value}</SystemText>
    </SystemFlex>
  )
}
