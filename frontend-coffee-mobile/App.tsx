import React, { Component } from "react"
import { MainNavigation } from "./src/navigavtion/navigation"
import { ThemeProvider } from "styled-components"
import { theme } from "./src/system-components/system-theme/theme"
import NavigationServices from "./src/utils/NavigationServices"
import { WelcomeScreen } from "./src/screens/WelcomeScreen/WelcomeScreen"

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainNavigation
          ref={navigatorRef => {
            NavigationServices.setTopLevelNavigator(navigatorRef)
          }}
        />
      </ThemeProvider>
    )
  }
}
