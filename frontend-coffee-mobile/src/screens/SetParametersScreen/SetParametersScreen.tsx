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
import {
  REGULAR,
  MEDIUM,
  theme,
  SMALL,
  LARGE,
  BIG
} from "../../system-components/system-theme/theme"
import { observer } from "mobx-react"
import TextInputComponent from "../../components/InputComponent"
import NumericInputComponent from "../../components/NumericInputComponent"
import CategorySelector from "../../components/CategorySelector/CategorySelector"
import BinarySelector from "../../components/BinarySelector/BinarySelector"
import { LoadingScreen } from "../"
import { selectBlack, selectPrimary, selectWhite } from "../../utils/selectors"
import { demoStore } from "../../store/demoStore"
import { roundCoordinates } from "../../utils/roundCoordinates"

const SetParametersScreen: FunctionComponent = () => {
  if (demoStore.isLoading) {
    return <LoadingScreen />
  } else {
    return (
      <Container>
        <HeaderComponent>Save location</HeaderComponent>
        <SystemContent>
          <SystemSpace size={REGULAR} />
          <SystemFlex noFlex>
            <SystemFlex row noFlex>
              <SystemSpace size={BIG} h />
              <SystemFlex row justify="space-between">
                <SystemText>latitude:</SystemText>
                <SystemText>
                  {roundCoordinates(demoStore.coordinates.lat)}
                </SystemText>
              </SystemFlex>
              <SystemSpace size={BIG} h />
            </SystemFlex>
            <SystemFlex row noFlex>
              <SystemSpace size={BIG} h />
              <SystemFlex row justify="space-between">
                <SystemText>longitude:</SystemText>
                <SystemText>
                  {roundCoordinates(demoStore.coordinates.lng)}
                </SystemText>
              </SystemFlex>
              <SystemSpace size={BIG} h />
            </SystemFlex>
          </SystemFlex>
          <SystemFlex align="center">
            <SystemSpace size={REGULAR} />
            <TextInputComponent
              value={demoStore.pointName}
              label="Enter point Name"
              autoFocus={false}
              handleChange={demoStore.handleNameChange}
            />
            <SystemSpace size={MEDIUM} />
            <NumericInputComponent
              units="tones of coffee per hectar"
              label="Your current yield"
              autoFocus={false}
              value={demoStore.userCurrentYield}
              handleChange={demoStore.handleYieldChange}
            />
            <SystemSpace size={MEDIUM} />
            <CategorySelector
              title="What is your shade level"
              levels={["none", "low", "medium", "high"]}
              handleChange={demoStore.handleShadeChange}
              factorLevel={demoStore.shadeLevel}
              prevFactorLevel={demoStore.prevShadeLevel}
            />
            <SystemSpace size={MEDIUM} />
            <CategorySelector
              title="What is your slope incline?"
              levels={["flat", "slight", "gradual", "steep"]}
              handleChange={demoStore.handleSlopeChange}
              factorLevel={demoStore.slopeLevel}
              prevFactorLevel={demoStore.prevSlopeLevel}
            />
            <SystemSpace size={MEDIUM} />
            <BinarySelector
              title="Is your site irrigated?"
              value={demoStore.irrigation}
              handleChange={demoStore.handleIrrigationChange}
            />

            <SystemButtonLarge
              isDisabled={demoStore.isFormFilled}
              colorBorder={selectPrimary({ theme })}
              color={selectWhite({ theme })}
              textColor={selectBlack({ theme })}
              onPress={demoStore.handleSaveData}
            >
              Save point
            </SystemButtonLarge>
            <SystemSpace size={MEDIUM} />
          </SystemFlex>
        </SystemContent>
      </Container>
    )
  }
}

export const PoweredSetParametersScreen = observer(SetParametersScreen)
