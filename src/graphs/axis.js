import React from 'react';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { Group } from '@vx/group';
import {scaleLinear } from '@vx/scale'
import { AreaClosed, LinePath } from '@vx/shape';
import { curveMonotoneX } from '@vx/curve';
// import { LinearGradient } from '@vx/gradient';
// import { Grid } from '@vx/grid';
// import { curveBasis } from '@vx/curve'
import { ScaleSVG } from '@vx/responsive';
import './axis.css'

function numTicksForHeight(height) {
  if (height <= 300) return 3;
  if (300 < height && height <= 600) return 5;
  return 10;
}

function numTicksForWidth(width) {
  // if (width <= 300) return 2;
  // if (300 < width && width <= 400) return 5;
  return 12;
}


export default ({
  width,
  height,
  data,
  yMax,
  events = false,
  margin = {
    top: 50,
    left: 60,
    right: 20,
    bottom: 50,
  },
}) => {

  const yScale = scaleLinear({
    range: [height - margin.top - margin.bottom, 0],
    domain: [0, yMax], // the values
    nice: true,
  });

  const xScale = scaleLinear({
    range: [width - margin.right - margin.left, 0],
    domain: [12,1],
    nice: true,
  });


  const yPlot = scaleLinear({
    range: [height-margin.bottom, margin.top],
    domain: [0, yMax], // the values
    nice: true,
  });

  const xPlot = scaleLinear({
    range: [width-margin.right, margin.left],
    domain: [12,1],
    nice: true,
  });



  return (
    <ScaleSVG width={width} height={height}>
    <rect
   x={0}
   y={0}
   width={width}
   height={height}
   fill="#FFFFFF"
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
       stopColor="#ffffff"
       stopOpacity={0.2}
     />
   </linearGradient>
 </defs>
  <Group>
         <LinePath
          data={data}
          xScale={xPlot}
          yScale={yPlot}
          x={(i) => i.month}
          y={(i) => i.rain}
          curve={curveMonotoneX}
          stroke={"#A63A50"}
          strokeWidth={1}
          strokeLinecap="round"
          />
        <AreaClosed
          data={data}
          xScale={xPlot}
          yScale={yPlot}
          x={(i) => i.month}
          y={(i) => i.rain}
          strokeWidth={0}
          curve={curveMonotoneX}
          stroke={'url(#gradient)'}
          fill={'url(#gradient)'}
        />

        <AxisLeft
          top={margin.top}
          left={margin.left}
          scale={yScale}
          hideZero
          numTicks={numTicksForHeight(height)}
          label={'Avg. Rainfall Monthly (mm)'}
          tickTextFontSize={10}
          stroke="#1b1a1e"
          tickStroke="red"
          />

        <AxisBottom
            top={height - margin.bottom}
            left={margin.left}
            scale={xScale}
            numTicks={numTicksForWidth(width)}
            label={'Month'}
            stroke={'#1b1a1e'}
            tickStroke={'#1b1a1e'}
            tickTextFill={'#fff'}
          />
        </Group>
    </ScaleSVG>
  )
};
