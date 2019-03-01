import React, { FunctionComponent } from "react"
import { GGPlot } from "../../components/GGPlot/GGPlot"
import { response } from "./ModelResultsScreen"
import { GGYTick } from "../../components/GGPlot/components/GGYTick"
import { GGXTick } from "../../components/GGPlot/components/GGXTick"
import { GGLine } from "../../components/GGPlot/components/GGLine"
import { GGPoint } from "../../components/GGPlot/components/GGPoint"

export const ScatterPlot: FunctionComponent = () => {
  return (
    <GGPlot
      data={response}
      outerDimensions={{ width: 350, height: 250 }}
      padding={{ top: 20, bottom: 60, left: 60, right: 20 }}
      GeomYTick={{ GGYTick: GGYTick, props: { tickNumber: 8 } }}
      GeomXTick={{ GGXTick, props: { tickNumber: 6 } }}
      GeomLine={{ GGLine, props: { size: 1 } }}
      GeomPoint={{ GGPoint, props: { size: 10 } }}
    />
  )
}
