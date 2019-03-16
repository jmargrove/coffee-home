export const handleUserShadeParameter = (shade: string) => {
  switch (shade) {
    case "none":
      return 0
    case "low":
      return (1 / 3) * 10
    case "medium":
      return (2 / 3) * 10
    case "high":
      return 10
  }
}
