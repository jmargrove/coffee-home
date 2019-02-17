import React, { FunctionComponent } from "react"
import { HeaderComponent } from "../../components/HeaderComponent"
import { Container } from "native-base"
import { SystemContent, SystemSpace } from "../../system-components"
import { REGULAR } from "../../system-components/system-theme/theme"
import { withNavigation } from "react-navigation"
import { NavigationProps } from "../../types"
import { compose, mapProps } from "recompose"
import { observer } from "mobx-react"
import { TextInputComponent } from "../../components/InputComponent"
import { SelectedLocation } from "./components.ts/SelectedLocation/SelectedLocation"
import { ParametersStore } from "./ParametersStore"

const SetParametersScreen: FunctionComponent<{ store: ParametersStore }> = ({
  store
}) => {
  const { point, pointName, handleNameChange } = store
  return (
    <Container>
      <HeaderComponent>Set Parameters</HeaderComponent>
      <SystemContent fill>
        <SystemSpace size={REGULAR} />
        <SelectedLocation point={point} />
        <SystemSpace size={REGULAR} />

        <SystemSpace size={REGULAR} />
        <TextInputComponent
          label="Enter point Name"
          value={pointName}
          autoFocus={false}
          onChangeText={handleNameChange}
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
