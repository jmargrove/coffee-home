import React, { FunctionComponent } from "react"
import styled from "../../../system-components/system-theme/styled-components"
import { View } from "react-native"
import { GG } from "../GG"
import { compose, mapProps } from "recompose"
import { IData } from "../types.d"

const StyledLine = styled(View)<any>`
  position: absolute;
  width: ${({ hyp }) => hyp && hyp};
  ${({ size }) => size && `height: ${size}`};
  background-color: lightgrey;
  left: ${({ x }) => x && x};
  bottom: ${({ y }) => y && y};
  ${({ rotate }) => rotate && `transform: rotate(-${rotate}deg`} );
`

const GGLineDefault: FunctionComponent<{
  size: number
  store: GG
}> = ({ size, store }) => {
  const { dataArray } = store
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

const withStore = compose<
  { store: GG; size: number },
  IData & { size: number }
>(
  mapProps(({ data, size }: IData & { size: number }) => {
    return {
      store: new GG(data, { width: 350 - 80, height: 250 - 80 }),
      size: size
    }
  })
)

export const GGLine = withStore(GGLineDefault)
