import React, { FunctionComponent } from "react"
import { HeaderComponent } from "../../components/HeaderComponent"
import { Container } from "native-base"
import {
  SystemContent,
  SystemSpace,
  SystemButtonLarge,
  SystemFlex,
  SystemText
} from "../../system-components"
import { theme } from "../../system-components/system-theme/theme"
import { observer } from "mobx-react"
import TextInputComponent from "../../components/InputComponent"
import NumericInputComponent from "../../components/NumericInputComponent"
import CategorySelector from "../../components/CategorySelector/CategorySelector"
import BinarySelector from "../../components/BinarySelector/BinarySelector"
import {
  selectBlack,
  selectPrimary,
  selectWhite,
  selectBig,
  selectMedium,
  selectRegular
} from "../../utils/selectors"
import { demoStore } from "../../store/demoStore"
import { roundCoordinates } from "../../utils/roundCoordinates"
import { LoadingScreen } from "../LoadingScreen/LoadingScreen"

export const Coordinates: React.FC<{
  coordinates: { lat: number; lng: number }
}> = ({ coordinates }) => {
  return (
    <SystemFlex noFlex>
      <SystemFlex row noFlex>
        <SystemSpace size={selectBig} h />
        <SystemFlex row justify="space-between">
          <SystemText>latitude:</SystemText>
          <SystemText>{roundCoordinates(coordinates.lat)}</SystemText>
        </SystemFlex>
        <SystemSpace size={selectBig} h />
      </SystemFlex>
      <SystemFlex row noFlex>
        <SystemSpace size={selectBig} h />
        <SystemFlex row justify="space-between">
          <SystemText>longitude:</SystemText>
          <SystemText>{roundCoordinates(coordinates.lng)}</SystemText>
        </SystemFlex>
        <SystemSpace size={selectBig} h />
      </SystemFlex>
    </SystemFlex>
  )
}

const SetParametersScreen: FunctionComponent = () => {
  if (demoStore.isLoading) {
    return <LoadingScreen />
  } else {
    return (
      <Container>
        <HeaderComponent>Save location</HeaderComponent>
        <SystemContent>
          <SystemSpace size={selectRegular} />
          <Coordinates coordinates={demoStore.coordinates} />
          <SystemFlex align="center">
            <SystemSpace size={selectRegular} />
            <TextInputComponent
              value={demoStore.pointName}
              label="Give your point a name."
              autoFocus={false}
              handleChange={demoStore.handleNameChange}
            />
            <SystemSpace size={selectMedium} />
            <NumericInputComponent
              units="tons of coffee per hectare"
              label="Your current yield"
              autoFocus={false}
              value={demoStore.userCurrentYield}
              handleChange={demoStore.handleYieldChange}
            />
            <SystemSpace size={selectMedium} />
            <CategorySelector
              title="What is your shade level?"
              levels={["none", "low", "medium", "high"]}
              handleChange={demoStore.handleShadeChange}
              factorLevel={demoStore.shadeLevel}
              prevFactorLevel={demoStore.prevShadeLevel}
            />
            <SystemSpace size={selectMedium} />
            <CategorySelector
              title="What is your slope incline?"
              levels={["flat", "slight", "gradual", "steep"]}
              handleChange={demoStore.handleSlopeChange}
              factorLevel={demoStore.slopeLevel}
              prevFactorLevel={demoStore.prevSlopeLevel}
            />
            <SystemSpace size={selectMedium} />
            <BinarySelector
              title="Is your site irrigated?"
              value={demoStore.irrigation}
              handleChange={demoStore.handleIrrigationChange}
            />

            <SystemButtonLarge
              isDisabled={!demoStore.isFormFilled}
              colorBorder={selectPrimary({ theme })}
              color={selectWhite({ theme })}
              textColor={selectBlack({ theme })}
              onPress={demoStore.handleSaveData}
            >
              Save point
            </SystemButtonLarge>
            <SystemSpace size={selectMedium} />
          </SystemFlex>
        </SystemContent>
      </Container>
    )
  }
}

export const PoweredSetParametersScreen = observer(SetParametersScreen)
