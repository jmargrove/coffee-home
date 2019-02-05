import { ThemeInterface } from "./styled-components"
// Colors
export const BLACK = `BLACK`
export const WHITE = `WHITE`
export const PRIMARY = `PRIMARY`
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
    [BLACK]: "black",
    [WHITE]: "white",
    [PRIMARY]: "black",
    [SECONDARY]: "black",
    [THIRD]: "black",
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
