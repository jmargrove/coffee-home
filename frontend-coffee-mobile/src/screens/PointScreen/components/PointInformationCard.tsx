import React from "react"
import { SystemFlex } from "../../../system-components/SystemFlex"
import { MEDIUM } from "../../../system-components/system-theme/theme"
import { SystemSpace } from "../../../system-components/SystemSpace"
import { NumericInputComponent } from "../../../components/NumericInputComponent"
import CategorySelector from "../../../components/CategorySelector/CategorySelector"
import BinarySelector from "../../../components/BinarySelector/BinarySelector"
import { selectMedium } from "../../../utils/selectors"

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
            textSize={14}
            value={pointYield}
            handleChange={() => undefined}
            label="Location's current Yield:"
            units="tons of coffee per hectare"
            autoFocus={false}
            IconToggle={false}
            editable={false}
            selectTextOnFocus={false}
          />
        )}
        <SystemSpace size={selectMedium} />
        <CategorySelector
          title="Location's shade level:"
          levels={["none", "low", "medium", "high"]}
          handleChange={() => undefined}
          factorLevel={pointShade}
          prevFactorLevel={pointShade}
        />
        <SystemSpace size={selectMedium} />
        <CategorySelector
          title="Location's slope:"
          levels={["flat", "slight", "gradual", "steep"]}
          handleChange={() => undefined}
          factorLevel={pointSlope}
          prevFactorLevel={pointSlope}
        />
        <SystemSpace size={selectMedium} />
        <BinarySelector
          title="Location irrigated:"
          value={pointIrrigated}
          handleChange={() => undefined}
        />
      </SystemFlex>
    </SystemFlex>
  )
}
