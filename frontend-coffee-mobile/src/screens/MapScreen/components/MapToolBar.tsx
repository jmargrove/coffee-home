import React from "react"
import { SystemAbsolute } from "../../../system-components/SystemAbsolute"
import { TouchableOpacity } from "react-native"
import { Image } from "react-native"
import { SystemSpace, SystemFlex } from "../../../system-components"
import {
  theme,
  PRIMARY,
  MEDIUM,
  THIRD
} from "../../../system-components/system-theme/theme"
import { FunctionComponent } from "react"
import { View } from "react-native"
import styled from "../../../system-components/system-theme/styled-components"

interface MapToolBarProps {
  viewUserLocaton: () => void
  handleZoomOut: () => void
  handleZoomIn: () => void
  handlePointDrop: () => void
  isSelectingPoint: boolean
}

export const MapToolBar: FunctionComponent<MapToolBarProps> = ({
  viewUserLocaton,
  handleZoomOut,
  handleZoomIn,
  handlePointDrop,
  isSelectingPoint
}) => {
  return (
    <SystemAbsolute vertical={48 * 4 + 70 * 3} right={16}>
      <TouchableOpacity onPress={handleZoomIn}>
        <RoundButton>
          <SystemFlex justify="center" align="center">
            <Image source={require("./../../../assets/plus.png")} />
          </SystemFlex>
        </RoundButton>
      </TouchableOpacity>
      <SystemSpace size={MEDIUM} />
      <TouchableOpacity onPress={handleZoomOut}>
        <RoundButton>
          <SystemFlex justify="center" align="center">
            <Image source={require("./../../../assets/minus.png")} />
          </SystemFlex>
        </RoundButton>
      </TouchableOpacity>

      <SystemSpace size={MEDIUM} />
      <TouchableOpacity onPress={viewUserLocaton}>
        <RoundButton>
          <SystemFlex justify="center" align="center">
            <Image source={require("./../../../assets/reset-map.png")} />
          </SystemFlex>
        </RoundButton>
      </TouchableOpacity>

      <SystemSpace size={MEDIUM} />
      <TouchableOpacity onPress={handlePointDrop}>
        <RoundButton selected={isSelectingPoint}>
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
  border-color: ${({ selected }) =>
    selected ? theme.colors[THIRD] : theme.colors[PRIMARY]};
`
