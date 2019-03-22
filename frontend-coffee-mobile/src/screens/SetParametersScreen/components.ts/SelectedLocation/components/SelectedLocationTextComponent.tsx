import React, { FunctionComponent } from "react"
import { SystemFlex, SystemText } from "../../../../../system-components"
import {
  selectMediumGrey,
  selectTextSmall
} from "../../../../../utils/selectors"

export const SelectLocationTextComponent: FunctionComponent<{
  field: string
  value: string
}> = ({ field, value }) => {
  return (
    <SystemFlex row justify="space-between">
      <SystemText size={selectTextSmall} color={selectMediumGrey}>
        {field}
      </SystemText>
      <SystemText size={selectTextSmall}>{value}</SystemText>
    </SystemFlex>
  )
}
