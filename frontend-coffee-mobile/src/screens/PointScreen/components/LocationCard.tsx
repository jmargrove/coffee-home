import React from "react"
import { SystemText } from "../../../system-components/SystemText"
import { SystemFlex } from "../../../system-components/SystemFlex"
import { SystemSpace } from "../../../system-components/SystemSpace"
import { roundCoordinates } from "../../../utils/roundCoordinates"
import { selectMedium, selectRegular } from "../../../utils/selectors"

export const LocationCard: React.FC<{ lat: number; lng: number }> = ({
  lat,
  lng
}) => {
  return (
    <SystemFlex row>
      <SystemSpace size={selectMedium} />
      <SystemFlex>
        <SystemFlex row justify="space-between">
          <SystemFlex noFlex>
            <SystemText>Latitude:</SystemText>
            <SystemSpace size={selectRegular} />
          </SystemFlex>
          <SystemText>{roundCoordinates(lat)}</SystemText>
        </SystemFlex>
        <SystemFlex row justify="space-between">
          <SystemFlex noFlex>
            <SystemText>Longitude:</SystemText>
            <SystemSpace size={selectRegular} />
          </SystemFlex>
          <SystemText>{roundCoordinates(lng)}</SystemText>
        </SystemFlex>
      </SystemFlex>
      <SystemSpace size={selectRegular} />
    </SystemFlex>
  )
}
