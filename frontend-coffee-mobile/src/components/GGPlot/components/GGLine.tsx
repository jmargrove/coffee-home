import React, { FunctionComponent } from "react"
import styled from "../../../system-components/system-theme/styled-components"
import { View } from "react-native"
import { DataArray } from "../GG"

interface IStyledLine {
  hyp: number
  size: number
  rotate: number
  x: number
  y: number
}

const StyledLine = styled(View)<IStyledLine>`
  position: absolute;
  width: ${({ hyp }) => hyp && hyp};
  ${({ size }) => size && `height: ${size}`};
  background-color: lightgrey;
  left: ${({ x }) => x && x};
  bottom: ${({ y }) => y && y};
  ${({ rotate }) => rotate && `transform: rotate(-${rotate}deg`} );
`

export const GGLine: FunctionComponent<{
  size: number
  data: DataArray
}> = ({ size, data }) => {
  return (
    <>
      {data.map((lineSegment, i) => {
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
