export const handleUserSlopeParameter = (slope: string) => {
  switch (slope) {
    case "flat":
      return 1
    case "slight":
      return (1 / 3) * 45
    case "gradual":
      return (2 / 3) * 45
    case "steep":
      return 45
  }
}
