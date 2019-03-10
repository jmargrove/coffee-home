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
  DRAWER_CONTAINER
} from "../utils/constants"
import {
  PoweredWelcomeScreen,
  PoweredMapScreen,
  PoweredSetParametersScreen,
  LoadingScreen,
  PoweredModelResultsScreen
} from "../screens"
import { Dimensions } from "react-native"
import { NavigationDrawerComponent } from "./NavigationDrawer/NavigationDrawer"

const DrawerNavigator = createDrawerNavigator(
  {
    [MAP_SCREEN]: {
      screen: PoweredMapScreen
    },
    [SET_PARAMETERS_SCREEN]: {
      screen: PoweredSetParametersScreen
    },
    [MODEL_RESULTS_SCREEN]: { screen: PoweredModelResultsScreen }
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
      screen: PoweredWelcomeScreen
    },
    [DRAWER_CONTAINER]: {
      screen: DrawerNavigator
    },
    [LOADING_SCREEN]: {
      screen: LoadingScreen
    }
  },
  {
    initialRouteName: DRAWER_CONTAINER,
    headerMode: "none",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 250
      }
    })
  }
)

export const MainNavigation = createAppContainer(AppNavigation)
