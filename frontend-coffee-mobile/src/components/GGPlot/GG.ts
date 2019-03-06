import {
  CalcEndOfLine,
  Merge,
  ToDegrees,
  CalcAngle,
  CalcOppLength,
  OppVals,
  CalcHypLength,
  HypVals,
  CalcPointValues,
  ExtractAxisValues,
  CalcYTickPosition,
  PointVals,
  RotateVals,
  LinePosition,
  DataArray
} from "./types"
import { IElementData } from "./types"
import { GGLineStore } from "./components/GGLine/GGLineStore"
import { GGPointStore } from "./components/GGPoint/GGPointStore"

class GG implements GGLineStore, GGPointStore {
  // Mixin types for GGLine
  toDegrees!: ToDegrees
  calcAngle!: CalcAngle
  calcOppLength!: CalcOppLength
  calcHypLength!: CalcHypLength
  calcEndOfLine!: CalcEndOfLine
  // Mixin types for GGPoint
  calcPointValues!: any

  public merge: Merge = (array1, array2, array3, array4) => {
    const res = []
    for (let i = 0; i < array1.length; i++) {
      const newObj = {
        ...array1[i],
        ...array2[i],
        ...array3[i],
        ...array4[i]
      }
      res.push(newObj)
    }
    return res
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

  private calcYTickPosition: CalcYTickPosition = (tickNumber, length) => {
    const tickSpaces = tickNumber - 1
    return Array(tickNumber)
      .fill(1)
      .map((el, i) => {
        return Math.round((length / tickSpaces) * i * 10) / 10
      })
      .reverse()
  }

  pointVals: PointVals
  xValues: number[]
  yValues: number[]
  xMax: number
  yMax: number
  hypVals: HypVals
  oppVals: OppVals
  rotateVals: RotateVals
  linePosition: LinePosition
  dataArray: DataArray
  lineNumber: number
  width: number
  height: number
  yTickPosition: number[]

  constructor(
    data: IElementData[],
    plotDimensions: { width: number; height: number },
    yTickNumber: number
  ) {
    this.width = plotDimensions.width
    this.height = plotDimensions.height
    this.lineNumber = data.length - 1
    this.xValues = this.extractXValues(data)
    this.xMax = Math.max(...this.xValues)
    this.yValues = this.extractYValues(data)
    this.yMax = Math.max(...this.yValues)

    this.pointVals = this.calcPointValues({
      data,
      yMax: this.yMax,
      xMax: this.xMax,
      width: this.width,
      height: this.height
    })

    this.hypVals = this.calcHypLength(this.pointVals)
    this.oppVals = this.calcOppLength(this.pointVals)
    this.rotateVals = this.calcAngle(this.hypVals, this.oppVals)
    this.linePosition = this.calcEndOfLine({
      data: this.pointVals,
      hypVals: this.hypVals,
      width: this.width,
      lineNumber: this.lineNumber
    })
    this.dataArray = this.merge(
      this.hypVals,
      this.oppVals,
      this.rotateVals,
      this.linePosition
    ).slice(0, this.lineNumber)

    this.yTickPosition = this.calcYTickPosition(yTickNumber, this.height)
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
