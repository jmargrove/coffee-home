import { CalcYTickPosition, PointVals, DataArray } from "./types"
import { IElementData } from "./types"
import { GGLineStore } from "./components/GGLine/GGLineStore"
import { GGPointStore } from "./components/GGPoint/GGPointStore"
import { GGDefaultData } from "./components/GGDefaultData"

interface GGCalculateBase {
  data: IElementData[]
  yMax: number
  xMax: number
  width: number
  height: number
  yAxisScale: number
}

type BaseCalculationFunction = (args: GGCalculateBase) => any

class GG extends GGDefaultData implements GGLineStore, GGPointStore {
  // Mixin types for GGLine
  calcLineCoordinates!: BaseCalculationFunction
  merge!: any
  toDegrees!: any
  calcAngle!: any
  calcOppLength!: any
  calcHypLength!: any
  // Mixin types for GGPoint
  calcPointValues!: BaseCalculationFunction

  private calcYTickPosition: CalcYTickPosition = (length, yMax) => {
    let axisEndPadding = 40
    const increments = 0.5

    const yRound = Math.round(yMax) // 4

    let tickNumber = yRound / increments
    let tickSpaces = tickNumber - 1

    const tickSpaceDistance = (length - axisEndPadding) / tickSpaces

    const yTickPosition = Array(tickNumber + 2)
      .fill(1)
      .map((el, i) => {
        return Math.round(tickSpaceDistance * i * 10) / 10
      })
      .reverse()

    const yLabValues = Array(tickNumber + 2)
      .fill(1)
      .map((el, i) => {
        return Math.round((yRound / tickNumber) * i * 10) / 10
      })
      .reverse()

    return {
      yTickPosition,
      yLabValues,
      axisEndPadding,
      yAxisScale: tickSpaceDistance / increments
    }
  }

  pointVals: PointVals
  dataArray: DataArray
  yAxisTheme: {
    yTickPosition: number[]
    yLabValues: number[]
    axisEndPadding: number
    yAxisScale: number
  }

  constructor(
    data: IElementData[],
    plotDimensions: { width: number; height: number },
    yTickNumber: number
  ) {
    super(data, plotDimensions)
    this.yAxisTheme = this.calcYTickPosition(this.height, this.yMax)
    console.log("theme y", this.yAxisTheme.yAxisScale)
    // calculation of the point value positions
    this.pointVals = this.calcPointValues({
      data,
      yMax: this.yMax,
      xMax: this.xMax,
      width: this.width,
      height: this.height,
      yAxisScale: this.yAxisTheme.yAxisScale
    })

    // calculation of the line positions
    this.dataArray = this.calcLineCoordinates({
      data,
      yMax: this.yMax,
      xMax: this.xMax,
      width: this.width,
      height: this.height,
      yAxisScale: this.yAxisTheme.yAxisScale
    })
  }
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name]
    })
  })
}

applyMixins(GG, [GGLineStore, GGPointStore])

export default GG
