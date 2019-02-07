import { ThemeInterface } from "./styled-components"
// Colors
export const BLACK = `BLACK`
export const WHITE = `WHITE`
export const PRIMARY = `PRIMARY`
export const ALPHA_PRIMARY = `ALPHA_PRIMARY`
export const SECONDARY = `SECONDARY`
export const THIRD = `THIRD`
export const LIGHT_GREY = `LIGHT_GREY`
export const MEDIUM_GREY = `MEDIUM_GREY`
export const HEAVY_GREY = `HEAVY_GREY`
//`Size`
export const ATOMIC = `ATOMIC`
export const SMALL = `SMALL`
export const REGULAR = `REGULAR`
export const MEDIUM = `MEDIUM`
export const BIG = `BIG`
export const LARGE = `LARGE`
export const MASSIVE = `MASSIVE`

const base = 8

export const theme: ThemeInterface = {
  colors: {
    [BLACK]: "#020100",
    [WHITE]: "#FDFFFC",
    [PRIMARY]: "rgb(241, 211, 2)", // yellow
    [ALPHA_PRIMARY]: "rgba(241, 211, 2, 0.5)",
    [SECONDARY]: "#235789", // blue
    [THIRD]: "#ED1C24", /// red
    [LIGHT_GREY]: "rgb(80,80,80)",
    [MEDIUM_GREY]: "rgb(136, 136, 136)",
    [HEAVY_GREY]: "black"
  },
  sizes: {
    [ATOMIC]: 0.5 * base,
    [SMALL]: 1 * base,
    [REGULAR]: 2 * base,
    [MEDIUM]: 4 * base,
    [BIG]: 8 * base,
    [LARGE]: 16 * base,
    [MASSIVE]: 32 * base
  }
}
