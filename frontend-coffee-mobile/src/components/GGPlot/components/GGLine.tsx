import React, { FunctionComponent } from "react"
import styled from "../../../system-components/system-theme/styled-components"
import { View } from "react-native"
import { DataArray } from "../GG"

const StyledLine = styled(View)<any>`
  position: absolute;
  width: ${({ hyp }) => hyp && hyp};
  ${({ size }) => size && `height: ${size}`};
  background-color: lightgrey;
  left: ${({ x }) => x && x};
  bottom: ${({ y }) => y && y};
  ${({ rotate }) => rotate && `transform: rotate(-${rotate}deg`} );
`

export const GGLine: FunctionComponent<{
  dataArray: DataArray
  size: number
}> = ({ dataArray, size }) => {
  return (
    <>
      {dataArray.map((lineSegment, i) => {
        return (
          <StyledLine
            size={size}
            x={lineSegment.xEnd}
            y={lineSegment.yEnd - size / 2}
            key={i}
            rotate={lineSegment.rotate}
            hyp={lineSegment.hyp}
          />
        )
      })}
    </>
  )
}
