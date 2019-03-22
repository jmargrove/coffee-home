import React, { FunctionComponent } from "react"
import { View } from "react-native"
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
import {
  selectWhite,
  selectBlack,
  selectSmall,
  selectRegular,
  selectTextLarge,
  selectTextAtomic
} from "../utils/selectors"
import { verticalScale } from "react-native-size-matters"

const YieldDisplayContainer = styled(View)<{}>`
  position: relative;
  width: ${verticalScale(328)};
  height: ${verticalScale(260)};
`

const DialContainer = styled(View)<{}>`
  width: ${verticalScale(155)};
  height: ${verticalScale(155)};
  border-radius: ${verticalScale(155) / 2};
  border-width: ${verticalScale(10)};
  border-color: ${selectBlack};
  background-color: ${selectWhite};
`

const DialOuterContainer = styled(View)<{}>`
  width: ${verticalScale(180)};
  height: ${verticalScale(180)};
  border-radius: ${verticalScale(90)};
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
  ylab: string
}> = ({ handleDecrement, handleIncrement, focalPoint, ylab }) => {
  return (
    <SystemFlex noFlex>
      <SystemSpace size={selectSmall} />
      <YieldDisplayContainer>
        <SystemRelative>
          <SystemAbsolute left={0} top={verticalScale(54)} zIndex={0}>
            <ConsoleLeftArrow onPress={handleDecrement} />
          </SystemAbsolute>
          <SystemAbsolute top={0} left={verticalScale(28)} zIndex={2}>
            <DialOuterContainer>
              <SystemFlex justify="center" align="center">
                <DialOuterRing />
                <DialContainer>
                  <SystemFlex justify="center" align="center">
                    <SystemAbsolute
                      top={verticalScale(32)}
                      left={verticalScale(24)}
                      zIndex={55}
                    >
                      <SystemText> {ylab}</SystemText>
                    </SystemAbsolute>

                    <SystemText size={selectTextLarge} blackItalic={true}>
                      {focalPoint.x}
                    </SystemText>
                  </SystemFlex>
                </DialContainer>
              </SystemFlex>
            </DialOuterContainer>
          </SystemAbsolute>
          <SystemAbsolute
            top={verticalScale(64)}
            right={verticalScale(28)}
            zIndex={3}
          >
            <DialOuterContainer>
              <SystemFlex justify="center" align="center">
                <DialOuterRing />
                <DialContainer>
                  <SystemFlex justify="center" align="center">
                    <SystemAbsolute
                      top={verticalScale(32)}
                      left={verticalScale(88)}
                      zIndex={55}
                    >
                      <SystemText> t ha</SystemText>
                    </SystemAbsolute>
                    <SystemAbsolute
                      top={verticalScale(30)}
                      left={verticalScale(116)}
                    >
                      <SystemText size={selectTextAtomic}>-1</SystemText>
                    </SystemAbsolute>
                    <SystemText size={selectTextLarge} blackItalic={true}>
                      {Math.round(focalPoint.y * 100) / 100}
                    </SystemText>
                  </SystemFlex>
                </DialContainer>
              </SystemFlex>
            </DialOuterContainer>
          </SystemAbsolute>

          <SystemAbsolute top={verticalScale(116)} right={0} zIndex={0}>
            <ConsoleRightArrow onPress={handleIncrement} />
          </SystemAbsolute>
        </SystemRelative>
      </YieldDisplayContainer>
      <SystemSpace size={selectRegular} />
    </SystemFlex>
  )
}
