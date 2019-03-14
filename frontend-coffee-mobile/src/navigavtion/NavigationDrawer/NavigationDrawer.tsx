import React, { FunctionComponent } from "react"
import { ScrollView, SafeAreaView, View } from "react-native"
import styled from "../../system-components/system-theme/styled-components"
import { SystemText, SystemFlex } from "../../system-components"
import { ListItem } from "native-base"
import { BeanLogoLarge } from "../../assets/BeanLogoLarge/BeenLogoLarge"
import { MAP_SCREEN, POINT_SCREEN } from "../../utils/constants"
import { selectPrimary, selectPercentageHeight } from "../../utils/selectors"

const DrawerHeaderContianer = styled(View)`
  width: 100%;
  height: ${selectPercentageHeight({ percent: 1 / 3 })};
  background-color: ${selectPrimary};
`

export const NavigationDrawerComponent: FunctionComponent<any> = props => {
  return (
    <ScrollView>
      <SafeAreaView>
        <DrawerHeaderContianer>
          <SystemFlex justify="space-around" align="center">
            <SystemText blackItalic size={32}>
              Coffee Engine
            </SystemText>
            <BeanLogoLarge size={64} />
            <SystemText center>
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
