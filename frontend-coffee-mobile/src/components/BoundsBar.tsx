import styled from "../system-components/system-theme/styled-components"
import { View } from "react-native"

import { selectPercentageWidth, selectPrimary } from "../utils/selectors"

export const BoundsBar = styled(View)<any>`
  width: ${({ space, theme }) =>
    space
      ? selectPercentageWidth({ percent: 1 }) - theme.sizes[space] * 2
      : selectPercentageWidth({ percent: 1 })};
  height: 2;
  background-color: ${({ theme, color }) =>
    color ? color({ theme }) : selectPrimary({ theme })};
`
