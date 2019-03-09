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
    const yFloor = Math.floor(yMax)
    const tickNumber = yFloor / 0.5
    console.log(tickNumber)
    const axisEndPadding = 30
    const tickSpaces = tickNumber - 1

    const endNog = yMax - yFloor
    return Array(tickNumber)
      .fill(1)
      .map((el, i) => {
        return (
          Math.round(((length - axisEndPadding) / tickSpaces) * i * 10) / 10
        )
      })
      .reverse()
  }

  pointVals: PointVals
  dataArray: DataArray
  yTickPosition: number[]

  constructor(
    data: IElementData[],
    plotDimensions: { width: number; height: number },
    yTickNumber: number
  ) {
    super(data, plotDimensions)

    // calculation of the point value positions
    this.pointVals = this.calcPointValues({
      data,
      yMax: this.yMax,
      xMax: this.xMax,
      width: this.width,
      height: this.height
    })

    // calculation of the line positions
    this.dataArray = this.calcLineCoordinates({
      data,
      yMax: this.yMax,
      xMax: this.xMax,
      width: this.width,
      height: this.height
    })

    this.yTickPosition = this.calcYTickPosition(this.height, this.yMax)
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
