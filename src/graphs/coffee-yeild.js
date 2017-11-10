import React from 'react';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { Group } from '@vx/group';
import {scaleLinear } from '@vx/scale'
import { AreaClosed, LinePath } from '@vx/shape';
import { curveMonotoneX } from '@vx/curve';
import { ScaleSVG } from '@vx/responsive';
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
    bottom: 40,
  },
}) => {

  const yScale = scaleLinear({
    range: [height - margin.top - margin.bottom, 0],
    domain: [0, yMax], // the values
    nice: true,
  });

  const xScale = scaleLinear({
    range: [width - margin.right - margin.left, 0],
    domain: [6,1],
    nice: true,
  });


  return (
    <svg width={width} height={height}>

        

        <AxisLeft
          top={margin.top}
          left={margin.left}
          scale={yScale}
          numTicks={5}
          label={'Coffee yield (t ha-1)'}
          tickTextFontSize={10}
          />

        <AxisBottom
            top={height - margin.bottom}
            left={margin.left}
            scale={xScale}
            numTicks={6}
            label={'Year'}
            stroke={'#1b1a1e'}
            tickStroke={'#1b1a1e'}
            tickTextFill={'#fff'}
          />

    </svg>
  )
};
