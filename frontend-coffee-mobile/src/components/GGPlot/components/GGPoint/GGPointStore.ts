interface ICalcPointValues {
  data: any
  xMax: number
  width: number
  yAxisScale: number
}

export class GGPointStore {
  public calcPointValues({ data, xMax, width, yAxisScale }: ICalcPointValues) {
    const axisEndPadding = 30
    return data.map((pointRaw: { x: number; y: number }) => {
      return {
        x: ((width - axisEndPadding) / xMax) * pointRaw.x,
        y: yAxisScale * pointRaw.y
      }
    })
  }
}
