import { IThemeTypes } from "../system-components/system-theme/styled-components"
import { Dimensions } from "react-native"

export type StyleSelector<Type = string> = ({ theme }: IThemeTypes) => Type

export const selectPrimary: StyleSelector = ({ theme }) => theme.colors.PRIMARY
export const selectSecondary: StyleSelector = ({ theme }) =>
  theme.colors.SECONDARY
export const selectThird: StyleSelector = ({ theme }) => theme.colors.SECONDARY
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
