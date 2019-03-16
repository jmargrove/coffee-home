import React from "react"
import { SystemText } from "../../../system-components/SystemText"
import { SystemFlex } from "../../../system-components/SystemFlex"
import { SystemSpace } from "../../../system-components/SystemSpace"
import { MEDIUM } from "../../../system-components/system-theme/theme"

export const LocationCard: React.FC<{ lat: number; lng: number }> = ({
  lat,
  lng
}) => {
  return (
    <SystemFlex row>
      <SystemSpace size={MEDIUM} />
      <SystemFlex>
        <SystemFlex row justify="space-between">
          <SystemFlex noFlex>
            <SystemText>Latitude:</SystemText>
            <SystemSpace size={"REGULAR"} />
          </SystemFlex>
          <SystemText>{lat}</SystemText>
        </SystemFlex>
        <SystemFlex row justify="space-between">
          <SystemFlex noFlex>
            <SystemText>Longitude:</SystemText>
            <SystemSpace size={"REGULAR"} />
          </SystemFlex>
          <SystemText>{lng}</SystemText>
        </SystemFlex>
      </SystemFlex>
      <SystemSpace size={"REGULAR"} />
    </SystemFlex>
  )
}
