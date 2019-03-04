export const alphaFunction = (color: string, alpha: number) => {
  return color
    .replace(/[)]/g, `, ${alpha})`)
    .replace(/rgb/g, "rgba")
    .trim()
}
