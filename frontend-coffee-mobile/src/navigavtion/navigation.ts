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
  CALCULATE_YIELD,
  OPTIMIZE_SHADE
} from "../utils/constants"
import {
  PoweredWelcomeScreen,
  PoweredMapScreen,
  LoadingScreen,
  PoweredModelResultsScreen,
  PoweredPointScreen
} from "../screens"
import { Dimensions } from "react-native"
import { NavigationDrawerComponent } from "./NavigationDrawer/NavigationDrawer"
import { PoweredSetParametersScreen } from "../screens/SetParametersScreen/SetParametersScreen"

const calculateYeild = createStackNavigator(
  {
    [POINT_SCREEN]: PoweredPointScreen,
    [LOADING_SCREEN]: {
      screen: LoadingScreen
    },
    [MODEL_RESULTS_SCREEN]: { screen: PoweredModelResultsScreen }
  },
  { initialRouteName: POINT_SCREEN, headerMode: "none" }
)

const optimizeShade = createStackNavigator(
  {
    [POINT_SCREEN]: PoweredPointScreen,
    [LOADING_SCREEN]: {
      screen: LoadingScreen
    },
    [MODEL_RESULTS_SCREEN]: { screen: PoweredModelResultsScreen }
  },
  { initialRouteName: POINT_SCREEN, headerMode: "none" }
)

const DrawerNavigator = createDrawerNavigator(
  {
    [MAP_SCREEN]: {
      screen: PoweredMapScreen
    },
    [CALCULATE_YIELD]: calculateYeild,
    [OPTIMIZE_SHADE]: optimizeShade,
    [SET_PARAMETERS_SCREEN]: PoweredSetParametersScreen
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
