import React from "react"
import { Image, TouchableOpacity } from "react-native"
import { SystemFlex } from "../SystemFlex"
import { SystemSpace } from "../SystemSpace"
import { ATOMIC } from "../system-theme/theme"

export const SystemIconToggle = ({
  showEdit,
  handleFocus,
  clearInput
}: any) => (
  <SystemFlex justify="flex-end" noFlex>
    <SystemFlex justify="flex-end">
      {showEdit && (
        <TouchableOpacity onPress={handleFocus}>
          <Image source={require("../../assets/edit-text.png")} />
        </TouchableOpacity>
      )}
      {!showEdit && (
        <TouchableOpacity onPress={clearInput}>
          <Image source={require("../../assets/clear-text.png")} />
        </TouchableOpacity>
      )}
      <SystemSpace size={ATOMIC} />
    </SystemFlex>
  </SystemFlex>
)
