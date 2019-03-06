type AlphaFunction = (color: string, alpha: number) => string

export const alphaFunction: AlphaFunction = (color, alpha) => {
  return color
    .replace(/[)]/g, `, ${alpha})`)
    .replace(/rgb/g, "rgba")
    .trim()
}
