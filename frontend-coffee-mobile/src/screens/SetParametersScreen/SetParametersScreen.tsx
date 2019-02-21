import React, { FunctionComponent } from "react"
import { HeaderComponent } from "../../components/HeaderComponent"
import { Container } from "native-base"
import {
  SystemContent,
  SystemSpace,
  SystemButtonLarge,
  SystemFlex
} from "../../system-components"
import {
  REGULAR,
  MEDIUM,
  PRIMARY,
  WHITE,
  BLACK
} from "../../system-components/system-theme/theme"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../../types"
import { compose, mapProps } from "recompose"
import { observer } from "mobx-react"
import TextInputComponent from "../../components/InputComponent"
import { SelectedLocation } from "./components.ts/SelectedLocation/SelectedLocation"
import { ParametersStore } from "./ParametersStore"
import NumericInputComponent from "../../components/NumericInputComponent"
import CategorySelector from "../../components/CategorySelector/CategorySelector"
import BinarySelector from "../../components/BinarySelector/BinarySelector"

const SetParametersScreen: FunctionComponent<{
  store: ParametersStore
}> = ({ store }) => {
  const {
    point,
    handleNameChange,
    handleYieldChange,
    handleShadeChange,
    handleSlopeChange,
    handleIrrigationChange,
    handleSend,
    pointName,
    userCurrentYield,
    shadeLevel,
    prevShadeLevel,
    slopeLevel,
    prevSlopeLevel,
    irrigation,
    isFormFilled
  } = store
  return (
    <Container>
      <HeaderComponent>Set Parameters</HeaderComponent>
      <SystemContent>
        <SystemFlex align="center">
          <SystemSpace size={REGULAR} />
          <SelectedLocation point={point} />
          <SystemSpace size={MEDIUM} />
          <TextInputComponent
            value={pointName}
            label="Enter point Name"
            autoFocus={false}
            handleChange={handleNameChange}
          />
          <SystemSpace size={MEDIUM} />
          <NumericInputComponent
            units="tones of coffee per hectar"
            label="Your current yield"
            autoFocus={false}
            value={userCurrentYield}
            handleChange={handleYieldChange}
          />
          <SystemSpace size={MEDIUM} />
          <CategorySelector
            title="Your shade level"
            levels={["none", "low", "medium", "high"]}
            handleChange={handleShadeChange}
            factorLevel={shadeLevel}
            prevFactorLevel={prevShadeLevel}
          />
          <SystemSpace size={MEDIUM} />
          <CategorySelector
            title="Your slope level"
            levels={["flat", "slight", "gradual", "steep"]}
            handleChange={handleSlopeChange}
            factorLevel={slopeLevel}
            prevFactorLevel={prevSlopeLevel}
          />
          <SystemSpace size={MEDIUM} />
          <BinarySelector
            title="Is your site irrigated?"
            value={irrigation}
            handleChange={handleIrrigationChange}
          />

          <SystemButtonLarge
            isDisabled={!isFormFilled}
            colorBorder={PRIMARY}
            color={WHITE}
            textColor={BLACK}
            onPress={handleSend}
          >
            Model
          </SystemButtonLarge>
          <SystemSpace size={MEDIUM} />
        </SystemFlex>
      </SystemContent>
    </Container>
  )
}

const power = compose<any, any>(
  withNavigation,
  mapProps(({ navigation }: NavigationProps) => ({
    store: new ParametersStore({ point: navigation.getParam("point") })
  })),
  observer
)

export const PoweredSetParametersScreen = power(SetParametersScreen)
