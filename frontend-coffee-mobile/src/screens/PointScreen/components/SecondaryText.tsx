import React from "react"
import { SystemFlex, SystemText, SystemSpace } from "../../../system-components"
import { View } from "react-native"
import styled from "../../../system-components/system-theme/styled-components"
import {
  selectBlack,
  selectRegular,
  selectSmall,
  selectTextMedium
} from "../../../utils/selectors"
import { ArrowDownBlack, ArrowUpPrimary } from "../../../assets"

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
      <SystemSpace size={selectSmall} />
      <SystemFlex row justify="space-between" align="center">
        <SystemFlex noFlex row align="center" justify="center">
          <SystemSpace size={selectSmall} />
          <Bullet size={8} />
          <SystemSpace size={selectSmall} />

          <SystemText size={selectTextMedium}>{label}</SystemText>
        </SystemFlex>

        <SystemFlex noFlex row justify="center">
          {open ? (
            <ArrowUpPrimary onPress={handleClose} />
          ) : (
            <ArrowDownBlack onPress={handleOpen} />
          )}
          <SystemSpace size={selectRegular} />
        </SystemFlex>
      </SystemFlex>
      <SystemSpace size={selectSmall} />
      {open && children}
    </SystemFlex>
  )
}
