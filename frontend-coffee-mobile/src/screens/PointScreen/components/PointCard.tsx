import React, { FunctionComponent } from "react"
import { SystemFlex, SystemText, SystemSpace } from "../../../system-components"
import { View, TouchableOpacity } from "react-native"
import styled from "../../../system-components/system-theme/styled-components"
import { compose, withProps } from "recompose"
import { selectLightGrey, selectWhite } from "../../../utils/selectors"
import {
  MEDIUM,
  REGULAR,
  theme,
  SMALL
} from "../../../system-components/system-theme/theme"
import { ArrowDownBlack, ArrowUpPrimary } from "../../../assets"
import { observable, action } from "mobx"
import { observer } from "mobx-react"
import { PoweredSecondaryText } from "./SecondaryText"

const PointCardContainer = styled(View)`
  width: 100%;
  background-color: ${selectLightGrey};
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

class PointCardState {
  @observable
  primaryActive = false

  @action
  handlePrimaryActiveTrue = () => {
    this.primaryActive = true
  }

  @action
  handlePrimaryActiveFalse = () => {
    this.primaryActive = false
  }
}

const power = compose<any, any>(
  withProps({
    state: new PointCardState()
  }),
  observer
)

const PointCard: FunctionComponent<{
  item: IDataAddition
  state: PointCardState
}> = ({ item, state }) => {
  const {
    handlePrimaryActiveFalse,
    handlePrimaryActiveTrue,
    primaryActive
  } = state
  return (
    <PointCardContainer>
      <SystemSpace size={REGULAR} />
      <SystemFlex row={true} align="center" justify="space-between">
        <SystemFlex noFlex row>
          <SystemSpace size={MEDIUM} />
          <SystemText blackItalic={true} size={24}>
            {item.pointName}
          </SystemText>
        </SystemFlex>

        <SystemFlex noFlex row align="center">
          {primaryActive ? (
            <TouchableOpacity onPress={handlePrimaryActiveFalse}>
              <ArrowUpPrimary />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handlePrimaryActiveTrue}>
              <ArrowDownBlack />
            </TouchableOpacity>
          )}

          <SystemSpace size={MEDIUM} />
        </SystemFlex>
      </SystemFlex>

      {primaryActive && (
        <>
          <SystemSpace size={SMALL} />
          <SystemFlex row>
            <SystemSpace size={MEDIUM} />
            <SystemFlex color={selectWhite({ theme })}>
              <PoweredSecondaryText label="Location" key={1} />
              <PoweredSecondaryText label="Point information" key={2} />
              <PoweredSecondaryText label="Model options" key={3} />
              <PoweredSecondaryText label="Point options" key={4} />
            </SystemFlex>
            <SystemSpace size={MEDIUM} />
          </SystemFlex>
        </>
      )}

      <SystemSpace size={REGULAR} />
    </PointCardContainer>
  )
}

export const PoweredPointCard = power(PointCard)
