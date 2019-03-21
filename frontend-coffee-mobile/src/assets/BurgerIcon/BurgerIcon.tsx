import React from "react"
import { SystemFlex } from "../../system-components"
import styled from "../../system-components/system-theme/styled-components"
import { View, TouchableOpacity } from "react-native"
import { withNavigation } from "react-navigation"
import { FunctionComponent } from "react"
import { NavigationProps } from "../../types"
import { selectPrimary } from "../../utils/selectors"
import { SystemAbsolute } from "../../system-components/SystemAbsolute"

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
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
        >
          <BurgerIconContainer>
            <SystemFlex justify="space-between">
              <BurgerIconLines />
              <BurgerIconLines />
              <BurgerIconLines />
            </SystemFlex>
          </BurgerIconContainer>
        </TouchableOpacity>
      </SystemAbsolute>
    )
  } else {
    return null
  }
}

export default withNavigation(BurgerIcon)
