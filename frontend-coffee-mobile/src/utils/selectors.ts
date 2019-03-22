import { IThemeTypes } from "../system-components/system-theme/styled-components"
import { Dimensions } from "react-native"
import { VERTICAL_ATOMIC } from "../system-components/system-theme/theme"

export type StyleSelector<Type = string> = ({
  theme,
  vertical
}: IThemeTypes & { vertical?: boolean }) => Type

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

// Size selectors
export const selectAtomic: StyleSelector<number> = ({ theme, vertical }) =>
  vertical ? theme.verticalSizes.VERTICAL_ATOMIC : theme.sizes.ATOMIC
export const selectSmall: StyleSelector<number> = ({ theme, vertical }) =>
  vertical ? theme.verticalSizes.VERTICAL_SMALL : theme.sizes.SMALL
export const selectRegular: StyleSelector<number> = ({ theme, vertical }) =>
  vertical ? theme.verticalSizes.VERTICAL_REGULAR : theme.sizes.REGULAR
export const selectMedium: StyleSelector<number> = ({ theme, vertical }) =>
  vertical ? theme.verticalSizes.VERTICAL_MEDIUM : theme.sizes.MEDIUM
export const selectBig: StyleSelector<number> = ({ theme, vertical }) =>
  vertical ? theme.verticalSizes.VERTICAL_BIG : theme.sizes.BIG
export const selectLarge: StyleSelector<number> = ({ theme, vertical }) =>
  vertical ? theme.verticalSizes.VERTICAL_LARGE : theme.sizes.LARGE
export const selectMassive: StyleSelector<number> = ({ theme, vertical }) =>
  vertical ? theme.verticalSizes.VERTICAL_MASSIVE : theme.sizes.MASSIVE

// TEXT selectors
export const selectTextAtomic: StyleSelector<number> = ({ theme }) =>
  theme.textSizes.ATOMIC
export const selectTextSmall: StyleSelector<number> = ({ theme }) =>
  theme.textSizes.SMALL
export const selectTextRegular: StyleSelector<number> = ({ theme }) =>
  theme.textSizes.REGULAR
export const selectTextMedium: StyleSelector<number> = ({ theme }) =>
  theme.textSizes.MEDIUM
export const selectTextBig: StyleSelector<number> = ({ theme }) =>
  theme.textSizes.BIG
export const selectTextLarge: StyleSelector<number> = ({ theme }) =>
  theme.textSizes.LARGE
export const selectTextMassive: StyleSelector<number> = ({ theme }) =>
  theme.textSizes.MASSIVE
