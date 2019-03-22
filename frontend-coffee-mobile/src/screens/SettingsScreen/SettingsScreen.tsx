import React, { FunctionComponent, useState } from "react"
import { HeaderComponent } from "../../components/HeaderComponent"
import { Container } from "native-base"
import {
  SystemContent,
  SystemFlex,
  SystemSpace,
  SystemText,
  SystemPadding
} from "../../system-components"
import { View } from "react-native"
import { ScrollView } from "react-native"
import { SystemTouch } from "../../system-components/SystemTouch"
import { ArrowUpPrimary, ArrowDownBlack, LogoYelloLarge } from "../../assets"
import {
  selectLightGrey,
  selectWhite,
  selectMedium,
  selectRegular,
  selectSmall,
  selectTextMedium,
  selectTextSmall,
  selectTextLarge
} from "../../utils/selectors"
import { Linking } from "react-native"

const SettingsTag: FunctionComponent<{ title: string; disable?: boolean }> = ({
  title,
  children,
  disable
}) => {
  const [primaryActive, setPrimaryActive] = useState(false)
  return (
    <SystemFlex color={selectLightGrey}>
      <SystemSpace size={selectRegular} />
      <SystemFlex row={true} align="center" justify="space-between">
        <SystemFlex noFlex row>
          <SystemSpace size={selectMedium} />
          <SystemText size={selectTextMedium}>{title}</SystemText>
        </SystemFlex>

        <SystemFlex noFlex row align="center">
          {!disable &&
            (primaryActive ? (
              <ArrowUpPrimary onPress={() => setPrimaryActive(false)} />
            ) : (
              <ArrowDownBlack onPress={() => setPrimaryActive(true)} />
            ))}
          <SystemSpace size={selectMedium} />
        </SystemFlex>
      </SystemFlex>
      {primaryActive && !disable && (
        <SystemPadding size={selectRegular}>
          <SystemFlex color={selectWhite}>{children}</SystemFlex>
        </SystemPadding>
      )}
      <SystemSpace size={selectRegular} />
    </SystemFlex>
  )
}

export const SettingsScreen: FunctionComponent = () => {
  return (
    <Container>
      <HeaderComponent RightIcon={View}>Settings</HeaderComponent>
      <SystemContent fill>
        <ScrollView>
          <SystemSpace size={selectRegular} />
          <SystemFlex>
            <SettingsTag title="Legal disclamer">
              <SystemPadding size={selectSmall}>
                <SystemText>
                  Coffee Engine has made every attempt to ensure the accuracy
                  and reliability of the information provided on this
                  application. However, the information is provided “as is”
                  without warranty of any kind. {"\n\n"}Coffee Engine does not
                  accept and responsibility or liability for the accuracy,
                  content, completeness, legality or reliability of the
                  information contained on this application. No warranties,
                  promises and/or representations of any kind, expressed or
                  implied, are given as to the nature, standard, accuracy or
                  otherwise of the information provided in this application nor
                  to the suitability or otherwise of the information to your
                  particular circumstances. {"\n\n"}Coffee Engine and the coffee
                  engine logo are registered trademarks of the Coffee Engine
                  Group.
                </SystemText>
              </SystemPadding>
            </SettingsTag>
            <SystemSpace size={selectRegular} />
            <SystemFlex>
              <SystemTouch
                onPress={() =>
                  Linking.openURL(
                    "mailto:coffeeinfoengine@gmail.com?subject=Coffee Engine Info"
                  )
                }
              >
                <SettingsTag title="Contact" disable />
              </SystemTouch>
              <SystemSpace size={selectRegular} />
            </SystemFlex>

            <SystemFlex
              color={selectLightGrey}
              align="center"
              justify="space-around"
            >
              <SystemSpace size={selectMedium} />
              <SystemText italic bold size={selectTextLarge}>
                Coffee Engine
              </SystemText>
              <SystemSpace size={selectMedium} />
              <LogoYelloLarge size={100} />
              <SystemText center>
                Get yield estimates from any {"\n"}location on the globe.
              </SystemText>
              <SystemSpace size={selectMedium} />
              <SystemText size={selectTextSmall}>
                copyright @ 2019 Coffee Engine. All rights reserved.
              </SystemText>
              <SystemSpace size={selectMedium} />
            </SystemFlex>
          </SystemFlex>
        </ScrollView>
      </SystemContent>
    </Container>
  )
}
