import { createStackNavigator, createAppContainer } from "react-navigation"
import {
  WELCOME_SCREEN,
  MAP_SCREEN,
  SET_PARAMETERS_SCREEN,
  LOADING_SCREEN,
  MODEL_RESULTS_SCREEN
} from "./utils/constants"
import {
  PoweredWelcomeScreen,
  PoweredMapScreen,
  PoweredSetParametersScreen,
  LoadingScreen,
  PoweredModelResultsScreen
} from "./screens"

export const AppNavigation = createStackNavigator(
  {
    [WELCOME_SCREEN]: {
      screen: PoweredWelcomeScreen
    },
    [MAP_SCREEN]: {
      screen: PoweredMapScreen
    },
    [SET_PARAMETERS_SCREEN]: {
      screen: PoweredSetParametersScreen
    },
    [LOADING_SCREEN]: {
      screen: LoadingScreen
    },
    [MODEL_RESULTS_SCREEN]: { screen: PoweredModelResultsScreen }
  },
  {
    initialRouteName: MODEL_RESULTS_SCREEN,
    headerMode: "none",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0
      }
    })
  }
)

export const MainNavigation = createAppContainer(AppNavigation)
