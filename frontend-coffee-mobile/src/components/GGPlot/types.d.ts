import { FunctionComponent } from "react"
import GG from "./GG"

export interface IXYCoordinates {
  x: number
  y: number
}

interface IElementData {
  x: number
  y: number
}
export interface IData {
  data: IElementData[]
}

export interface IGGPlot {
  GeomYTick: {
    GGYTick: FunctionComponent<{
      tickNumber: number
      length: number
      yValues: number[]
      yAxisTheme: { yTickPosition: number[]; yLabValues: number[] }
    }>
    props: { tickNumber: number }
  }
  GeomXTick: {
    GGXTick: FunctionComponent<{
      tickNumber: number
      length: number
      xValues: number[]
    }>
    props: { tickNumber: number }
  }
  GeomLine: {
    GGLine: FunctionComponent<{
      data: DataArray
      size: number
    }>
    props: ISize
  }
  GeomPoint: {
    GGPoint: FunctionComponent<{
      data: { x: number; y: number }[]
      size: number
      focalPoint: IFocalPoint
    }>
    props: {
      size: number
      focalPoint: { index: number; x: number; y: number }
    }
  }
  outerDimensions: { width: number; height: number }
  padding: IAbsolute
  data: IElementData[]
}

interface ISize {
  size: number
}

interface IFocalPoint {
  index: number
  x: number
  y: number
}

export interface IGGPlotProps extends IGGPlot {
  store: GG
}

interface IDimensions {
  x: number
  y: number
}

export interface IAbsolute {
  left: number
  top: number
  right: number
  bottom: number
}

export type HypVals = { hyp: number }[]
export type RotateVals = { rotate: number }[]
export type OppVals = { opp: number }[]
export type PointVals = { x: number; y: number }[]
export type ToDegrees = (args: { angle: number }) => number
export type LinePosition = { xEnd: number; yEnd: number }[]
export type DataArray = {
  hyp: number
  opp: number
  rotate: number
  xEnd: number
  yEnd: number
}[]

export type Merge = (
  array1: HypVals,
  array2: OppVals,
  array3: RotateVals,
  array4: LinePosition
) => DataArray

export type CalcEndOfLine = (args: {
  data: PointVals
  hypVals: HypVals
  width: number
  lineNumber: number
}) => LinePosition
export type CalcAngle = (hypArray: HypVals, oppArray: OppVals) => RotateVals
export type CalcOppLength = (data: PointVals) => OppVals
export type CalcHypLength = (data: PointVals) => HypVals
export type CalcPointValues = (data: IElementData[]) => PointVals

export type ExtractAxisValues = (data: IElementData[]) => number[]

export type CalcYTickPosition = (
  length: number,
  yMax: number
) => {
  yTickPosition: number[]
  yLabValues: number[]
  axisEndPadding: number
  yAxisScale: number
}
