import React, { FunctionComponent } from "react"
import styled from "../system-components/system-theme/styled-components"
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar
} from "react-native"
import {
  PRIMARY,
  LIGHT_GREY,
  SMALL,
  BLACK,
  theme
} from "../system-components/system-theme/theme"
import { SystemFlex, SystemSpace, SystemText } from "../system-components"
import { BoundsBar } from "./BoundsBar"
import { IconBack } from "../assets/IconBack/IconBack"

const PhoneInfoBarr = styled(View)<any>`
  width: 100%;
  height: 24;
  background-color: ${({ theme }) => theme && theme.colors[PRIMARY]};
`

const HeaderContainer = styled(View)<any>`
  width: ${Dimensions.get("window").width};
  height: 80;
  background-color: ${({ theme }) => theme && theme.colors[LIGHT_GREY]};
`

const GreyLine = styled(View)<any>`
  width: ${Dimensions.get("window").width};
  height: 1;
  background-color: grey;
`
export const HeaderComponent: FunctionComponent = ({ children }) => {
  return (
    <HeaderContainer>
      <SystemFlex justify="space-between">
        <PhoneInfoBarr />
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors[PRIMARY]}
        />
        <SystemFlex row align="center" justify="space-between">
          <TouchableOpacity>
            <SystemFlex row noFlex>
              <SystemSpace size={SMALL} />
              <IconBack />
            </SystemFlex>
          </TouchableOpacity>

          <SystemText color={BLACK} size={24} italic bold>
            {children}
          </SystemText>
          <SystemFlex row noFlex>
            <Image source={require("./../assets/settings.png")} />
            <SystemSpace size={SMALL} />
          </SystemFlex>
        </SystemFlex>

        <SystemFlex noFlex>
          <BoundsBar color={PRIMARY} />
          <GreyLine />
        </SystemFlex>
      </SystemFlex>
    </HeaderContainer>
  )
}
