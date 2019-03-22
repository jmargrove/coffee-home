import React from "react"
import {
  selectBlack,
  selectMedium,
  selectTextMedium
} from "../../../utils/selectors"
import { SystemSpace } from "../../../system-components/SystemSpace"
import { SystemTouch, SystemFlex, SystemText } from "../../../system-components"

export const PointOptions: React.FC<{ handleDeletePoint: () => void }> = ({
  handleDeletePoint
}) => {
  return (
    <SystemFlex>
      <SystemFlex row noFlex>
        <SystemSpace size={selectMedium} />
        <SystemTouch onPress={handleDeletePoint}>
          <SystemText color={selectBlack} size={selectTextMedium}>
            • Delete Point
          </SystemText>
        </SystemTouch>
      </SystemFlex>
    </SystemFlex>
  )
}
