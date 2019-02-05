import React, { Component } from "react"
import { MainNavigation } from "./src/navigation"
import { ThemeProvider } from "styled-components"
import { theme } from "./src/system-components/theme"

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainNavigation />
      </ThemeProvider>
    )
  }
}
