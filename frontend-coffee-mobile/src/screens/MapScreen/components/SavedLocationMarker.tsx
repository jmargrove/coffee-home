import React from "react"
import { View } from "native-base"
import { SystemFlex } from "../../../system-components"
import {
  selectThird,
  selectWhite,
  selectRegular,
  selectMedium
} from "../../../utils/selectors"
import styled from "../../../system-components/system-theme/styled-components"

const SavedLocationMarkerContainer = styled(View)`
  width: ${selectMedium};
  height: ${selectMedium};
  border-radius: ${({ theme }) => theme && selectMedium({ theme }) / 2};
`

const SavedLocationMarkerPoint = styled(View)`
  background-color: ${selectThird};
  width: ${selectRegular};
  height: ${selectRegular};
  border-radius: ${({ theme }) => theme && selectRegular({ theme }) / 2};
  border-width: 1.5;
  border-color: ${selectWhite};
`

export const SavedLocationMarker: React.FC = () => {
  return (
    <SavedLocationMarkerContainer>
      <SystemFlex justify="center" align="center">
        <SavedLocationMarkerPoint />
      </SystemFlex>
    </SavedLocationMarkerContainer>
  )
}
