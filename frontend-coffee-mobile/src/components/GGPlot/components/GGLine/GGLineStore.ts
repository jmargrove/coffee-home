import { OppVals, HypVals } from "../../types"

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

  public calcEndOfLine({ data, hypVals, width, lineNumber }: any) {
    return data.map((el: any, i: number) => {
      if (i < data.length - 1) {
        return {
          xEnd: el.x - (hypVals[i].hyp - width / lineNumber) / 2,
          yEnd: el.y + (data[i + 1].y - el.y) / 2
        }
      } else {
        return { xEnd: 0, yEnd: 0 }
      }
    })
  }
}
