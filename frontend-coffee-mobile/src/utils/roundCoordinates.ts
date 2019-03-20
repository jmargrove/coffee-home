export const roundCoordinates = (coord: number) => {
  return `${Math.round(coord * 1000) / 1000}°`
}
