import React, { FunctionComponent } from "react"
import {
  GGPlot,
  GGYTick,
  GGXTick,
  GGLine,
  GGPoint
} from "../../components/GGPlot"
import { selectPercentageWidth } from "../../utils/selectors"

export const ScatterPlot: FunctionComponent<{
  focalPoint: { index: number; yield: number; year: number }
  response: any
  pointSize: number
  xlab: string
  ylab: string
  tickNumber: number
}> = ({ focalPoint, response, pointSize, xlab, ylab, tickNumber }) => {
  return (
    <GGPlot
      xlab={xlab}
      ylab={ylab}
      data={response}
      outerDimensions={{
        width: selectPercentageWidth({ percent: 0.95 }),
        height: 200
      }}
      padding={{ top: 20, bottom: 50, left: 60, right: 20 }}
      GeomYTick={{ GGYTick, props: { tickNumber } }}
      GeomXTick={{ GGXTick, props: { tickNumber } }}
      GeomLine={{ GGLine, props: { size: 1 } }}
      GeomPoint={{ GGPoint, props: { size: pointSize, focalPoint } }}
    />
  )
}
