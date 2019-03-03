import React, { FunctionComponent } from "react"
import { response } from "./ModelResultsScreen"
import {
  GGPlot,
  GGYTick,
  GGXTick,
  GGLine,
  GGPoint
} from "../../components/GGPlot"

export const ScatterPlot: FunctionComponent = () => {
  return (
    <GGPlot
      data={response}
      outerDimensions={{ width: 350, height: 230 }}
      padding={{ top: 20, bottom: 60, left: 60, right: 20 }}
      GeomYTick={{ GGYTick, props: { tickNumber: 8 } }}
      GeomXTick={{ GGXTick, props: { tickNumber: 6 } }}
      GeomLine={{ GGLine, props: { size: 1 } }}
      GeomPoint={{ GGPoint, props: { size: 10 } }}
    />
  )
}
