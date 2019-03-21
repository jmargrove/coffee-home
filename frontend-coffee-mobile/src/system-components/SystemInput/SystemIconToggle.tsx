import React from "react"
import { Image } from "react-native"
import { SystemFlex } from "../SystemFlex"
import { SystemSpace } from "../SystemSpace"
import { ATOMIC } from "../system-theme/theme"
import { SystemTouch } from "../SystemTouch"

export const SystemIconToggle = ({
  showEdit,
  handleFocus,
  clearInput
}: any) => (
  <SystemFlex justify="flex-end" noFlex>
    <SystemFlex justify="flex-end">
      {showEdit && (
        <SystemTouch onPress={handleFocus}>
          <Image source={require("../../assets/edit-text.png")} />
        </SystemTouch>
      )}
      {!showEdit && (
        <SystemTouch onPress={clearInput}>
          <Image source={require("../../assets/clear-text.png")} />
        </SystemTouch>
      )}
      <SystemSpace size={ATOMIC} />
    </SystemFlex>
  </SystemFlex>
)
