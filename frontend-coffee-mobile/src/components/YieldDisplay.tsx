import React, { FunctionComponent } from "react"
import { View } from "native-base"
import { BoundsBar } from "./BoundsBar"
import {
  REGULAR,
  PRIMARY,
  SMALL,
  BLACK,
  WHITE,
  LIGHT_GREY
} from "../system-components/system-theme/theme"
import { SystemSpace, SystemFlex, SystemText } from "../system-components"
import styled from "../system-components/system-theme/styled-components"
import { Text } from "react-native"

const YieldDisplayContainer = styled(View)`
  width: 328;
`

const DialContainer = styled(View)`
  width: 200;
  height: 200;
  border-radius: 100;
  border-width: 10;
  border-color: ${({ theme }) => theme && theme.colors[BLACK]};
  background-color: #f0f0f0;
`

const DialOuterContainer = styled(View)`
position: absolute; 
z-index: 10;
top: 20;
left: 50; 
right: 50; 
bottom: 20 ;
  width: 240
  height: 240;
  border-radius: 120
  border-width: 10;
  border-color: ${({ theme }) => theme && theme.colors[WHITE]};
  background-color: ${({ theme }) => theme && theme.colors[WHITE]};
`

const DialOuterRing = styled(View)`
  width: 206;
  height: 206;
  border-radius: 103;
  border-width: 10;
  border-color: ${({ theme }) => theme && theme.colors[PRIMARY]};
`

const ArrowRight = styled(View)`
position: absolute;
left: 264;;
top: 70;
  width: 0;
  height: 0;
  border-top-color: white;
  border-top-width: 72
  border-bottom-color: white;
  border-bottom-width: 72
  border-left-color: ${({ theme }) => theme && theme.colors[BLACK]};
  border-left-width: 96
`

const ArrowLeft = styled(View)`
position: absolute;
left: -20;
top: 70;
  width: 0;
  height: 0;
  border-top-color: white;
  border-top-width: 72
  border-bottom-width: 72
  border-bottom-color: white;
  border-right-color: ${({ theme }) => theme && theme.colors[BLACK]};
  border-right-width: 96
`

export const YieldDisplay: FunctionComponent = ({ children }) => {
  return (
    <>
      <SystemSpace size={REGULAR} />
      <YieldDisplayContainer>
        <View
          style={{
            position: "relative",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "blue"
          }}
        >
          <SystemFlex justify="center" row align="center">
            <ArrowLeft />
            <DialOuterContainer>
              <SystemFlex justify="center" align="center">
                <DialOuterRing>
                  <SystemFlex justify="center" align="center">
                    <DialContainer>
                      <SystemFlex justify="center" align="center">
                        <Text
                          style={{
                            position: "absolute",
                            top: 45,
                            left: 120,
                            fontSize: 18
                          }}
                        >
                          t ha
                        </Text>
                        <Text
                          style={{
                            position: "absolute",
                            top: 40,
                            left: 150,
                            fontSize: 12
                          }}
                        >
                          -1
                        </Text>
                        <SystemText size={48} color={BLACK} blackItalic={true}>
                          3.98
                        </SystemText>
                      </SystemFlex>
                    </DialContainer>
                  </SystemFlex>
                </DialOuterRing>
              </SystemFlex>
            </DialOuterContainer>
            <ArrowRight />
          </SystemFlex>
        </View>
      </YieldDisplayContainer>
      <SystemSpace size={REGULAR} />
    </>
  )
}
