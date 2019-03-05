import { FunctionComponent } from "react"
import { DataArray, GG } from "./GG"

export interface IXYCoordinates {
  x: number
  y: number
}

interface IElementData {
  year: number
  yield: number
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
      yTickPosition: number[]
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
      focalPoint: { index: number; year: number; yield: number }
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
  year: number
  yield: number
}

export interface IGGPlotProps extends IGGPlot {
  store: GG
}

interface IDimensions {
  year: number
  yield: number
}

export interface IAbsolute {
  left: number
  top: number
  right: number
  bottom: number
}
