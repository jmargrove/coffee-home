import { IThemeTypes } from "../system-components/system-theme/styled-components"
import { Dimensions } from "react-native"

export type StyleSelector<Type = string> = ({ theme }: IThemeTypes) => Type

export const selectPrimary: StyleSelector = ({ theme }) => theme.colors.PRIMARY
export const selectSecondary: StyleSelector = ({ theme }) =>
  theme.colors.SECONDARY
export const selectThird: StyleSelector = ({ theme }) => theme.colors.THIRD
export const selectBlack: StyleSelector = ({ theme }) => theme.colors.BLACK
export const selectWhite: StyleSelector = ({ theme }) => theme.colors.WHITE
export const selectLightGrey: StyleSelector = ({ theme }) =>
  theme.colors.LIGHT_GREY
export const selectHeavyGrey: StyleSelector = ({ theme }) =>
  theme.colors.HEAVY_GREY
export const selectMediumGrey: StyleSelector = ({ theme }) =>
  theme.colors.MEDIUM_GREY

// Sizes
interface IPercentSelector {
  percent: number
}
type PercentSelector = ({ percent }: IPercentSelector) => number

export const selectPercentageHeight: PercentSelector = ({ percent }) =>
  Dimensions.get("window").height * percent
export const selectPercentageWidth: PercentSelector = ({ percent }) =>
  Dimensions.get("window").width * percent

export const selectAtomic: StyleSelector<number> = ({ theme }) =>
  theme.sizes.ATOMIC
export const selectSmall: StyleSelector<number> = ({ theme }) =>
  theme.sizes.SMALL
export const selectRegular: StyleSelector<number> = ({ theme }) =>
  theme.sizes.REGULAR
export const selectMedium: StyleSelector<number> = ({ theme }) =>
  theme.sizes.MEDIUM
export const selectBig: StyleSelector<number> = ({ theme }) => theme.sizes.BIG
export const selectLarge: StyleSelector<number> = ({ theme }) =>
  theme.sizes.LARGE
export const selectMassive: StyleSelector<number> = ({ theme }) =>
  theme.sizes.MASSIVE
