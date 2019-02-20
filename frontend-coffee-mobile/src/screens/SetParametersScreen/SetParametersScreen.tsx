import React, { FunctionComponent } from "react"
import { HeaderComponent } from "../../components/HeaderComponent"
import { Container } from "native-base"
import { SystemContent, SystemSpace } from "../../system-components"
import { REGULAR, MEDIUM } from "../../system-components/system-theme/theme"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../../types"
import { compose, mapProps } from "recompose"
import { observer } from "mobx-react"
import { TextInputComponent } from "../../components/InputComponent"
import { SelectedLocation } from "./components.ts/SelectedLocation/SelectedLocation"
import { ParametersStore } from "./ParametersStore"
import { NumericInputComponent } from "../../components/NumericInputComponent"
import { CategorySelector } from "../../components/CategorySelector/CategorySelector"

const SetParametersScreen: FunctionComponent<{ store: ParametersStore }> = ({
  store
}) => {
  const {
    point,
    pointName,
    userCurrentYield,
    shadeLevel,
    prevShadeLevel,
    handleNameChange,
    handleYieldChange,
    handleShadeChange
  } = store
  return (
    <Container>
      <HeaderComponent>Set Parameters</HeaderComponent>
      <SystemContent>
        <SystemSpace size={REGULAR} />
        <SelectedLocation point={point} />
        <SystemSpace size={MEDIUM} />
        <TextInputComponent
          label="Enter point Name"
          value={pointName}
          autoFocus={false}
          onChangeText={handleNameChange}
        />
        <SystemSpace size={MEDIUM} />
        <NumericInputComponent
          label="Your current yield"
          value={userCurrentYield}
          autoFocus={false}
          onChangeText={handleYieldChange}
        />
        <SystemSpace size={MEDIUM} />
        <CategorySelector
          title="Your shade level"
          prevShadeLevel={prevShadeLevel}
          shadeLevel={shadeLevel}
          handleShadeChange={handleShadeChange}
        />
        <SystemSpace size={MEDIUM} />
        <CategorySelector
          title="Your slope level"
          prevShadeLevel={prevShadeLevel}
          shadeLevel={shadeLevel}
          handleShadeChange={handleShadeChange}
        />
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
