import React from "react"
import { SystemFlex } from "../../../system-components/SystemFlex"
import { SystemText } from "../../../system-components/SystemText"
import { selectBlack, selectMedium } from "../../../utils/selectors"
import { MEDIUM } from "../../../system-components/system-theme/theme"
import { SystemSpace } from "../../../system-components/SystemSpace"
import { SystemTouch } from "../../../system-components"

export const ModelOptionsCard: React.FC<{
  handleCalculateYield: () => void
  handleOptimizeShade: () => void
}> = ({ handleCalculateYield, handleOptimizeShade }) => {
  return (
    <SystemFlex>
      <SystemTouch onPress={handleCalculateYield}>
        <SystemFlex row noFlex>
          <SystemSpace size={selectMedium} />
          <SystemText size={20} color={selectBlack}>
            • Calculate yield
          </SystemText>
        </SystemFlex>
      </SystemTouch>
      <SystemTouch onPress={handleOptimizeShade}>
        <SystemFlex row noFlex>
          <SystemSpace size={selectMedium} />
          <SystemText size={20} color={selectBlack}>
            • Optimize shade
          </SystemText>
        </SystemFlex>
      </SystemTouch>
    </SystemFlex>
  )
}
