import React, { FunctionComponent } from "react"
import { Container } from "native-base"
import { HeaderComponent } from "../../components/HeaderComponent"
import { SystemContent, SystemText, SystemSpace } from "../../system-components"
import { ScrollView } from "react-native"
import { PointCard } from "./components/PointCard"
import { GlobeIcon } from "../../assets/GlobeIcon/GlobeIcon"
import { demoStore, IDataAddition } from "../../store/demoStore"
import { observer } from "mobx-react"
import { selectRegular } from "../../utils/selectors"

const PointScreen: FunctionComponent<any> = () => {
  return (
    <Container>
      <HeaderComponent LeftIcon={GlobeIcon}>Point Locations </HeaderComponent>
      <SystemContent fill>
        <ScrollView>
          <SystemSpace size={selectRegular} />
          <SystemText center={true}>
            ! Currently storing points locally.{"\n"} Maximum of 5 locations.
          </SystemText>
          <SystemSpace size={selectRegular} />

          {demoStore.savedPoints &&
            demoStore.savedPoints.map((el: IDataAddition, i: number) => {
              return <PointCard item={el} key={i} />
            })}
        </ScrollView>
      </SystemContent>
    </Container>
  )
}

export const PoweredPointScreen = observer(PointScreen)
