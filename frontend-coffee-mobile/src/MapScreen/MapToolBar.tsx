import React from "react"
import { SystemAbsolute } from "../system-components/SystemAbsolute"
import { TouchableOpacity } from "react-native"
import { Image } from "react-native"
import { SystemSpace, SystemFlex } from "../system-components"
import {
  SMALL,
  theme,
  BLACK,
  PRIMARY,
  BIG,
  MEDIUM
} from "../system-components/system-theme/theme"
import { FunctionComponent } from "react"
import { View } from "react-native"
import styled from "styled-components"

interface MapToolBarProps {
  handleInitialLocation: () => void
  handleZoomOut: () => void
  handleZoomIn: () => void
  handlePointDrop: () => void
}

export const MapToolBar: FunctionComponent<MapToolBarProps> = ({
  handleInitialLocation,
  handleZoomOut,
  handleZoomIn,
  handlePointDrop
}) => {
  return (
    <SystemAbsolute vertical={48 * 4 + 70 * 3} right={16}>
      <TouchableOpacity onPress={handleZoomIn}>
        <RoundButton>
          <SystemFlex justify="center" align="center">
            <Image source={require("./../assets/plus.png")} />
          </SystemFlex>
        </RoundButton>
      </TouchableOpacity>
      <SystemSpace size={MEDIUM} />
      <TouchableOpacity onPress={handleZoomOut}>
        <RoundButton>
          <SystemFlex justify="center" align="center">
            <Image source={require("./../assets/minus.png")} />
          </SystemFlex>
        </RoundButton>
      </TouchableOpacity>

      <SystemSpace size={MEDIUM} />
      <TouchableOpacity onPress={handleInitialLocation}>
        <RoundButton>
          <SystemFlex justify="center" align="center">
            <Image source={require("./../assets/reset-map.png")} />
          </SystemFlex>
        </RoundButton>
      </TouchableOpacity>

      <SystemSpace size={MEDIUM} />
      <TouchableOpacity onPress={handlePointDrop}>
        <RoundButton>
          <SystemFlex justify="center" align="center">
            <View
              style={{
                width: 4,
                height: 4,
                borderRadius: 2,
                backgroundColor: "black"
              }}
            />
          </SystemFlex>
        </RoundButton>
      </TouchableOpacity>
    </SystemAbsolute>
  )
}

const RoundButton = styled(View)<any>`
  background-color: white;
  height: 48;
  width: 48;
  border-radius: 24;
  border-width: 2;
  ${({ theme }) => theme && `border-color: ${theme.colors[PRIMARY]}`}
`
