import React from "react"
import { SystemFlex } from "../../../system-components/SystemFlex"
import { SystemText } from "../../../system-components/SystemText"
import { TouchableOpacity } from "react-native"
import { selectBlack } from "../../../utils/selectors"
import { SystemSpace } from "../../../system-components/SystemSpace"
import { MEDIUM } from "../../../system-components/system-theme/theme"

export const PointOptions: React.FC<{ handleDeletePoint: () => void }> = ({
  handleDeletePoint
}) => {
  return (
    <SystemFlex>
      <SystemFlex row noFlex>
        <SystemSpace size={MEDIUM} />
        <TouchableOpacity onPress={handleDeletePoint}>
          <SystemText color={selectBlack} size={20}>
            • Delete Point
          </SystemText>
        </TouchableOpacity>
      </SystemFlex>
    </SystemFlex>
  )
}
