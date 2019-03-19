import React from "react"
import { SystemText } from "../../../system-components/SystemText"
import { SystemFlex } from "../../../system-components/SystemFlex"
import { SystemSpace } from "../../../system-components/SystemSpace"
import { MEDIUM } from "../../../system-components/system-theme/theme"

const roundCoordinates = (coord: number) => {
  return `${Math.round(coord * 1000) / 1000}°`
}
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
          <SystemText>{roundCoordinates(lat)}</SystemText>
        </SystemFlex>
        <SystemFlex row justify="space-between">
          <SystemFlex noFlex>
            <SystemText>Longitude:</SystemText>
            <SystemSpace size={"REGULAR"} />
          </SystemFlex>
          <SystemText>{roundCoordinates(lng)}</SystemText>
        </SystemFlex>
      </SystemFlex>
      <SystemSpace size={"REGULAR"} />
    </SystemFlex>
  )
}
