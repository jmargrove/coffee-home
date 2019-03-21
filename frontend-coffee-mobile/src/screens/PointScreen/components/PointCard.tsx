import React, { Component } from "react"
import { SystemFlex, SystemText, SystemSpace } from "../../../system-components"
import { View, Alert } from "react-native"
import styled from "../../../system-components/system-theme/styled-components"
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
import { SecondaryText } from "./SecondaryText"
import { LocationCard } from "./LocationCard"
import { PointInformationCard } from "./PointInformationCard"
import { ModelOptionsCard } from "./ModelOptions"
import { PointOptions } from "./PointOptions"
import { MODEL_RESULTS_SCREEN, YIELD, OPTIMIZE } from "../../../utils/constants"
import NavigationServices from "../../../utils/NavigationServices"
import { demoStore, IDataAddition } from "../../../store/demoStore"

const PointCardContainer = styled(View)`
  width: 100%;
  background-color: ${selectLightGrey};
`

export class PointCard extends Component<
  { item: IDataAddition },
  {
    primaryActive: boolean
    locationActive: boolean
    pointInformationActive: boolean
    pointOptionsActive: boolean
    modelOptionsActive: boolean
  }
> {
  constructor(props: { item: IDataAddition }) {
    super(props)
    this.state = {
      primaryActive: false,
      locationActive: false,
      pointInformationActive: false,
      modelOptionsActive: false,
      pointOptionsActive: false
    }
  }

  handleModelOptionsFalse = () => {
    this.setState({ modelOptionsActive: false })
  }

  handleModelOptionsTrue = () => {
    this.setState({
      pointOptionsActive: false,
      locationActive: false,
      modelOptionsActive: true,
      pointInformationActive: false
    })
  }

  handlePointOptionsFalse = () => {
    this.setState({
      pointOptionsActive: false
    })
  }

  handlePointOptionsTrue = () => {
    this.setState({
      pointOptionsActive: true,
      locationActive: false,
      modelOptionsActive: false,
      pointInformationActive: false
    })
  }

  handleLocationTrue = () => {
    this.setState({
      pointOptionsActive: false,
      locationActive: true,
      modelOptionsActive: false,
      pointInformationActive: false
    })
  }

  handlePointInformationFalse = () => {
    this.setState({ pointInformationActive: false })
  }

  handlePointInformationTrue = () => {
    this.setState({
      pointOptionsActive: false,
      locationActive: false,
      modelOptionsActive: false,
      pointInformationActive: true
    })
  }

  handleLocationFalse = () => {
    this.setState({ locationActive: false })
  }

  handlePrimaryActiveTrue = () => {
    this.setState({ primaryActive: true })
  }

  handlePrimaryActiveFalse = () => {
    this.setState({
      primaryActive: false,
      pointOptionsActive: false,
      locationActive: false,
      modelOptionsActive: false,
      pointInformationActive: false
    })
  }

  handleCalculateYield = () => {
    Alert.alert(
      "Calculate yield estimate",
      "Would you like a yeild estimate for this location",
      [
        {
          text: "Yes",
          onPress: () =>
            NavigationServices.navigate(MODEL_RESULTS_SCREEN, {
              type: YIELD,
              point: this.props.item
            })
        },
        { text: "No", style: "cancel" }
      ]
    )
  }

  handleOptimizeShade = () => {
    Alert.alert(
      "Shade optimization estimate",
      "Retreive shade optimization estimate for this location",
      [
        {
          text: "Yes",
          onPress: () =>
            NavigationServices.navigate(MODEL_RESULTS_SCREEN, {
              type: OPTIMIZE,
              point: this.props.item
            })
        },
        { text: "No", style: "cancel" }
      ]
    )
  }

  render() {
    const {
      primaryActive,
      locationActive,
      pointInformationActive,
      modelOptionsActive,
      pointOptionsActive
    } = this.state
    const {
      handlePrimaryActiveFalse,
      handlePrimaryActiveTrue,
      handleLocationFalse,
      handleLocationTrue,
      handlePointInformationFalse,
      handlePointInformationTrue,
      handleModelOptionsFalse,
      handleModelOptionsTrue,
      handlePointOptionsFalse,
      handlePointOptionsTrue,
      handleCalculateYield,
      handleOptimizeShade
    } = this

    const { item } = this.props

    return (
      <SystemFlex>
        <SystemSpace size={REGULAR} />
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
                <ArrowUpPrimary onPress={handlePrimaryActiveFalse} />
              ) : (
                <ArrowDownBlack onPress={handlePrimaryActiveTrue} />
              )}

              <SystemSpace size={MEDIUM} />
            </SystemFlex>
          </SystemFlex>

          {primaryActive && (
            <SystemFlex noFlex>
              <SystemSpace size={SMALL} />
              <SystemFlex row>
                <SystemSpace size={MEDIUM} />

                <SystemFlex color={selectWhite}>
                  <SecondaryText
                    label={"Location"}
                    handleOpen={handleLocationTrue}
                    handleClose={handleLocationFalse}
                    open={locationActive}
                  >
                    <LocationCard lat={item.lat} lng={item.lng} />
                  </SecondaryText>
                  <SecondaryText
                    label={"Point information"}
                    handleOpen={handlePointInformationTrue}
                    handleClose={handlePointInformationFalse}
                    open={pointInformationActive}
                  >
                    <PointInformationCard
                      pointYield={item.userCurrentYield.toString()}
                      pointShade={item.userShadeValue.toString()}
                      pointIrrigated={!!item.userIrrValue}
                      pointSlope={item.userSlopeValue.toString()}
                    />
                  </SecondaryText>
                  <SecondaryText
                    label={"Model options"}
                    handleOpen={handleModelOptionsTrue}
                    handleClose={handleModelOptionsFalse}
                    open={modelOptionsActive}
                  >
                    <ModelOptionsCard
                      handleCalculateYield={handleCalculateYield}
                      handleOptimizeShade={handleOptimizeShade}
                    />
                  </SecondaryText>
                  <SecondaryText
                    label={"Point options"}
                    handleOpen={handlePointOptionsTrue}
                    handleClose={handlePointOptionsFalse}
                    open={pointOptionsActive}
                  >
                    <PointOptions
                      handleDeletePoint={() =>
                        demoStore.handleDeletePoint(item)
                      }
                    />
                  </SecondaryText>
                </SystemFlex>

                <SystemSpace size={MEDIUM} />
              </SystemFlex>
            </SystemFlex>
          )}

          <SystemSpace size={REGULAR} />
        </PointCardContainer>
        <SystemSpace size={REGULAR} />
      </SystemFlex>
    )
  }
}
