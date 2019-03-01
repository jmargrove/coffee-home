import React, { FunctionComponent } from "react"
import styled from "../../system-components/system-theme/styled-components"
import { View } from "react-native"

const XYAxis = styled(View)<any>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 6;
  background-color: white;
`

interface IGGPlotProps {
  width: number
  height: number
}

export const GGPlot: FunctionComponent<IGGPlotProps> = ({
  children,
  width,
  height
}) => {
  return (
    <>
      <XYAxis>{children}</XYAxis>
    </>
  )
}
