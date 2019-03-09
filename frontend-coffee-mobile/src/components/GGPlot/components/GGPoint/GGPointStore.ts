export class GGPointStore {
  public calcPointValues({ data, yMax, xMax, width, height }: any) {
    const axisEndPadding = 30
    return data.map((pointRaw: { year: number; yield: number }) => {
      return {
        x: ((width - axisEndPadding) / xMax) * pointRaw.year,
        y: ((height - axisEndPadding) / yMax) * pointRaw.yield
      }
    })
  }
}
