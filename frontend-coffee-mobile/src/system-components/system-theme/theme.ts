import { ITheme } from "./styled-components"
import { verticalScale } from "react-native-size-matters"
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
//`Size`
export const VERTICAL_ATOMIC = `VERTICAL_ATOMIC`
export const VERTICAL_SMALL = `VERTICAL_SMALL`
export const VERTICAL_REGULAR = `VERTICAL_REGULAR`
export const VERTICAL_MEDIUM = `VERTICAL_MEDIUM`
export const VERTICAL_BIG = `VERTICAL_BIG`
export const VERTICAL_LARGE = `VERTICAL_LARGE`
export const VERTICAL_MASSIVE = `VERTICAL_MASSIVE`

const spaceBase = 8
const verticalBase = verticalScale(8)

export const theme: ITheme = {
  colors: {
    [BLACK]: "#4A4A4A",
    [WHITE]: "#FDFFFC",
    [PRIMARY]: "rgb(241, 211, 2)", // yellow
    [ALPHA_PRIMARY]: "rgba(241, 211, 2, 0.5)",
    [SECONDARY]: "rgb(35, 87, 137)", // blue
    [THIRD]: "rgb(208, 2, 27)", /// red
    [LIGHT_GREY]: "#F0F0F0",
    [MEDIUM_GREY]: "rgb(136, 136, 136)",
    [HEAVY_GREY]: "black"
  },
  sizes: {
    [ATOMIC]: 0.5 * spaceBase,
    [SMALL]: 1 * spaceBase,
    [REGULAR]: 2 * spaceBase,
    [MEDIUM]: 4 * spaceBase,
    [BIG]: 8 * spaceBase,
    [LARGE]: 16 * spaceBase,
    [MASSIVE]: 32 * spaceBase
  },
  verticalSizes: {
    [VERTICAL_ATOMIC]: 0.5 * verticalBase,
    [VERTICAL_SMALL]: 1 * verticalBase,
    [VERTICAL_REGULAR]: 2 * verticalBase,
    [VERTICAL_MEDIUM]: 4 * verticalBase,
    [VERTICAL_BIG]: 8 * verticalBase,
    [VERTICAL_LARGE]: 16 * verticalBase,
    [VERTICAL_MASSIVE]: 32 * verticalBase
  },
  textSizes: {
    [ATOMIC]: 1 * verticalBase, // 8
    [SMALL]: 1.5 * verticalBase, // 12
    [REGULAR]: 2 * verticalBase, // 16
    [MEDIUM]: 2.5 * verticalBase, // 20
    [BIG]: 3 * verticalBase, //24
    [LARGE]: 4 * verticalBase, // 32
    [MASSIVE]: 5 * verticalBase
  }
}
