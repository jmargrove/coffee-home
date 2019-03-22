import React, { FunctionComponent, ReactNode } from "react"
import { SystemText, SystemFlex, SystemSpace } from "../../system-components"
import styled from "styled-components"
import { View } from "react-native"
import { compose, shouldUpdate } from "recompose"
import { IconCross } from "../../assets/IconCross/IconCross"
import { IconTick } from "../../assets/IconTick/IconTick"
import { SelectionGlowAnimated } from "../CategorySelector/components/SelectionGlowAnimated"
import { selectRegular } from "../../utils/selectors"

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
  value: boolean | undefined
}

const BinarySelector: FunctionComponent<IBinarySelectorProps> = ({
  title,
  handleChange,
  value
}) => {
  return (
    <>
      <SystemFlex noFlex row>
        <SystemSpace size={selectRegular} />
        <SystemFlex>
          <SystemText>{title}</SystemText>
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
                        <IconCross onPress={handleChange} />
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
                        <IconTick onPress={handleChange} />
                      </SystemFlex>
                    </SelectionGlowAnimated>
                  </SystemFlex>
                </FlexEqual>
              </SystemFlex>
            </CategorySelectionContainer>
          </SystemFlex>
        </SystemFlex>
        <SystemSpace size={selectRegular} />
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
