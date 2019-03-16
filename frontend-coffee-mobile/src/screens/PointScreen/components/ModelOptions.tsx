import React from "react"
import { SystemFlex } from "../../../system-components/SystemFlex"
import { SystemText } from "../../../system-components/SystemText"
import { TouchableOpacity } from "react-native"
import { selectBlack } from "../../../utils/selectors"
import { MEDIUM } from "../../../system-components/system-theme/theme"
import { SystemSpace } from "../../../system-components/SystemSpace"

export const ModelOptionsCard: React.FC<{
  handleCalculateYield: () => void
  handleOptimizeShade: () => void
}> = ({ handleCalculateYield, handleOptimizeShade }) => {
  return (
    <SystemFlex>
      <TouchableOpacity onPress={handleCalculateYield}>
        <SystemFlex row noFlex>
          <SystemSpace size={MEDIUM} />
          <SystemText size={20} color={selectBlack}>
            • Calculate yield
          </SystemText>
        </SystemFlex>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOptimizeShade}>
        <SystemFlex row noFlex>
          <SystemSpace size={MEDIUM} />
          <SystemText size={20} color={selectBlack}>
            • Optimize shade
          </SystemText>
        </SystemFlex>
      </TouchableOpacity>
    </SystemFlex>
  )
}
