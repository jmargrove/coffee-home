import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation"
import {
  WELCOME_SCREEN,
  MAP_SCREEN,
  SET_PARAMETERS_SCREEN
} from "./utils/constants"
import {
  PoweredWelcomeScreen,
  PoweredMapScreen,
  PoweredSetParametersScreen
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
    }
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
