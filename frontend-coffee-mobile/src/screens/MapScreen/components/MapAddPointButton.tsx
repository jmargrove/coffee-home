import React from "react"
import { SystemAbsolute } from "../../../system-components"
import {
  selectPrimary,
  selectPercentageHeight,
  selectPercentageWidth
} from "../../../utils/selectors"
import { AnimatedMapMarker } from "./MapMarker"

export const MapAddPointButton: React.FC<{ enable: boolean }> = ({
  enable
}) => {
  return (
    <React.Fragment>
      {enable && (
        <SystemAbsolute
          left={selectPercentageWidth({ percent: 0.5 }) - 40}
          bottom={selectPercentageHeight({ percent: 0.5 }) - 40}
        >
          <AnimatedMapMarker maxDimention={80} color={selectPrimary} />
        </SystemAbsolute>
      )}
    </React.Fragment>
  )
}
