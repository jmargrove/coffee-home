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
    let tickNumber = 0
    let tickSpaces = 0
    let tickSpaceDistance = 0
    let yRound = 0
    let axisEndPadding = 40
    const increments = 0.5

    if (yMax === 0) {
      yRound = 2
      tickNumber = 3 / increments
      tickSpaces = tickNumber - 1
      tickSpaceDistance = (length - axisEndPadding) / tickSpaces
    } else {
      yRound = Math.round(yMax) // 4
      tickNumber = yRound / increments
      tickSpaces = tickNumber - 1
      tickSpaceDistance = (length - axisEndPadding) / tickSpaces
    }

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
