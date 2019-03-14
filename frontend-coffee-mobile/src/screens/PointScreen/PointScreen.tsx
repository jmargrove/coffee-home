import React, { FunctionComponent } from "react"
import { Container } from "native-base"
import { HeaderComponent } from "../../components/HeaderComponent"
import { SystemContent, SystemFlex, SystemSpace } from "../../system-components"
import { ScrollView, AsyncStorage, View, TouchableOpacity } from "react-native"
import styled from "../../system-components/system-theme/styled-components"
import { SAVE_DATA_LOCALLY } from "../../utils/constants"
import { compose, lifecycle } from "recompose"
import {
  SMALL,
  REGULAR,
  theme,
  PRIMARY
} from "../../system-components/system-theme/theme"
import { SelectLocationTextComponent } from "../SetParametersScreen/components.ts/SelectedLocation/components/SelectedLocationTextComponent"
import { Alert } from "react-native"
import { selectPrimary } from "../../utils/selectors"

const PointCardContainer = styled(View)`
  width: 300;
  height: 150;
  border-width: 1;
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

const PointCard: FunctionComponent<{ item: IDataAddition }> = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert("Modeling", "Run one of the two models below.", [
          { text: "Yeild Calculation" },
          { text: "Shade Optimization" },
          { text: "Cancel" }
        ])
      }}
    >
      <SystemFlex noFlex>
        <SystemSpace size={SMALL} />
        <PointCardContainer>
          <SystemFlex row>
            <SystemSpace size={SMALL} />
            <SystemFlex>
              <SystemSpace size={SMALL} />
              <SystemFlex color={selectPrimary} />
              <SystemFlex row>
                <SystemFlex>
                  <SelectLocationTextComponent
                    field="name"
                    value={item.pointName}
                  />
                  <SelectLocationTextComponent
                    field="yield"
                    value={item.userCurrentYield.toString()}
                  />
                  <SelectLocationTextComponent
                    field="latitude"
                    value={item.lat.toString()}
                  />
                  <SelectLocationTextComponent
                    field="longitude"
                    value={item.lng.toString()}
                  />
                </SystemFlex>
                <SystemSpace size={REGULAR} />
                <SystemFlex>
                  <SelectLocationTextComponent
                    field="shade"
                    value={item.userShadeValue.toString()}
                  />
                  <SelectLocationTextComponent
                    field="irrigation"
                    value={item.userIrrValue.toString()}
                  />
                  <SelectLocationTextComponent
                    field="slope"
                    value={item.userSlopeValue.toString()}
                  />
                  <SelectLocationTextComponent field="" value={""} />
                </SystemFlex>
              </SystemFlex>
              <SystemSpace size={SMALL} />
            </SystemFlex>
            <SystemSpace size={SMALL} />
          </SystemFlex>
        </PointCardContainer>
        <SystemSpace size={SMALL} />
      </SystemFlex>
    </TouchableOpacity>
  )
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
          <SystemFlex align="center">
            {points &&
              points.map((el: IDataAddition, i: number) => {
                return <PointCard key={i} item={el} />
              })}
          </SystemFlex>
        </ScrollView>
      </SystemContent>
    </Container>
  )
}

export const PoweredPointScreen = power(PointScreen)
