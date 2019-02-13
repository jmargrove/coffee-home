import styled from "../system-components/system-theme/styled-components"
import { View, Dimensions } from "react-native"
import { PRIMARY } from "../system-components/system-theme/theme"

export const BoundsBar = styled(View)<any>`
  width: ${({ space, theme }) =>
    space
      ? Dimensions.get("window").width - theme.sizes[space] * 2
      : Dimensions.get("window").width};
  height: 2;
  background-color: ${({ theme }) => theme && theme.colors[PRIMARY]};
`
