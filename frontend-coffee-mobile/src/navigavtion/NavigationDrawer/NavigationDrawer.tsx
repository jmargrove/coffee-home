import React, { FunctionComponent } from "react"
import { ScrollView, SafeAreaView, View, Alert } from "react-native"
import styled from "../../system-components/system-theme/styled-components"
import { SystemText, SystemFlex } from "../../system-components"
import { ListItem } from "native-base"
import { BeanLogoLarge } from "../../assets/BeanLogoLarge/BeenLogoLarge"
import {
  MAP_SCREEN,
  POINT_SCREEN,
  MODEL_RESULTS_SCREEN,
  OPTIMIZE,
  YIELD,
  SETTINGS_SCREEN
} from "../../utils/constants"
import {
  selectPrimary,
  selectPercentageHeight,
  selectTextLarge
} from "../../utils/selectors"
import { demoStore, IDataAddition } from "../../store/demoStore"
import { noPointsAlert } from "../../utils/alerts"

const DrawerHeaderContianer = styled(View)`
  width: 100%;
  height: ${selectPercentageHeight({ percent: 2 / 5 })};
  background-color: ${selectPrimary};
`

export const NavigationDrawerComponent: FunctionComponent<any> = props => {
  const isSavedPoints = demoStore.savedPoints.length > 0

  return (
    <ScrollView>
      <SafeAreaView>
        <DrawerHeaderContianer>
          <SystemFlex justify="space-around" align="center">
            <SystemText blackItalic size={selectTextLarge}>
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
            if (isSavedPoints) {
              props.navigation.closeDrawer()
              props.navigation.navigate(POINT_SCREEN, { screen: "points" })
            } else {
              noPointsAlert()
              props.navigation.closeDrawer()
            }
          }}
        >
          <SystemText>Locations</SystemText>
        </ListItem>
        <ListItem
          onPress={async () => {
            if (demoStore.savedPoints.length > 0) {
              props.navigation.closeDrawer()
              const alertValues = demoStore.savedPoints.map(
                (point: IDataAddition) => {
                  return {
                    text: point.pointName,
                    onPress: () => {
                      props.navigation.navigate(MODEL_RESULTS_SCREEN, {
                        point,
                        type: YIELD
                      })
                    }
                  }
                }
              )

              Alert.alert("Chose a point", "select points below", [
                ...alertValues,
                { text: "Back" }
              ])
            } else {
              noPointsAlert()
              props.navigation.closeDrawer()
            }
          }}
        >
          <SystemText>Calculate Yield</SystemText>
        </ListItem>
        <ListItem
          onPress={async () => {
            if (demoStore.savedPoints.length > 0) {
              const alertValues = demoStore.savedPoints.map(
                (point: IDataAddition) => {
                  return {
                    text: point.pointName,
                    onPress: () => {
                      props.navigation.navigate(MODEL_RESULTS_SCREEN, {
                        point,
                        type: OPTIMIZE
                      })
                    }
                  }
                }
              )

              Alert.alert("Chose a point", "select points below", [
                ...alertValues,
                { text: "Back" }
              ])
            } else {
              noPointsAlert()
              props.navigation.closeDrawer()
            }
          }}
        >
          <SystemText>Optimize Shade</SystemText>
        </ListItem>
        <ListItem
          onPress={() => {
            props.navigation.navigate(SETTINGS_SCREEN, { screen: "points" })
          }}
        >
          <SystemText>Settings</SystemText>
        </ListItem>
      </SafeAreaView>
    </ScrollView>
  )
}
