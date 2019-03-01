import React from "react"
import styled from "styled-components"
import { View } from "native-base"
import { SystemFlex } from "../../system-components"
import { FunctionComponent } from "react"
import { IData } from "./types"
import { mapProps, compose } from "recompose"
import { GG } from "./GG"

const GGPlotContainer = styled(View)<any>`
  ${({ width }) => width && `width: ${width}`}
  ${({ height }) => height && `height: ${height}`}
 position: relative;
`
export const BlankCorner = styled(View)<any>`
  position: absolute;
  ${({ left }) => (left ? `left: ${left}` : `left: 0`)}
  ${({ top }) => (top ? `top: ${top}` : `top: 0`)}
  ${({ right }) => (right ? `right: ${right}` : `right:  0`)}
  ${({ bottom }) => (bottom ? `bottom: ${bottom}` : `bottom:  0`)}
  background-color: white;
  z-index: 9
`

export const BlankCenter = styled(View)<any>`
  position: absolute;
  ${({ left }) => left && `left: ${left}`}
  ${({ top }) => top && `top: ${top}`}
  ${({ right }) => right && `right: ${right}`}
  ${({ bottom }) => bottom && `bottom: ${bottom}`}
  background-color: white;
  z-index: 3;
`

export const BlankPanel = styled(View)<any>`
  position: absolute;
  ${({ left }) => (left ? `left: ${left}` : `left: 0`)}
  ${({ top }) => (top ? `top: ${top}` : `top: 0`)}
  ${({ right }) => (right ? `right: ${right}` : `right:  0`)}
  ${({ bottom }) => (bottom ? `bottom: ${bottom}` : `bottom:  0`)}
  background-color: white;
  z-index: 10
`
interface IGGPlot {
  GeomYTick: {
    GGYTick: FunctionComponent<{
      tickNumber: number
      length: number
      data: IData
    }>
    props: { tickNumber: number }
  }
  GeomXTick: {
    GGXTick: FunctionComponent<{
      tickNumber: number
      length: number
      data: IData
    }>
    props: { tickNumber: number }
  }
  GeomLine: {
    GGLine: FunctionComponent<{ data: IData; size: number }>
    props: { size: number }
  }
  GeomPoint: {
    GGPoint: FunctionComponent<{ data: { x: number; y: number }; size: number }>
    props: { size: number }
  }

  outerDimensions: { width: number; height: number }
  padding: { top: number; bottom: number; left: number; right: number }
  data: IData
  store: GG
}
export const GGPlotDefault: FunctionComponent<IGGPlot> = ({
  GeomYTick,
  GeomXTick,
  GeomLine,
  GeomPoint,
  padding,
  outerDimensions,
  data,
  store
}) => {
  const { width, height } = outerDimensions
  const { left, right, top, bottom } = padding
  const plotWidth = width - right - left
  const plotHeight = height - top - bottom
  const { pointVals } = store
  return (
    <SystemFlex noFlex>
      <GGPlotContainer width={width} height={height}>
        <BlankPanel left={0} top={top} right={width - left} bottom={bottom}>
          {GeomYTick && (
            <GeomYTick.GGYTick
              length={plotHeight}
              data={data}
              {...GeomYTick.props}
            />
          )}
        </BlankPanel>
        <BlankPanel left={left} top={0} right={right} bottom={height - top} />
        <BlankPanel left={left} top={height - bottom} right={right} bottom={0}>
          {GeomXTick && (
            <GeomXTick.GGXTick
              length={plotWidth}
              data={data}
              {...GeomXTick.props}
            />
          )}
        </BlankPanel>
        <BlankPanel left={width - right} top={top} right={0} bottom={bottom} />
        <BlankCorner
          left={0}
          right={width - left}
          top={height - bottom}
          bottom={0}
        />
        <BlankCorner
          left={0}
          right={width - left}
          top={0}
          bottom={height - top}
        />
        <BlankCorner
          left={width - right}
          right={0}
          top={0}
          bottom={height - top}
        />
        <BlankCorner
          left={width - right}
          right={0}
          top={height - bottom}
          bottom={0}
        />

        <BlankCenter left={left} right={right} top={top} bottom={bottom}>
          {GeomLine && (
            <GeomLine.GGLine data={data} size={1} {...GeomLine.props} />
          )}
          {GeomPoint && (
            <GeomPoint.GGPoint
              data={pointVals}
              {...GeomPoint.props}
              size={10}
            />
          )}
        </BlankCenter>
      </GGPlotContainer>
    </SystemFlex>
  )
}

const withStore = compose<
  { store: GG } & IGGPlot,
  IData & { store: GG } & IGGPlot
>(
  mapProps(({ data, ...rest }: IData & { size: number } & IGGPlot) => {
    return {
      store: new GG(data, { width: 350 - 80, height: 250 - 80 }),
      data,
      ...rest
    }
  })
)

export const GGPlot = withStore(GGPlotDefault)
