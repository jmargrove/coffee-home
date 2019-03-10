interface ICalcPointValues {
  data: any
  yMax: number
  xMax: number
  width: number
  height: number
  yAxisScale: number
}

export class GGPointStore {
  public calcPointValues({
    data,
    yMax,
    xMax,
    width,
    height,
    yAxisScale
  }: ICalcPointValues) {
    const axisEndPadding = 30
    return data.map((pointRaw: { year: number; yield: number }) => {
      return {
        x: ((width - axisEndPadding) / xMax) * pointRaw.year,
        y: yAxisScale * pointRaw.yield
      }
    })
  }
}
