import React from "react"
import { SystemFlex } from "../../system-components"
import styled from "../../system-components/system-theme/styled-components"
import { View, TouchableOpacity } from "react-native"
import { PRIMARY } from "../../system-components/system-theme/theme"
import { withNavigation } from "react-navigation"
import { FunctionComponent } from "react"
import { NavigationProps } from "../../types"

const BurgerIconContainer = styled(View)`
  width: 40
  height: 32;
`

const BurgerIconLines = styled(View)`
  width: 40;
  height: 5;
  background-color: ${({ theme }) => theme.colors[PRIMARY]};
`

const BurgerIcon: FunctionComponent<NavigationProps> = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <BurgerIconContainer>
        <SystemFlex justify="space-between">
          <BurgerIconLines />
          <BurgerIconLines />
          <BurgerIconLines />
        </SystemFlex>
      </BurgerIconContainer>
    </TouchableOpacity>
  )
}

export default withNavigation(BurgerIcon)
