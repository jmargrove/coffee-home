export class GGPointStore {
  public calcPointValues({ data, yMax, xMax, width, height }: any) {
    return data.map((pointRaw: { year: number; yield: number }) => {
      return {
        x: (width / xMax) * pointRaw.year,
        y: (height / yMax) * pointRaw.yield
      }
    })
  }
}
