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
import {
  REGULAR,
  MEDIUM,
  SMALL
} from "../../system-components/system-theme/theme"
import { SystemTouch } from "../../system-components/SystemTouch"
import { ArrowUpPrimary, ArrowDownBlack, LogoYelloLarge } from "../../assets"
import { selectLightGrey, selectWhite } from "../../utils/selectors"
import { Linking } from "react-native"

const SettingsTag: FunctionComponent<{ title: string; disable?: boolean }> = ({
  title,
  children,
  disable
}) => {
  const [primaryActive, setPrimaryActive] = useState(false)
  return (
    <SystemFlex color={selectLightGrey}>
      <SystemSpace size={REGULAR} />
      <SystemFlex row={true} align="center" justify="space-between">
        <SystemFlex noFlex row>
          <SystemSpace size={MEDIUM} />
          <SystemText size={20}>{title}</SystemText>
        </SystemFlex>

        <SystemFlex noFlex row align="center">
          {!disable &&
            (primaryActive ? (
              <SystemTouch onPress={() => setPrimaryActive(false)}>
                <ArrowUpPrimary />
              </SystemTouch>
            ) : (
              <SystemTouch onPress={() => setPrimaryActive(true)}>
                <ArrowDownBlack />
              </SystemTouch>
            ))}
          <SystemSpace size={MEDIUM} />
        </SystemFlex>
      </SystemFlex>
      {primaryActive && !disable && (
        <SystemPadding size={REGULAR}>
          <SystemFlex color={selectWhite}>{children}</SystemFlex>
        </SystemPadding>
      )}
      <SystemSpace size={REGULAR} />
    </SystemFlex>
  )
}

export const SettingsScreen: FunctionComponent = () => {
  return (
    <Container>
      <HeaderComponent RightIcon={View}>Settings</HeaderComponent>
      <SystemContent fill>
        <ScrollView>
          <SystemSpace size={REGULAR} />
          <SystemFlex>
            <SettingsTag title="Legal disclamer">
              <SystemPadding size={SMALL}>
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
            <SystemSpace size={REGULAR} />
            <SystemFlex>
              <SystemTouch
                onPress={() =>
                  Linking.openURL(
                    "mailto:grovejam@gmail.com?subject=Coffee Engine Info"
                  )
                }
              >
                <SettingsTag title="Contact" disable />
              </SystemTouch>
              <SystemSpace size={REGULAR} />
            </SystemFlex>

            <SystemFlex
              color={selectLightGrey}
              align="center"
              justify="space-around"
            >
              <SystemSpace size={MEDIUM} />
              <SystemText blackItalic size={32}>
                Coffee Engine
              </SystemText>
              <SystemSpace size={MEDIUM} />
              <LogoYelloLarge size={100} />
              <SystemText center>
                Get yeild estimates from any {"\n"}
                location on the globe.
              </SystemText>
              <SystemSpace size={MEDIUM} />
              <SystemText size={12}>
                copyright @ 2019 Coffee Engine. All rights reserved.
              </SystemText>
              <SystemSpace size={MEDIUM} />
            </SystemFlex>
          </SystemFlex>
        </ScrollView>
      </SystemContent>
    </Container>
  )
}
