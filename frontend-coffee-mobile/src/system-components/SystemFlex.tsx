import styled from "styled-components";
import { View } from "react-native";
import { System } from "./types";


export const SystemFlex = styled(View) <System.Flex>`
flex: ${({ noFlex }) => noFlex ? null : 1}
 ${({ justify }) => `justify-content: ${justify}`}
 ${({ alignContent }) => `align-content: ${alignContent}`}
 ${({ align }) => `align-items: ${align}`}}
 ${({ wrap }) => `flex-wrap: ${wrap}`}}
 ${({ direction }) => `flex-direction: ${direction}`}}
`

