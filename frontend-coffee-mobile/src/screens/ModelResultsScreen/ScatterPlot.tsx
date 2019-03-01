import React, { FunctionComponent } from "react"
import { GGPlot } from "../../components/GGPlot/GGPlot"
import { GGPoint } from "../../components/GGPlot/components/GGPoint"
import { IData } from "../../components/GGPlot/types"
import { GGLine } from "../../components/GGPlot/components/GGLine"
import { compose, mapProps } from "recompose"
import { GG } from "../../components/GGPlot/GG"
import { SystemFlex } from "../../system-components"
import { View } from "react-native"

const ScatterPlotDefault: FunctionComponent<{ store: GG }> = ({ store }) => {
  const { dataArray, pointVals, xValues, yValues, width, height } = store

  return (
    <GGPlot>
      <GGLine dataArray={dataArray} size={1} />
      <GGPoint data={pointVals} size={10} />
      {/* <GGXTick length={250} tickNumber={6} xValues={xValues} /> */}
    </GGPlot>
  )
}

const withStore = compose<{ store: GG }, IData>(
  mapProps(({ data }: IData) => {
    return {
      store: new GG(data, { width: 350 - 80, height: 250 - 80 })
    }
  })
)

export const ScatterPlot = withStore(ScatterPlotDefault)
