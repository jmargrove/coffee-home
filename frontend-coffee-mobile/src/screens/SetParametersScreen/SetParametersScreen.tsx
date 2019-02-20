import React, { FunctionComponent } from "react"
import { HeaderComponent } from "../../components/HeaderComponent"
import { Container } from "native-base"
import { SystemContent, SystemSpace } from "../../system-components"
import { REGULAR, MEDIUM } from "../../system-components/system-theme/theme"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../../types"
import { compose, mapProps, withProps } from "recompose"
import { observer } from "mobx-react"
import {
  TextInputComponent,
  TextInputWithStore
} from "../../components/InputComponent"
import { SelectedLocation } from "./components.ts/SelectedLocation/SelectedLocation"
import { ParametersStore } from "./ParametersStore"
import {
  NumericInputComponent,
  NumericInputWithStore
} from "../../components/NumericInputComponent"
import { CategorySelector } from "../../components/CategorySelector/CategorySelector"
import { TouchableOpacity, View } from "react-native"

const SetParametersScreen: FunctionComponent<{ store: ParametersStore }> = ({
  store
}) => {
  const {
    point,
    shadeLevel,
    prevShadeLevel,
    handleNameChange,
    handleYieldChange,
    handleShadeChange,
    handleSlopeChange,
    slopeLevel,
    prevSlopeLevel,
    handleSend
  } = store

  return (
    <Container>
      <HeaderComponent>Set Parameters</HeaderComponent>
      <SystemContent>
        <SystemSpace size={REGULAR} />
        <SelectedLocation point={point} />
        <SystemSpace size={MEDIUM} />
        <TextInputWithStore
          label="Enter point Name"
          autoFocus={false}
          retrieve={handleNameChange}
        />
        <SystemSpace size={MEDIUM} />
        <NumericInputWithStore
          label="Your current yield"
          autoFocus={false}
          retrieve={handleYieldChange}
        />
        <SystemSpace size={MEDIUM} />
        <CategorySelector
          title="Your shade level"
          levels={["none", "low", "medium", "high"]}
          prevFactorLevel={prevShadeLevel}
          factorLevel={shadeLevel}
          handleFactorChange={handleShadeChange}
        />
        <SystemSpace size={MEDIUM} />
        <CategorySelector
          title="Your slope level"
          levels={["flat", "slight", "gradual", "steep"]}
          prevFactorLevel={prevSlopeLevel}
          factorLevel={slopeLevel}
          handleFactorChange={handleSlopeChange}
        />
        <SystemSpace size={MEDIUM} />
        <TouchableOpacity onPress={handleSend}>
          <View style={{ width: 100, height: 20, backgroundColor: "blue" }} />
        </TouchableOpacity>
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
