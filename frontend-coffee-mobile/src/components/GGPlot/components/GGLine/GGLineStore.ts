import {
  CalcAngle,
  CalcOppLength,
  OppVals,
  CalcHypLength,
  HypVals,
  ToDegrees
} from "../../types"

export class GGLineStore {
  protected toDegrees: ToDegrees = ({ angle }) => {
    return angle * (180 / Math.PI)
  }

  protected calcAngle: CalcAngle = (hypArray, oppArray) => {
    return hypArray.map((el, i) => {
      return {
        rotate: this.toDegrees({ angle: Math.asin(oppArray[i].opp / el.hyp) })
      }
    })
  }

  protected calcOppLength: CalcOppLength = data => {
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

  protected calcHypLength: CalcHypLength = data => {
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
}
