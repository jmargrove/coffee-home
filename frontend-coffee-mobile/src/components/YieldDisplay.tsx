import React, { FunctionComponent } from "react"
import { View } from "react-native"
import { REGULAR, SMALL } from "../system-components/system-theme/theme"
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
import { selectWhite, selectBlack } from "../utils/selectors"

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
  border-color: ${selectBlack};
  background-color: ${selectWhite};
`

const DialOuterContainer = styled(View)<{}>`
  width: 180;
  height: 180;
  border-radius: 90;
  background-color: ${selectWhite};
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

  focalPoint: { index: number; y: number; x: number }
}> = ({ children, handleDecrement, handleIncrement, focalPoint }) => {
  return (
    <SystemFlex noFlex>
      <SystemSpace size={SMALL} />
      <YieldDisplayContainer>
        <SystemRelative>
          <SystemAbsolute left={0} top={50} zIndex={0}>
            <ConsoleLeftArrow onPress={handleDecrement} />
          </SystemAbsolute>
          <SystemAbsolute top={0} left={28} zIndex={2}>
            <DialOuterContainer>
              <SystemFlex justify="center" align="center">
                <DialOuterRing />
                <DialContainer>
                  <SystemFlex justify="center" align="center">
                    <SystemAbsolute top={32} left={24} zIndex={55}>
                      <SystemText> year</SystemText>
                    </SystemAbsolute>

                    <SystemText size={32} blackItalic={true}>
                      {focalPoint.x}
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
                      <SystemText> t ha</SystemText>
                    </SystemAbsolute>
                    <SystemAbsolute top={30} left={116}>
                      <SystemText size={8}>-1</SystemText>
                    </SystemAbsolute>
                    <SystemText size={32} blackItalic={true}>
                      {Math.round(focalPoint.y * 100) / 100}
                    </SystemText>
                  </SystemFlex>
                </DialContainer>
              </SystemFlex>
            </DialOuterContainer>
          </SystemAbsolute>

          <SystemAbsolute top={116} right={0} zIndex={0}>
            <ConsoleRightArrow onPress={handleIncrement} />
          </SystemAbsolute>
        </SystemRelative>
      </YieldDisplayContainer>
      <SystemSpace size={REGULAR} />
    </SystemFlex>
  )
}
