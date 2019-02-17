import React, { FunctionComponent } from "react"
import { TextInput } from "react-native"
import { powerSystemInput } from "./powerSystemInput"
import styled from "../system-theme/styled-components"
import { SystemFlex } from "../SystemFlex"

const StyledInput = styled(
  React.forwardRef((props: any, ref: any) => {
    return <TextInput ref={ref} {...props} />
  })
)<any>`
  flex: 1;
  height: ${({ theme, height, multiline }: any) => (multiline ? height : 24)};
  font-size: 24;
`

const SystemInput: FunctionComponent<any> = ({
  loading,
  IconToggle,
  hangoutId,
  store,
  ...rest
}) => {
  const { ref, handleFocus, handleEndEditing, isEditing, clearInput } = store
  return (
    <SystemFlex row align="center" noFlex>
      <StyledInput
        returnKeyType="done"
        underlineColorAndroid="transparent"
        {...rest}
        ref={ref}
        onFocus={handleFocus}
        onEndEditing={handleEndEditing}
      />

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
