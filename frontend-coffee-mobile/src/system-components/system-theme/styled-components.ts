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
  ATOMIC
} from "./theme"

export interface ThemeInterface {
  colors: {
    [BLACK]: string
    [WHITE]: string
    [PRIMARY]: string
    [SECONDARY]: string
    [THIRD]: string
    [LIGHT_GREY]: string
    [MEDIUM_GREY]: string
    [HEAVY_GREY]: string
  }
  sizes: {
    [ATOMIC]: number
    [SMALL]: number
    [REGULAR]: number
    [MEDIUM]: number
    [BIG]: number
    [LARGE]: number
    [MASSIVE]: number
  }
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>
export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
