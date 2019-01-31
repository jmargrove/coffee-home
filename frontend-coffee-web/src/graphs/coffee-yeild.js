import React from 'react';
import { AxisLeft, AxisBottom } from '@vx/axis';
import {scaleLinear } from '@vx/scale'
import { AreaClosed } from '@vx/shape';
import { GlyphDot } from '@vx/glyph';
import './axis.css'

export default ({
  width,
  height,
  data,
  yMax,
  margin = {
    top: 10,
    left: 60,
    right: 10,
    bottom: 60,
  },
}) => {


  const xScale = scaleLinear({
    rangeRound: [width - margin.left - margin.right, 0],
    domain: [6,1],
  });

  const yScale = scaleLinear({
    rangeRound: [height - margin.top - margin.bottom, 0],
    domain: [0, yMax], // the values
  });


  const xPlot = scaleLinear({
    range: [width-margin.right, margin.left],
    domain: [6,1],
  });

  const yPlot = scaleLinear({
    range: [height-margin.bottom, margin.top],
    domain: [0, yMax], // the values
  });


  return (
    <svg width={width} height={height}>
    <rect
    x={0}
    y={0}
    width={width}
    height={height}
    fill="white"
    rx={14}
  />
  <defs>
    <linearGradient
      id="gradient"
      x1="0%"
      y1="0%"
      x2="0%"
      y2="100%"
    >
      <stop
        offset="0%"
        stopColor="#000000"
        stopOpacity={1}
      />
      <stop
        offset="100%"
        stopColor="#FFFFFF"
        stopOpacity={0.2}
      />
    </linearGradient>
  </defs>

      <AreaClosed
      data={data}
      xScale={xPlot}
      yScale={yPlot}
      x={(i) => i.year}
      y={(i) => i.yield}
      stroke={"black"}
      strokeWidth={1}
      fill={'url(#gradient)'}
      />

      {data.map((point, i) => {
        return(
        <GlyphDot
          top={yScale(point.yield)  + margin.top}
          left={xScale(i+1)  + margin.left}
          fill={"black"}
          r={3}
        />
      )
      })}

        <AxisLeft
          top={margin.top}
          left={margin.left}
          scale={yScale}
          numTicks={5}
          label={'Coffee yield (t ha-1)'}
          tickTextFontSize={10}
          labelProps={{
          fill: 'black',
          textAnchor: 'middle',
          fontSize: 12,
          fontFamily: 'Roboto',
        }}
          />

        <AxisBottom
            top={height - margin.bottom}
            left={margin.left}
            scale={xScale}
            numTicks={6}
            label={'Y e a r'}
            labelProps={{
            fill: 'black',
            textAnchor: 'middle',
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
          />

    </svg>
  )
};
