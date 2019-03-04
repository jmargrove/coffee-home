import React, { FunctionComponent } from "react"
import { View, TouchableOpacity } from "react-native"
import {
  REGULAR,
  PRIMARY,
  BLACK,
  WHITE,
  SMALL
} from "../system-components/system-theme/theme"
import {
  SystemSpace,
  SystemFlex,
  SystemText,
  SystemAbsolute
} from "../system-components"
import styled from "../system-components/system-theme/styled-components"
import { ConsoleLeftArrow } from "../assets/ConsoleLeftArrow/ConsoleLeftArrow"
import { ConsoleRightArrow } from "../assets/ConsoleRightArrow/ConsoleRightArrow"
import { DialOuterRing } from "../assets/DialOuterRing.png/DialOuterRing"

const YieldDisplayContainer = styled(View)<{}>`
  position: relative;
  width: 328;
  height: 260;
`

const DialContainer = styled(View)<{}>`
  width: 200;
  height: 200;
  border-radius: 100;
  border-width: 10;
  border-color: ${({ theme }) => theme && theme.colors[BLACK]};
  background-color: #f0f0f0;
`

const DialOuterContainer = styled(View)<{}>`
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

const SystemRelative = styled(View)<{}>`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: blue;
`

export const YieldDisplay: FunctionComponent<{
  handleIncrement: () => void
  handleDecrement: () => void

  focalPoint: { index: number; yield: number; year: number }
}> = ({ children, handleDecrement, handleIncrement, focalPoint }) => {
  return (
    <SystemFlex noFlex>
      <SystemSpace size={SMALL} />
      <YieldDisplayContainer>
        <SystemRelative>
          <SystemFlex justify="center" row align="center">
            <TouchableOpacity onPress={handleDecrement}>
              <SystemAbsolute left={22.5} top={100}>
                <ConsoleLeftArrow />
              </SystemAbsolute>
            </TouchableOpacity>

            <DialOuterContainer>
              <SystemFlex justify="center" align="center">
                <DialOuterRing>
                  <SystemFlex justify="center" align="center">
                    <DialContainer>
                      <SystemFlex justify="center" align="center">
                        <SystemAbsolute top={45} left={120} zIndex={55}>
                          <SystemText color={BLACK}> t ha</SystemText>
                        </SystemAbsolute>
                        <SystemAbsolute top={40} left={150}>
                          <SystemText color={BLACK} size={12}>
                            -1
                          </SystemText>
                        </SystemAbsolute>
                        <SystemText size={48} color={BLACK} blackItalic={true}>
                          {Math.round(focalPoint.yield * 100) / 100}
                        </SystemText>
                      </SystemFlex>
                    </DialContainer>
                  </SystemFlex>
                </DialOuterRing>
              </SystemFlex>
            </DialOuterContainer>
            <SystemAbsolute top={100} left={280}>
              <TouchableOpacity onPress={handleIncrement}>
                <ConsoleRightArrow />
              </TouchableOpacity>
            </SystemAbsolute>
          </SystemFlex>
        </SystemRelative>
      </YieldDisplayContainer>
      <SystemSpace size={REGULAR} />
    </SystemFlex>
  )
}
