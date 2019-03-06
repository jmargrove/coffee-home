import { ExtractAxisValues } from "../types"

export class GGDefaultData {
  xValues: number[]
  yValues: number[]
  xMax: number
  yMax: number
  width: number
  height: number
  constructor(data: any, plotDimensions: any) {
    this.width = plotDimensions.width
    this.height = plotDimensions.height
    this.xValues = this.extractXValues(data)
    this.xMax = Math.max(...this.xValues)
    this.yValues = this.extractYValues(data)
    this.yMax = Math.max(...this.yValues)
  }

  public extractXValues: ExtractAxisValues = data => {
    return data.map(el => {
      return el.year
    })
  }

  public extractYValues: ExtractAxisValues = data => {
    return data.map(el => {
      return el.yield
    })
  }
}
