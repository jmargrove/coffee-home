import React, { FunctionComponent } from "react"
import { Container } from "native-base"
import { HeaderComponent } from "../../components/HeaderComponent"
import {
  SystemContent,
  SystemFlex,
  SystemText,
  SystemSpace
} from "../../system-components"
import { ScrollView, AsyncStorage, View } from "react-native"
import styled from "../../system-components/system-theme/styled-components"
import { SAVE_DATA_LOCALLY } from "../../utils/constants"
import { compose, lifecycle } from "recompose"
import { selectLightGrey } from "../../utils/selectors"
import { REGULAR } from "../../system-components/system-theme/theme"

import { PoweredPointCard } from "./components/PointCard"

const PointCardContainer = styled(View)`
  width: 100%;
  height: 64;
  background-color: ${selectLightGrey};
`

export interface IDataAddition {
  lng: number
  lat: number
  userCurrentYield: number
  pointName: string
  userShadeValue: number
  userIrrValue: 1 | 0
  userSlopeValue: number
}

const power = compose<any, any>(
  lifecycle({
    async componentDidMount() {
      const getPoints = async () => {
        return await AsyncStorage.getItem(SAVE_DATA_LOCALLY)
      }
      const points = await getPoints()
      console.log(JSON.parse(points!))
      this.setState({ points: JSON.parse(points!) })
    }
  })
)

const PointScreen: FunctionComponent<any> = ({ points }) => {
  console.log("points", points)
  return (
    <Container>
      <HeaderComponent>Point Locations </HeaderComponent>
      <SystemContent fill>
        <ScrollView>
          <SystemSpace size={REGULAR} />
          <SystemText center={true}>
            ! Currently storing points locally.{"\n"} Maximum of 5 locations.
          </SystemText>
          <SystemSpace size={REGULAR} />
          <SystemFlex align="center">
            {points &&
              points.map((el: IDataAddition, i: number) => {
                return <PoweredPointCard key={i} item={el} />
              })}
          </SystemFlex>
        </ScrollView>
      </SystemContent>
    </Container>
  )
}

export const PoweredPointScreen = power(PointScreen)
