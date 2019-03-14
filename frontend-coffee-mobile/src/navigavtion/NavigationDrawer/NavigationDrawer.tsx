import React, { FunctionComponent } from "react"
import { ScrollView, SafeAreaView, View, TouchableOpacity } from "react-native"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../../types"
import { Dimensions } from "react-native"
import { PRIMARY, BLACK } from "../../system-components/system-theme/theme"
import styled from "../../system-components/system-theme/styled-components"
import { SystemText, SystemFlex } from "../../system-components"
import { ListItem } from "native-base"
import { BeanLogoLarge } from "../../assets/BeanLogoLarge/BeenLogoLarge"
import { MAP_SCREEN, POINT_SCREEN } from "../../utils/constants"

const DrawerHeaderContianer = styled(View)`
  width: 100%;
  height: ${(Dimensions.get("screen").height * 1) / 3};
  background-color: ${({ theme }) => theme.colors[PRIMARY]};
`

export const NavigationDrawerComponent: FunctionComponent<any> = props => {
  console.log("props", props)
  return (
    <ScrollView>
      <SafeAreaView>
        <DrawerHeaderContianer>
          <SystemFlex justify="space-around" align="center">
            <SystemText blackItalic size={32} color={BLACK}>
              Coffee Engine
            </SystemText>
            <BeanLogoLarge size={64} />
            <SystemText center color={BLACK}>
              Get yeild estimates from any{"\n"} location on the globe.
            </SystemText>
          </SystemFlex>
        </DrawerHeaderContianer>
        <ListItem />
        <ListItem
          onPress={() => {
            props.navigation.closeDrawer()
            props.navigation.navigate(MAP_SCREEN, { selectPoint: false })
          }}
        >
          <SystemText>Map Screen</SystemText>
        </ListItem>

        <ListItem
          onPress={() => {
            props.navigation.closeDrawer()
            props.navigation.navigate(MAP_SCREEN, { selectPoint: true })
          }}
        >
          <SystemText>Add a location</SystemText>
        </ListItem>
        <ListItem
          onPress={() => {
            props.navigation.closeDrawer()
            props.navigation.navigate(POINT_SCREEN, { screen: "points" })
          }}
        >
          <SystemText>Locations </SystemText>
        </ListItem>
        <ListItem
          onPress={() => {
            props.navigation.closeDrawer()
            props.navigation.navigate(POINT_SCREEN, { screen: "yield" })
          }}
        >
          <SystemText>Calculate Yield</SystemText>
        </ListItem>
        <ListItem
          onPress={() => {
            props.navigation.closeDrawer()
            props.navigation.navigate(POINT_SCREEN, { screen: "optimize" })
          }}
        >
          <SystemText>Optimize Shade</SystemText>
        </ListItem>
      </SafeAreaView>
    </ScrollView>
  )
}
