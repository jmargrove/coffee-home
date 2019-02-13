import { createSwitchNavigator, createAppContainer } from "react-navigation"
import {
  WELCOME_SCREEN,
  MAP_SCREEN,
  SET_PARAMETERS_SCREEN
} from "./utils/constants"
import { PoweredWelcomeScreen } from "./screens/WelcomeScreen/WelcomeScreen"
import { PoweredMapScreen } from "./screens/MapScreen/MapScreen"
import { SetParametersScreen } from "./screens/SetParametersScreen/SetParametersScreen"

export const AppNavigation = createSwitchNavigator(
  {
    [WELCOME_SCREEN]: {
      screen: PoweredWelcomeScreen
    },
    [MAP_SCREEN]: {
      screen: PoweredMapScreen
    },
    [SET_PARAMETERS_SCREEN]: {
      screen: SetParametersScreen
    }
  },
  { initialRouteName: WELCOME_SCREEN }
)

export const MainNavigation = createAppContainer(AppNavigation)
