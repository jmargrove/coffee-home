import React from "react"
import styled from "styled-components"
import { View } from "native-base"
import { SystemFlex } from "../../system-components"
import { FunctionComponent } from "react"
import { mapProps, compose } from "recompose"
import GG from "./GG"
import {
  LIGHT_GREY,
  BLACK,
  theme
} from "../../system-components/system-theme/theme"
import { StyleSheet } from "react-native"
import { IGGPlotProps, IGGPlot, IAbsolute } from "./types.d"

const GGPlotContainer = styled(View)<{ width: number; height: number }>`
  ${({ width }) => width && `width: ${width}`}
  ${({ height }) => height && `height: ${height}`}
 position: relative;
`

export const BlankCorner = styled(View)<IAbsolute>`
  position: absolute;
  ${({ left }) => (left ? `left: ${left}` : `left: 0`)}
  ${({ top }) => (top ? `top: ${top}` : `top: 0`)}
  ${({ right }) => (right ? `right: ${right}` : `right:  0`)}
  ${({ bottom }) => (bottom ? `bottom: ${bottom}` : `bottom:  0`)}
  background-color: white;
  z-index: 9
`

export const BlankCenter = styled(View)<IAbsolute>`
  position: absolute;
  ${({ left }) => left && `left: ${left}`}
  ${({ top }) => top && `top: ${top}`}
  ${({ right }) => right && `right: ${right}`}
  ${({ bottom }) => bottom && `bottom: ${bottom}`}
  background-color: ${({ theme }) => theme && theme.colors[LIGHT_GREY]};
  z-index: 3;
`

export const BlankPanel = styled(View)<IAbsolute>`
  position: absolute;
  ${({ left }) => (left ? `left: ${left}` : `left: 0`)}
  ${({ top }) => (top ? `top: ${top}` : `top: 0`)}
  ${({ right }) => (right ? `right: ${right}` : `right:  0`)}
  ${({ bottom }) => (bottom ? `bottom: ${bottom}` : `bottom:  0`)}
  background-color: white;
  z-index: 10
`

const PlotCanvas: FunctionComponent<{
  left: number
  right: number
  top: number
  bottom: number
  yTickPosition: number[]
  plotWidth: number
}> = ({ children, left, right, top, bottom, yTickPosition, plotWidth }) => {
  const axisPadding = 30
  return (
    <BlankCenter left={left} right={right} top={top} bottom={bottom}>
      {yTickPosition.map((el, i) => {
        return (
          <View
            key={i}
            style={{
              position: "absolute",
              backgroundColor: theme.colors[BLACK],
              width: plotWidth,
              height: StyleSheet.hairlineWidth,
              top: el - StyleSheet.hairlineWidth / 2 + axisPadding,
              left: 0
            }}
          />
        )
      })}
      {children}
    </BlankCenter>
  )
}

export const GGPlotDefault: FunctionComponent<IGGPlotProps> = ({
  GeomYTick,
  GeomXTick,
  GeomLine,
  GeomPoint,
  padding,
  outerDimensions,
  store
}) => {
  const { width, height } = outerDimensions
  const { left, right, top, bottom } = padding
  const plotWidth = width - right - left
  const plotHeight = height - top - bottom
  const { pointVals, dataArray, yValues, xValues, yTickPosition } = store

  return (
    <SystemFlex noFlex>
      <GGPlotContainer width={width} height={height}>
        <BlankPanel left={0} top={top} right={width - left} bottom={bottom}>
          {GeomYTick && (
            <GeomYTick.GGYTick
              yTickPosition={yTickPosition}
              yValues={yValues}
              length={plotHeight}
              {...GeomYTick.props}
            />
          )}
        </BlankPanel>
        <BlankPanel left={left} top={0} right={right} bottom={height - top} />
        <BlankPanel left={left} top={height - bottom} right={right} bottom={0}>
          {GeomXTick && (
            <GeomXTick.GGXTick
              xValues={xValues}
              length={plotWidth}
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

        <PlotCanvas
          left={left}
          right={right}
          top={top}
          bottom={bottom}
          yTickPosition={yTickPosition}
          plotWidth={plotWidth}
        >
          {GeomLine && <GeomLine.GGLine data={dataArray} {...GeomLine.props} />}
          {GeomPoint && (
            <GeomPoint.GGPoint data={pointVals} {...GeomPoint.props} />
          )}
        </PlotCanvas>
      </GGPlotContainer>
    </SystemFlex>
  )
}

const withStore = compose<IGGPlotProps, IGGPlot>(
  mapProps(
    ({ data, outerDimensions, padding, GeomYTick, ...rest }: IGGPlot) => {
      const plotWidth = outerDimensions.width - padding.left - padding.right
      const plotHeight = outerDimensions.height - padding.top - padding.bottom
      return {
        store: new GG(
          data,
          { width: plotWidth, height: plotHeight },
          GeomYTick.props.tickNumber
        ),
        outerDimensions,
        padding,
        GeomYTick,
        ...rest
      }
    }
  )
)

export const GGPlot = withStore(GGPlotDefault)
