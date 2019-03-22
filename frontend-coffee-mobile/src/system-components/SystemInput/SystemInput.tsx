import React, { FunctionComponent } from "react"
import { TextInput, Platform } from "react-native"
import { powerSystemInput } from "./powerSystemInput"
import styled from "../system-theme/styled-components"
import { SystemFlex } from "../SystemFlex"
import { SystemText } from "../SystemText"
import { SystemSpace } from "../SystemSpace"
import {
  selectMediumGrey,
  selectRegular,
  selectTextBig,
  selectSmall
} from "../../utils/selectors"

const StyledInput = styled(
  React.forwardRef((props: any, ref: any) => {
    return <TextInput ref={ref} {...props} />
  })
)<any>`
  flex: 1;
  ${({ height, multiline }: any) => multiline && `height: ${height}`};
  font-size: ${selectTextBig};
  padding-top: ${Platform.select({ ios: 4, android: 0 })};
  padding-bottom: ${Platform.select({ ios: 4, android: 0 })};
`

const SystemInput: FunctionComponent<any> = ({
  loading,
  IconToggle,
  hangoutId,
  store,
  units,
  keyboardType,
  textSize,
  ...rest
}) => {
  const { ref, handleFocus, handleEndEditing, isEditing, clearInput } = store
  return (
    <SystemFlex row align="center" noFlex>
      <StyledInput
        keyboardType={keyboardType}
        returnKeyType="done"
        underlineColorAndroid="transparent"
        {...rest}
        ref={ref}
        onFocus={handleFocus}
        onEndEditing={handleEndEditing}
      />

      {keyboardType === "numeric" && (
        <>
          <SystemText color={selectMediumGrey} size={textSize}>
            {units}
          </SystemText>
          <SystemSpace size={selectSmall} />
        </>
      )}

      {IconToggle && (
        <IconToggle
          hangoutId={hangoutId}
          showEdit={isEditing}
          handleFocus={handleFocus}
          clearInput={clearInput}
        />
      )}
    </SystemFlex>
  )
}

export const PoweredSystemInput: any = powerSystemInput(SystemInput)
