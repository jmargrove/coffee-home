import React from "react"
import { SystemFlex } from "../../system-components"
import styled from "../../system-components/system-theme/styled-components"
import { View } from "react-native"
import { withNavigation } from "react-navigation"
import { FunctionComponent } from "react"
import { NavigationProps } from "../../types"
import { selectPrimary } from "../../utils/selectors"
import { SystemAbsolute } from "../../system-components/SystemAbsolute"
import { SystemTouch } from "../../system-components/SystemTouch"

const BurgerIconContainer = styled(View)`
  width: 40
  height: 32;
`

const BurgerIconLines = styled(View)`
  width: 40;
  height: 5;
  background-color: ${selectPrimary};
`

const BurgerIcon: FunctionComponent<NavigationProps & { enable: boolean }> = ({
  navigation,
  enable
}) => {
  if (enable) {
    return (
      <SystemAbsolute top={48} left={32} zIndex={32}>
        <SystemTouch onPress={() => navigation.openDrawer()}>
          <BurgerIconContainer>
            <SystemFlex justify="space-between">
              <BurgerIconLines />
              <BurgerIconLines />
              <BurgerIconLines />
            </SystemFlex>
          </BurgerIconContainer>
        </SystemTouch>
      </SystemAbsolute>
    )
  } else {
    return null
  }
}

export default withNavigation(BurgerIcon)
