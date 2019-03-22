import React, { FunctionComponent } from "react"
import { Container } from "native-base"
import { NavigationProps } from "../../types"
import { SystemContent } from "../../system-components"
import { StatusBar, Platform } from "react-native"
import BurgerIcon from "../../assets/BurgerIcon/BurgerIcon"
import { CloseIcon } from "../../assets/"
import { Map } from "./components/Map"
import { MapAddPointButton } from "./components/MapAddPointButton"
import { selectWhite } from "../../utils/selectors"
import { theme } from "../../system-components/system-theme/theme"

export const MapScreen: FunctionComponent<NavigationProps & any> = ({
  navigation
}) => {
  const selectPoint = navigation.getParam("selectPoint")

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Platform.select({
          ios: "transparent",
          android: selectWhite({ theme })
        })}
      />
      <SystemContent fill>
        <BurgerIcon enable={!selectPoint} />
        <CloseIcon enable={selectPoint} />
        <Map selectPoint={selectPoint} />
        <MapAddPointButton enable={selectPoint} />
      </SystemContent>
    </Container>
  )
}
