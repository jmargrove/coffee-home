import {
  OppVals,
  HypVals,
  PointVals,
  RotateVals,
  LinePosition,
  DataArray,
  Merge
} from "../../types"

interface MergeArgs {
  hypotenuseValues: HypVals
  oppositeValues: OppVals
  rotateValues: RotateVals
  linePositionValues: LinePosition
}

export class GGLineStore {
  public toDegrees({ angle }: { angle: number }) {
    return angle * (180 / Math.PI)
  }

  public calcAngle(hypArray: { hyp: number }[], oppArray: { opp: number }[]) {
    return hypArray.map((el, i) => {
      return {
        rotate: this.toDegrees({ angle: Math.asin(oppArray[i].opp / el.hyp) })
      }
    })
  }

  public calcOppLength(data: { y: number }[]) {
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

  public calcHypLength(data: { y: number; x: number }[]) {
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

  public calcPointValues({ data, yMax, xMax, width, height, yAxisScale }: any) {
    return data.map((pointRaw: { x: number; y: number }) => {
      return {
        x: (width / xMax) * pointRaw.y,
        y: yAxisScale * pointRaw.y
      }
    })
  }

  public merge({
    hypotenuseValues,
    oppositeValues,
    rotateValues,
    linePositionValues
  }: MergeArgs) {
    const res = []
    for (let i = 0; i < hypotenuseValues.length; i++) {
      const newObj = {
        ...hypotenuseValues[i],
        ...oppositeValues[i],
        ...rotateValues[i],
        ...linePositionValues[i]
      }
      res.push(newObj)
    }
    return res
  }

  public calcLineCoordinates({
    data,
    yMax,
    xMax,
    width,
    height,
    yAxisScale
  }: any) {
    console.log("data stuff", data, yMax, xMax, width, height)
    const lineNumber = data.length - 1
    const pointVals = this.calcPointValues({
      data,
      yMax,
      xMax,
      width,
      height,
      yAxisScale
    })

    const hypotenuseValues = this.calcHypLength(pointVals)
    const oppositeValues = this.calcOppLength(pointVals)
    const rotateValues = this.calcAngle(hypotenuseValues, oppositeValues)

    const linePositionValues = pointVals.map((el: any, i: number) => {
      if (i < pointVals.length - 1) {
        return {
          xEnd: el.x - (hypotenuseValues[i].hyp - width / lineNumber) / 2,
          yEnd: el.y + (pointVals[i + 1].y - el.y) / 2
        }
      } else {
        return { xEnd: 0, yEnd: 0 }
      }
    })

    const mergedLineAttributes = this.merge({
      hypotenuseValues,
      oppositeValues,
      rotateValues,
      linePositionValues
    }).slice(0, lineNumber)

    return mergedLineAttributes
  }
}
