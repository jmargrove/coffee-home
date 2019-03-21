import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation"
import {
  WELCOME_SCREEN,
  MAP_SCREEN,
  SET_PARAMETERS_SCREEN,
  LOADING_SCREEN,
  MODEL_RESULTS_SCREEN,
  DRAWER_CONTAINER,
  POINT_SCREEN,
  SETTINGS_SCREEN
} from "../utils/constants"
import {
  WelcomeScreen,
  MapScreen,
  LoadingScreen,
  PoweredModelResultsScreen,
  PoweredPointScreen
} from "../screens"
import { Dimensions } from "react-native"
import { NavigationDrawerComponent } from "./NavigationDrawer/NavigationDrawer"
import { PoweredSetParametersScreen } from "../screens/SetParametersScreen/SetParametersScreen"
import { SettingsScreen } from "../screens/SettingsScreen/SettingsScreen"

const DrawerNavigator = createDrawerNavigator(
  {
    [MAP_SCREEN]: {
      screen: MapScreen
    }
  },
  {
    drawerWidth: Dimensions.get("screen").width * 0.85,
    initialRouteName: MAP_SCREEN,
    contentComponent: NavigationDrawerComponent
  }
)

export const AppNavigation = createStackNavigator(
  {
    [WELCOME_SCREEN]: {
      screen: WelcomeScreen
    },
    [POINT_SCREEN]: PoweredPointScreen,
    [DRAWER_CONTAINER]: {
      screen: DrawerNavigator
    },
    [SET_PARAMETERS_SCREEN]: PoweredSetParametersScreen,
    [MODEL_RESULTS_SCREEN]: {
      screen: PoweredModelResultsScreen,
      navigationOptions: {
        transitionConfig: () => ({
          transitionSpec: {
            duration: 0
          }
        })
      }
    },
    [SETTINGS_SCREEN]: { screen: SettingsScreen }
  },
  {
    initialRouteName: WELCOME_SCREEN,
    headerMode: "none",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0
      }
    })
  }
)

export const MainNavigation = createAppContainer(AppNavigation)
