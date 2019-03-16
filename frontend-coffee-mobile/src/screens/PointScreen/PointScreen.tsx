import React, { FunctionComponent } from "react"
import { Container } from "native-base"
import { HeaderComponent } from "../../components/HeaderComponent"
import { SystemContent, SystemText, SystemSpace } from "../../system-components"
import { ScrollView, AsyncStorage } from "react-native"
import { SAVE_DATA_LOCALLY } from "../../utils/constants"
import { compose, lifecycle } from "recompose"
import { REGULAR } from "../../system-components/system-theme/theme"
import { PointCard } from "./components/PointCard"
import { GlobeIcon } from "../../assets/GlobeIcon/GlobeIcon"

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
      <HeaderComponent LeftIcon={GlobeIcon}>Point Locations </HeaderComponent>
      <SystemContent fill>
        <ScrollView>
          <SystemSpace size={REGULAR} />
          <SystemText center={true}>
            ! Currently storing points locally.{"\n"} Maximum of 5 locations.
          </SystemText>
          <SystemSpace size={REGULAR} />

          {points &&
            points.map((el: IDataAddition, i: number) => {
              return <PointCard item={el} key={i} />
            })}
        </ScrollView>
      </SystemContent>
    </Container>
  )
}

export const PoweredPointScreen = power(PointScreen)
