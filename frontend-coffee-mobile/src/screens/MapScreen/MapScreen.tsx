import React, { FunctionComponent } from "react"
import { Container } from "native-base"
import { NavigationProps } from "../../types"
import { SystemContent } from "../../system-components"
import { StatusBar } from "react-native"
import BurgerIcon from "../../assets/BurgerIcon/BurgerIcon"
import { CloseIcon } from "../../assets/"
import { Map } from "./components/Map"
import { MapAddPointButton } from "./components/MapAddPointButton"

export const MapScreen: FunctionComponent<NavigationProps & any> = ({
  navigation
}) => {
  const selectPoint = navigation.getParam("selectPoint")

  return (
    <Container>
      <StatusBar backgroundColor="transparent" />
      <SystemContent fill>
        <BurgerIcon enable={!selectPoint} />
        <CloseIcon enable={selectPoint} />
        <Map selectPoint={selectPoint} />
        <MapAddPointButton enable={selectPoint} />
      </SystemContent>
    </Container>
  )
}
