import React, { FunctionComponent } from "react"
import styled from "../../../system-components/system-theme/styled-components"
import { View } from "react-native"
import { PRIMARY } from "../../../system-components/system-theme/theme"
import { GG } from "../GG"
import { compose, mapProps } from "recompose"
import { IData } from "../types.d"

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
  ${({ size }) => size && `border-radius: ${size}`}
  ${({ width }) => width && `width: ${width * 2}`}
  ${({ height }) => height && `height: ${height * 2}`}
  `

export interface IGGPointProps {
  store: GG
  size: number
}

const GGPointDefault: FunctionComponent<IGGPointProps> = ({ store, size }) => {
  console.log("size", size)
  const { pointVals } = store
  return (
    <>
      {pointVals.map((el, i) => {
        return <Point key={i} x={el.x - size} y={el.y - size} size={10} />
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

export const GGPoint = withStore(GGPointDefault)
