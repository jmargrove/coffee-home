import React from "react"
import { selectBlack } from "../../../utils/selectors"
import { SystemSpace } from "../../../system-components/SystemSpace"
import { MEDIUM } from "../../../system-components/system-theme/theme"
import { SystemTouch, SystemFlex, SystemText } from "../../../system-components"

export const PointOptions: React.FC<{ handleDeletePoint: () => void }> = ({
  handleDeletePoint
}) => {
  return (
    <SystemFlex>
      <SystemFlex row noFlex>
        <SystemSpace size={MEDIUM} />
        <SystemTouch onPress={handleDeletePoint}>
          <SystemText color={selectBlack} size={20}>
            • Delete Point
          </SystemText>
        </SystemTouch>
      </SystemFlex>
    </SystemFlex>
  )
}
