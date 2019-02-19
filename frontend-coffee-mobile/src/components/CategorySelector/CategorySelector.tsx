import React, { FunctionComponent } from "react"
import { SystemText, SystemFlex, SystemSpace } from "../../system-components"
import styled from "styled-components"
import { View } from "react-native"
import { REGULAR, BLACK } from "../../system-components/system-theme/theme"
import { AxisNode } from "./components/AxisNode"

const CategorySelectionContainer = styled(View)<any>`
  height: 100
  width: 100%;
`

const FlexEqual = styled(View)<any>`
  ${({ flex }) => (flex ? `flex: ${flex}` : `flex: 1`)}
  justify-content: flex-end;
  align-items: center;
`

export const CategorySelector: FunctionComponent<{
  shadeLevel: string
  handleShadeChange: (shade: string) => void
}> = ({ handleShadeChange, shadeLevel }) => {
  return (
    <>
      <SystemFlex noFlex row>
        <SystemSpace size={REGULAR} />
        <SystemFlex>
          <SystemText color={BLACK}>Your shade level</SystemText>
          <SystemFlex justify="flex-end">
            <CategorySelectionContainer>
              <SystemFlex row>
                <FlexEqual>
                  <AxisNode
                    key="1232"
                    left={true}
                    label="none"
                    handleShadeChange={handleShadeChange}
                    shadeLevel={shadeLevel}
                  />
                </FlexEqual>
                <FlexEqual>
                  <AxisNode
                    key="234"
                    label="low"
                    handleShadeChange={handleShadeChange}
                    shadeLevel={shadeLevel}
                  />
                </FlexEqual>
                <FlexEqual>
                  <AxisNode
                    key="123"
                    label="medium"
                    handleShadeChange={handleShadeChange}
                    shadeLevel={shadeLevel}
                  />
                </FlexEqual>
                <FlexEqual>
                  <AxisNode
                    right={true}
                    label="high"
                    handleShadeChange={handleShadeChange}
                    shadeLevel={shadeLevel}
                  />
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
