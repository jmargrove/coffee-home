import React, { Component } from "react"
import { SystemFlex, SystemText, SystemSpace } from "../../../system-components"
import { View, TouchableOpacity } from "react-native"
import styled from "../../../system-components/system-theme/styled-components"
import { selectBlack } from "../../../utils/selectors"
import { SMALL, REGULAR } from "../../../system-components/system-theme/theme"
import { ArrowDownBlack, ArrowUpPrimary } from "../../../assets"

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
  handleOpen: () => void
  handleClose: () => void
  open: boolean
}> = ({ label, handleOpen, handleClose, open, children }) => {
  return (
    <SystemFlex>
      <SystemSpace size={SMALL} />
      <SystemFlex row justify="space-between" align="center">
        <SystemFlex noFlex row align="center" justify="center">
          <SystemSpace size={SMALL} />
          <Bullet size={8} />
          <SystemSpace size={SMALL} />

          <SystemText size={20}>{label}</SystemText>
        </SystemFlex>

        <SystemFlex noFlex row justify="center">
          {open ? (
            <TouchableOpacity onPress={handleClose}>
              <ArrowUpPrimary />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleOpen}>
              <ArrowDownBlack />
            </TouchableOpacity>
          )}
          <SystemSpace size={REGULAR} />
        </SystemFlex>
      </SystemFlex>
      <SystemSpace size={SMALL} />
      {open && children}
    </SystemFlex>
  )
}
