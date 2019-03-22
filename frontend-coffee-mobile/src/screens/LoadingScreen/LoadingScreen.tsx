import React, { FunctionComponent } from "react"
import { Container } from "native-base"
import { SystemFlex } from "../../system-components/SystemFlex"
import { BeanLogoLarge } from "../../assets/BeanLogoLarge/BeenLogoLarge"
import { SystemText, SystemContent, SystemSpace } from "../../system-components"
import {
  PRIMARY,
  SMALL,
  REGULAR,
  LARGE,
  theme
} from "../../system-components/system-theme/theme"
import { StyleSheet, Animated, View, StatusBar } from "react-native"
import styled from "styled-components"
import {
  selectBlack,
  selectWhite,
  selectHeavyGrey,
  selectLarge,
  selectSmall,
  selectRegular,
  selectTextBig,
  selectTextMassive
} from "../../utils/selectors"

const LoadingAnimationBox = styled(Animated.View)<any>`
  width: 80; 
  height: 24; 
  border-width: ${StyleSheet.hairlineWidth};
  border-color: ${selectHeavyGrey}
  background-color: ${({ on, theme }) =>
    on ? selectHeavyGrey({ theme }) : selectWhite({ theme })}
`
interface ILoadingAnimationProps {
  rev?: boolean
}

interface IAnimateColors {
  colorOn: string
  colorOff: string
  n: number
  i: number
  animatedValue: any
}

type AnimatedColors = (args: IAnimateColors) => Animated.AnimatedInterpolation

const animatedColors: AnimatedColors = ({
  colorOn,
  colorOff,
  n,
  i,
  animatedValue
}) => {
  const colorOnAlpha = colorOn
    .replace(/[)]/g, ", 1)")
    .replace(/rgb/g, "rgba")
    .trim()
  const colorOffAlpha = colorOff
    .replace(/[)]/g, ", 0)")
    .replace(/rgb/g, "rgba")
    .trim()

  const inputRange = Array(n)
    .fill(1)
    .map((el, i) => i)

  const outputRange = inputRange.map(() => colorOffAlpha)

  outputRange[i] = colorOnAlpha
  return animatedValue.interpolate({
    inputRange,
    outputRange
  })
}

const LoadingAnimation: FunctionComponent<ILoadingAnimationProps> = ({
  rev
}) => {
  const animatedValue = new Animated.Value(rev ? 0 : 5)

  Animated.loop(
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: rev ? 5 : 0,
        duration: 1000
      })
    ])
  ).start()

  return (
    <View style={{ transform: [{ rotate: "-30deg" }] }}>
      <SystemFlex noFlex={true} row>
        {Array(5)
          .fill(1)
          .map((el, i) => {
            return (
              <React.Fragment key={i}>
                <LoadingAnimationBox
                  style={{
                    backgroundColor: animatedColors({
                      colorOn: selectBlack({ theme }),
                      colorOff: selectWhite({ theme }),
                      n: 6,
                      i: i,
                      animatedValue
                    })
                  }}
                />
                <SystemSpace size={selectRegular} />
              </React.Fragment>
            )
          })}
      </SystemFlex>
    </View>
  )
}

export const LoadingScreen: FunctionComponent = () => {
  return (
    <Container>
      <StatusBar hidden />
      <SystemContent color={PRIMARY} fill={true}>
        <SystemFlex justify="center" align="center">
          <LoadingAnimation rev />
          <SystemSpace size={selectLarge} />

          <SystemText size={selectTextMassive} italic blackItalic>
            Running
          </SystemText>
          <SystemSpace size={selectSmall} />
          <SystemText italic size={selectTextMassive} blackItalic>
            Coffee Engine
          </SystemText>
          <SystemSpace size={selectRegular} />
          <BeanLogoLarge size={100} />
          <SystemSpace size={selectRegular} />
          <SystemText size={selectTextBig}>Retrieving climate data</SystemText>
          <SystemText size={selectTextBig}>Paramiterising model</SystemText>
          <SystemText size={selectTextBig}>Excecuting model</SystemText>
          <SystemText size={selectTextBig}>Model compelete</SystemText>
          <SystemSpace size={selectLarge} />
          <LoadingAnimation />
        </SystemFlex>
      </SystemContent>
    </Container>
  )
}
