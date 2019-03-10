import React from "react"
import { Container } from "native-base"
import { HeaderComponent } from "../../components/HeaderComponent"
import { SystemContent } from "../../system-components"
import { ScrollView, AsyncStorage } from "react-native"

const PointCard = () => {}

export const PointScreen = () => {
  const getPoints = async () => {
    const points = await AsyncStorage.getItem("PointStorage")
  }

  return (
    <Container>
      <HeaderComponent>Model results</HeaderComponent>
      <SystemContent fill>
        <ScrollView />
      </SystemContent>
    </Container>
  )
}
