import React, { FunctionComponent } from "react"
import GGPlot from "../../components/GGPlot/GGPlot"
import { GGPoint } from "../../components/GGPlot/components/GGPoint"
import { IData } from "../../components/GGPlot/types"
import { GGLine } from "../../components/GGPlot/components/GGLine"

export const ScatterPlot: FunctionComponent<IData> = ({ data }) => {
  return (
    <GGPlot data={data}>
      <GGLine data={data} />
      <GGPoint data={data} />
    </GGPlot>
  )
}
