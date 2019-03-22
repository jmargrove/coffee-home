import React, { FunctionComponent, ReactNode } from "react"
import styled from "../system-components/system-theme/styled-components"
import { View, StatusBar } from "react-native"
import { theme } from "../system-components/system-theme/theme"
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
  selectPercentageWidth,
  selectSmall,
  selectTextBig
} from "../utils/selectors"
import { SettingsIcon } from "../assets/SettingsIcon/SettingsIcon"
import { Header } from "native-base"

const HeaderContainer = styled(Header)<any>`
  width: ${selectPercentageWidth({ percent: 1 })};
  height: 80;
  background-color: ${selectLightGrey};
  padding-left: 0;
  padding-right: 0;
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
        {/* <PhoneInfoBarr /> */}
        <StatusBar
          barStyle="dark-content"
          backgroundColor={selectLightGrey({ theme })}
        />
        <SystemFlex row align="center" justify="space-between">
          {LeftIcon ? (
            <LeftIcon />
          ) : (
            <SystemTouch>
              <SystemFlex row noFlex>
                <SystemSpace size={selectSmall} />
                <IconBack />
              </SystemFlex>
            </SystemTouch>
          )}

          <SystemText size={selectTextBig}>{children}</SystemText>
          <SystemFlex row noFlex>
            {RightIcon ? <RightIcon /> : <SettingsIcon />}
            <SystemSpace size={selectSmall} />
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
