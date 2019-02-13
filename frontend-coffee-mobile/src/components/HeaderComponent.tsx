import React, { FunctionComponent } from "react"
import styled from "../system-components/system-theme/styled-components"
import { View, Dimensions, TouchableOpacity, Image } from "react-native"
import {
  PRIMARY,
  LIGHT_GREY,
  SMALL,
  BLACK
} from "../system-components/system-theme/theme"
import { SystemFlex, SystemSpace, SystemText } from "../system-components"

const PhoneInfoBarr = styled(View)<any>`
  height: 24;
  width: 100%;
  background-color: ${({ theme }) => theme && theme.colors[PRIMARY]};
`

const HeaderContainer = styled(View)<any>`
  width: ${Dimensions.get("window").width};
  height: 80;
  background-color: ${({ theme }) => theme && theme.colors[LIGHT_GREY]};
`
const YellowLine = styled(View)<any>`
width: ${Dimensions.get("window").width}
height: 2;
background-color: ${({ theme }) => theme && theme.colors[PRIMARY]};
`

const GreyLine = styled(View)<any>`
  width: ${Dimensions.get("window").width};
  height: 1;
  background-color: grey;
`
export const HeaderComponent: FunctionComponent = () => {
  return (
    <HeaderContainer>
      <SystemFlex justify="space-between">
        <PhoneInfoBarr />
        <SystemFlex row align="center" justify="space-between">
          <TouchableOpacity>
            <SystemFlex row noFlex>
              <SystemSpace size={SMALL} />
              <Image source={require("./../assets/back.png")} />
            </SystemFlex>
          </TouchableOpacity>

          <SystemText color={BLACK} size={24} italic bold>
            Select location
          </SystemText>
          <SystemFlex row noFlex>
            <Image source={require("./../assets/settings.png")} />
            <SystemSpace size={SMALL} />
          </SystemFlex>
        </SystemFlex>

        <SystemFlex noFlex>
          <YellowLine />
          <GreyLine />
        </SystemFlex>
      </SystemFlex>
    </HeaderContainer>
  )
}
