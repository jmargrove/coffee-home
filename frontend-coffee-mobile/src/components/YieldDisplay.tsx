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
  width: 155;
  height: 155;
  border-radius: ${155 / 2};
  border-width: 10;
  border-color: ${({ theme }) => theme && theme.colors[BLACK]};
  background-color: white;
`

const DialOuterContainer = styled(View)<{}>`
  width: 180;
  height: 180;
  border-radius: 90;
  background-color: white;
`

const SystemRelative = styled(View)<{}>`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
          {/* <SystemFlex justify="center" row align="center" color="purple"> */}
          <SystemAbsolute left={0} top={50} zIndex={0}>
            <TouchableOpacity onPress={handleDecrement}>
              <ConsoleLeftArrow />
            </TouchableOpacity>
          </SystemAbsolute>
          <SystemAbsolute top={0} left={28} zIndex={2}>
            <DialOuterContainer>
              <SystemFlex justify="center" align="center">
                <DialOuterRing />
                <DialContainer>
                  <SystemFlex justify="center" align="center">
                    <SystemAbsolute top={32} left={24} zIndex={55}>
                      <SystemText color={BLACK}> year</SystemText>
                    </SystemAbsolute>

                    <SystemText size={32} color={BLACK} blackItalic={true}>
                      {focalPoint.year}
                    </SystemText>
                  </SystemFlex>
                </DialContainer>
              </SystemFlex>
            </DialOuterContainer>
          </SystemAbsolute>
          <SystemAbsolute top={64} right={28} zIndex={3}>
            <DialOuterContainer>
              <SystemFlex justify="center" align="center">
                <DialOuterRing />
                <DialContainer>
                  <SystemFlex justify="center" align="center">
                    <SystemAbsolute top={32} left={88} zIndex={55}>
                      <SystemText color={BLACK}> t ha</SystemText>
                    </SystemAbsolute>
                    <SystemAbsolute top={30} left={116}>
                      <SystemText color={BLACK} size={8}>
                        -1
                      </SystemText>
                    </SystemAbsolute>
                    <SystemText size={32} color={BLACK} blackItalic={true}>
                      {Math.round(focalPoint.yield * 100) / 100}
                    </SystemText>
                  </SystemFlex>
                </DialContainer>
              </SystemFlex>
            </DialOuterContainer>
          </SystemAbsolute>

          <SystemAbsolute top={116} right={0} zIndex={0}>
            <TouchableOpacity onPress={handleIncrement}>
              <ConsoleRightArrow />
            </TouchableOpacity>
          </SystemAbsolute>
        </SystemRelative>
      </YieldDisplayContainer>
      <SystemSpace size={REGULAR} />
    </SystemFlex>
  )
}
