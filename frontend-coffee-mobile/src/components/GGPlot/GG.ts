type HypVals = { hyp: number }[]
type RotateVals = { rotate: number }[]
type OppVals = { opp: number }[]
export type PointVals = { x: number; y: number }[]
type ToDegrees = (args: { angle: number }) => number
type LinePosition = { xEnd: number; yEnd: number }[]
export type DataArray = {
  hyp: number
  opp: number
  rotate: number
  xEnd: number
  yEnd: number
}[]

type Merge = (
  array1: HypVals,
  array2: OppVals,
  array3: RotateVals,
  array4: LinePosition
) => DataArray

type CalcEndOfLine = (data: PointVals, hypVals: HypVals) => LinePosition
type CalcAngle = (hypArray: HypVals, oppArray: OppVals) => RotateVals
type CalcOppLength = (data: PointVals) => OppVals
type CalcHypLength = (data: PointVals) => HypVals
type CalcPointValues = (data: InputData) => PointVals

type InputData = { [x: string]: number }[]

type ExtractAxisValues = (data: InputData) => number[]

export class GG {
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

  public calcEndOfLine: CalcEndOfLine = (data, hypVals) => {
    return data.map((el, i) => {
      if (i < data.length - 1) {
        return {
          xEnd: el.x - (hypVals[i].hyp - this.width / this.lineNumber) / 2,
          yEnd: el.y + (data[i + 1].y - el.y) / 2
        }
      } else {
        return { xEnd: 0, yEnd: 0 }
      }
    })
  }

  private toDegrees: ToDegrees = ({ angle }) => {
    return angle * (180 / Math.PI)
  }

  public calcAngle: CalcAngle = (hypArray, oppArray) => {
    return hypArray.map((el, i) => {
      return {
        rotate: this.toDegrees({ angle: Math.asin(oppArray[i].opp / el.hyp) })
      }
    })
  }

  public calcOppLength: CalcOppLength = data => {
    return data.reduce((acc: OppVals, el, i) => {
      if (i < data.length - 1) {
        const res: OppVals[0] = { opp: data[i + 1].y - el.y }
        acc.push(res)
        return acc
      } else {
        return acc
      }
    }, [])
  }

  public calcHypLength: CalcHypLength = data => {
    return data.reduce((acc: HypVals, el, i) => {
      if (i < data.length - 1) {
        const res = Math.sqrt(
          Math.pow(el.x - data[i + 1].x, 2) + Math.pow(el.y - data[i + 1].y, 2)
        )
        acc.push({ hyp: res })
        return acc
      } else {
        return acc
      }
    }, [])
  }

  public calcPointValues: CalcPointValues = data => {
    return data.map((el, i) => {
      console.log(this.width, this.xMax, el.year)
      return {
        x: (this.width / this.xMax) * el.year,
        y: (this.height / this.yMax) * el.yield
      }
    })
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

  constructor(
    data: InputData,
    plotDimensions: { width: number; height: number }
  ) {
    this.width = plotDimensions.width
    this.height = plotDimensions.height
    this.lineNumber = data.length - 1
    this.xValues = this.extractXValues(data)
    this.xMax = Math.max(...this.xValues)
    this.yValues = this.extractYValues(data)
    this.yMax = Math.max(...this.yValues)
    this.pointVals = this.calcPointValues(data)
    this.hypVals = this.calcHypLength(this.pointVals)
    this.oppVals = this.calcOppLength(this.pointVals)
    this.rotateVals = this.calcAngle(this.hypVals, this.oppVals)
    this.linePosition = this.calcEndOfLine(this.pointVals, this.hypVals)
    this.dataArray = this.merge(
      this.hypVals,
      this.oppVals,
      this.rotateVals,
      this.linePosition
    ).slice(0, this.lineNumber)
  }
}
