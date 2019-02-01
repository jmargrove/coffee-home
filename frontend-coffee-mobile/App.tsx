import { FunctionComponent } from "react"
import { NavigationComponent } from "react-navigation"
import { MainNavigation } from "./src/navigation"

export const App: FunctionComponent = (): NavigationComponent => (
    <MainNavigation />
)
