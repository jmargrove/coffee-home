import React, { FunctionComponent, ReactNode } from "react"
import { SystemText, SystemFlex, SystemSpace } from "../../system-components"
import styled from "styled-components"
import { View, TouchableOpacity } from "react-native"
import { REGULAR, BLACK } from "../../system-components/system-theme/theme"
import { compose, shouldUpdate } from "recompose"
import { IconCross } from "../../assets/IconCross/IconCross"
import { IconTick } from "../../assets/IconTick/IconTick"
import { SelectionGlowAnimated } from "../CategorySelector/components/SelectionGlowAnimated"

const CategorySelectionContainer = styled(View)<any>`
  height: 100
  width: 100%;
`

const FlexEqual = styled(View)<{ flex?: boolean; children: ReactNode }>`
  ${({ flex }) => (flex ? `flex: ${flex}` : `flex: 1`)}
  justify-content: flex-end;
  align-items: center;
`

interface IBinarySelectorProps {
  title: string
  handleChange: any
  value: boolean
}

const BinarySelector: FunctionComponent<IBinarySelectorProps> = ({
  title,
  handleChange,
  value
}) => {
  return (
    <>
      <SystemFlex noFlex row>
        <SystemSpace size={REGULAR} />
        <SystemFlex>
          <SystemText color={BLACK}>{title}</SystemText>
          <SystemFlex justify="flex-end">
            <CategorySelectionContainer>
              <SystemFlex row>
                <FlexEqual>
                  <SystemFlex justify="center" align="center">
                    <SelectionGlowAnimated
                      label={false}
                      factorLevel={value}
                      prevFactorLevel={!value}
                    >
                      <SystemFlex justify="center" align="center">
                        <TouchableOpacity onPress={handleChange}>
                          <IconCross />
                        </TouchableOpacity>
                      </SystemFlex>
                    </SelectionGlowAnimated>
                  </SystemFlex>
                </FlexEqual>
                <FlexEqual>
                  <SystemFlex justify="center" align="center">
                    <SelectionGlowAnimated
                      label={true}
                      factorLevel={value}
                      prevFactorLevel={!value}
                    >
                      <SystemFlex justify="center" align="center">
                        <TouchableOpacity onPress={handleChange}>
                          <IconTick />
                        </TouchableOpacity>
                      </SystemFlex>
                    </SelectionGlowAnimated>
                  </SystemFlex>
                </FlexEqual>
              </SystemFlex>
            </CategorySelectionContainer>
          </SystemFlex>
        </SystemFlex>
        <SystemSpace size={REGULAR} />
      </SystemFlex>
    </>
  )
}

const power = compose<IBinarySelectorProps, IBinarySelectorProps>(
  shouldUpdate(
    (props: IBinarySelectorProps, prevProps: IBinarySelectorProps) => {
      if (props.value === prevProps.value) {
        return false
      } else {
        return true
      }
    }
  )
)

export default power(BinarySelector)
