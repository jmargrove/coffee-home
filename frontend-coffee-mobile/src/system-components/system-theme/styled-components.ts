import * as styledComponents from "styled-components"
import {
  BLACK,
  WHITE,
  PRIMARY,
  THIRD,
  SECONDARY,
  LIGHT_GREY,
  MEDIUM_GREY,
  HEAVY_GREY,
  SMALL,
  REGULAR,
  MEDIUM,
  BIG,
  LARGE,
  MASSIVE,
  ATOMIC,
  ALPHA_PRIMARY,
  VERTICAL_ATOMIC,
  VERTICAL_SMALL,
  VERTICAL_REGULAR,
  VERTICAL_MEDIUM,
  VERTICAL_BIG,
  VERTICAL_LARGE,
  VERTICAL_MASSIVE
} from "./theme"

interface IColors {
  [BLACK]: string
  [WHITE]: string
  [PRIMARY]: string
  [ALPHA_PRIMARY]: string
  [SECONDARY]: string
  [THIRD]: string
  [LIGHT_GREY]: string
  [MEDIUM_GREY]: string
  [HEAVY_GREY]: string
}

interface ISize {
  [ATOMIC]: number
  [SMALL]: number
  [REGULAR]: number
  [MEDIUM]: number
  [BIG]: number
  [LARGE]: number
  [MASSIVE]: number
}
interface ITextSizes {
  [ATOMIC]: number
  [SMALL]: number
  [REGULAR]: number
  [MEDIUM]: number
  [BIG]: number
  [LARGE]: number
  [MASSIVE]: number
}

interface IVertivalSizes {
  [VERTICAL_ATOMIC]: number
  [VERTICAL_SMALL]: number
  [VERTICAL_REGULAR]: number
  [VERTICAL_MEDIUM]: number
  [VERTICAL_BIG]: number
  [VERTICAL_LARGE]: number
  [VERTICAL_MASSIVE]: number
}

export interface ITheme {
  colors: IColors
  sizes: ISize
  textSizes: ITextSizes
  verticalSizes: IVertivalSizes
}

export interface IThemeTypes {
  theme: ITheme
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>
export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
