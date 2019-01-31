import { createSwitchNavigator } from "react-navigation"
import { WelcomeScreen } from "./WelcomeScreen"
import { MapScreen } from "./MapScreen"
import { YieldScreen } from "./YeildScreen"
import { WELCOME_SCREEN, MAP_SCREEN, YEILD_SCREEN } from "./utils/constants"
import { createAppContainer } from "react-navigation"

export const AppNavigation = createSwitchNavigator(
  {
    [WELCOME_SCREEN]: {
      screen: WelcomeScreen
    },
    [MAP_SCREEN]: {
      screen: MapScreen
    },
    [YEILD_SCREEN]: {
      screen: YieldScreen
    }
  },
  { initialRouteName: WELCOME_SCREEN }
)

export const MainNavigation = createAppContainer(AppNavigation)
