import React, { FunctionComponent, ReactNode } from "react"
import styled from "../system-components/system-theme/styled-components"
import { View, StatusBar } from "react-native"
import { SMALL, theme } from "../system-components/system-theme/theme"
import {
  SystemFlex,
  SystemSpace,
  SystemText,
  SystemTouch
} from "../system-components"
import { BoundsBar } from "./BoundsBar"
import { IconBack } from "../assets/IconBack/IconBack"
import {
  selectPrimary,
  selectLightGrey,
  selectPercentageWidth
} from "../utils/selectors"
import { SettingsIcon } from "../assets/SettingsIcon/SettingsIcon"

const PhoneInfoBarr = styled(View)<any>`
  width: 100%;
  height: 24;
  background-color: ${selectPrimary};
`

const HeaderContainer = styled(View)<any>`
  width: ${selectPercentageWidth({ percent: 1 })};
  height: 80;
  background-color: ${selectLightGrey};
`

const GreyLine = styled(View)<any>`
  width: ${selectPercentageWidth({ percent: 1 })};
  height: 1;
  background-color: ${selectLightGrey};
`
export const HeaderComponent: FunctionComponent<{
  LeftIcon?: ReactNode
  RightIcon?: ReactNode
}> = ({ children, LeftIcon, RightIcon }) => {
  return (
    <HeaderContainer>
      <SystemFlex justify="space-between">
        <PhoneInfoBarr />
        <StatusBar
          barStyle="dark-content"
          backgroundColor={selectPrimary({ theme })}
        />
        <SystemFlex row align="center" justify="space-between">
          {LeftIcon ? (
            <LeftIcon />
          ) : (
            <SystemTouch>
              <SystemFlex row noFlex>
                <SystemSpace size={SMALL} />
                <IconBack />
              </SystemFlex>
            </SystemTouch>
          )}

          <SystemText size={24} blackItalic>
            {children}
          </SystemText>
          <SystemFlex row noFlex>
            {RightIcon ? <RightIcon /> : <SettingsIcon />}
            <SystemSpace size={SMALL} />
          </SystemFlex>
        </SystemFlex>

        <SystemFlex noFlex>
          <BoundsBar />
          <GreyLine />
        </SystemFlex>
      </SystemFlex>
    </HeaderContainer>
  )
}
