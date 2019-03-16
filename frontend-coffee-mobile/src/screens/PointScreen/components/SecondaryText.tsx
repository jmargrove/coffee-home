import React, { FunctionComponent } from "react"
import { SystemFlex, SystemText, SystemSpace } from "../../../system-components"
import { View, TouchableOpacity } from "react-native"
import styled from "../../../system-components/system-theme/styled-components"
import { compose, withProps, shouldUpdate } from "recompose"
import {
  selectLightGrey,
  selectWhite,
  selectBlack
} from "../../../utils/selectors"
import { SMALL, REGULAR } from "../../../system-components/system-theme/theme"
import { ArrowDownBlack, ArrowUpPrimary } from "../../../assets"
import { observable, action } from "mobx"
import { observer } from "mobx-react"
import uuid from "uuid/v4"

export interface IDataAddition {
  lng: number
  lat: number
  userCurrentYield: number
  pointName: string
  userShadeValue: number
  userIrrValue: 1 | 0
  userSlopeValue: number
}

const Bullet = styled(View)<{ size: number }>`
  width: ${({ size }) => size && size};
  height: ${({ size }) => size && size};
  border-radius: ${({ size }) => size && size / 2};
  background-color: ${selectBlack};
`

export const SecondaryText: React.FC<{
  label: string
  state: SecondaryState
}> = ({ label, state }) => {
  const { handleSecondaryFalse, handleSecondaryTrue, secondaryOpen } = state
  return (
    <SystemFlex noFlex key={uuid()}>
      <SystemSpace size={SMALL} />
      <SystemFlex row justify="space-between" align="center">
        <SystemFlex noFlex row align="center" justify="center">
          <SystemSpace size={SMALL} />
          <Bullet size={8} />
          <SystemSpace size={SMALL} />
          <SystemText size={20}>{label}</SystemText>
        </SystemFlex>

        <SystemFlex noFlex row justify="center">
          {secondaryOpen ? (
            <TouchableOpacity onPress={handleSecondaryFalse} key={uuid()}>
              <ArrowUpPrimary />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleSecondaryTrue} key={uuid()}>
              <ArrowDownBlack />
            </TouchableOpacity>
          )}
          <SystemSpace size={REGULAR} />
        </SystemFlex>
      </SystemFlex>
      <SystemSpace size={SMALL} />
    </SystemFlex>
  )
}

class SecondaryState {
  @observable
  secondaryOpen = false

  @action
  handleSecondaryTrue = () => {
    this.secondaryOpen = true
  }

  @action
  handleSecondaryFalse = () => {
    this.secondaryOpen = false
  }
}

const power = compose<any, any>(
  withProps({
    state: new SecondaryState()
  }),
  shouldUpdate((props: any, prevProps: any) => {
    if (props.value === prevProps.value) {
      return false
    } else {
      return true
    }
  }),
  observer
)

export const PoweredSecondaryText = power(SecondaryText)
