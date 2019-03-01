import React, { FunctionComponent } from "react"
import styled from "../../../system-components/system-theme/styled-components"
import { View } from "react-native"
import { PRIMARY } from "../../../system-components/system-theme/theme"
import { IData } from "../types"

const Point = styled(View)<any>`
  position: absolute;
  z-index: 1;
  bottom: ${({ y }) => y && y};
  left: ${({ x }) => x && x};
  background-color: white;
  border-width: 0.8;
  border-color: ${({ theme }) => theme && theme.colors[PRIMARY]}
  width: 20;
  height: 20;
  border-radius: 10;
`

export const GGPoint: FunctionComponent<IData> = ({ data }) => {
  return (
    <>
      {data.map((el, i) => {
        console.log("yeild", (150 / 4.14) * el.yield)
        return (
          <Point
            key={i}
            x={(300 / 5) * el.year - 10}
            y={(150 / 4.14) * el.yield - 10}
          />
        )
      })}
    </>
  )
}
