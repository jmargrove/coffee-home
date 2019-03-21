import React from "react"
import { SystemFlex } from "../../../system-components/SystemFlex"
import { MEDIUM } from "../../../system-components/system-theme/theme"
import { SystemSpace } from "../../../system-components/SystemSpace"
import { NumericInputComponent } from "../../../components/NumericInputComponent"
import CategorySelector from "../../../components/CategorySelector/CategorySelector"
import BinarySelector from "../../../components/BinarySelector/BinarySelector"

export const PointInformationCard: React.FC<{
  pointYield?: string
  pointShade: string
  pointSlope: string
  pointIrrigated: boolean
}> = ({ pointYield, pointShade, pointSlope, pointIrrigated }) => {
  return (
    <SystemFlex row>
      <SystemFlex>
        {pointYield && (
          <NumericInputComponent
            value={pointYield}
            handleChange={() => undefined}
            label="Point Yield"
            units="tones per ha"
            autoFocus={false}
            IconToggle={false}
            editable={false}
            selectTextOnFocus={false}
          />
        )}
        <SystemSpace size={MEDIUM} />
        <CategorySelector
          title="What is your shade level"
          levels={["none", "low", "medium", "high"]}
          handleChange={() => undefined}
          factorLevel={pointShade}
          prevFactorLevel={pointShade}
        />
        <SystemSpace size={MEDIUM} />
        <CategorySelector
          title="What is your slope incline?"
          levels={["flat", "slight", "gradual", "steep"]}
          handleChange={() => undefined}
          factorLevel={pointSlope}
          prevFactorLevel={pointSlope}
        />
        <SystemSpace size={MEDIUM} />
        <BinarySelector
          title="Is your site irrigated?"
          value={pointIrrigated}
          handleChange={() => undefined}
        />
      </SystemFlex>
    </SystemFlex>
  )
}
