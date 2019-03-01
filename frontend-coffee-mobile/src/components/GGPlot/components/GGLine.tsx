import React, { FunctionComponent } from "react"
import styled from "../../../system-components/system-theme/styled-components"
import { View } from "react-native"
import { IData } from "../types.d"
import { GG } from "../GG"

const StyledLine = styled(View)<any>`
  position: absolute;
  width: ${({ hyp }) => hyp && hyp};
  height: 2;
  background-color: lightgrey;
  left: ${({ x }) => x && x};
  bottom: ${({ y }) => y && y};
  ${({ rotate }) => rotate && `transform: rotate(-${rotate}deg`} );
`

export const GGLine: FunctionComponent<IData> = ({ data }) => {
  const gg = new GG(data)
  console.log(gg.dataArray)
  return (
    <>
      {gg.dataArray.map((lineSegment, i) => {
        return (
          <StyledLine
            x={lineSegment.xEnd}
            y={lineSegment.yEnd}
            key={i}
            rotate={lineSegment.rotate}
            hyp={lineSegment.hyp}
          />
        )
      })}
    </>
  )
}
