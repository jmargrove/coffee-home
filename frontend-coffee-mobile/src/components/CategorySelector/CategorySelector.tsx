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
  title: string
  shadeLevel: string
  prevShadeLevel: string
  handleShadeChange: (shade: string) => void
}> = ({ handleShadeChange, shadeLevel, prevShadeLevel, title }) => {
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
                  <AxisNode
                    left={true}
                    label="none"
                    handleShadeChange={handleShadeChange}
                    shadeLevel={shadeLevel}
                    prevShadeLevel={prevShadeLevel}
                  />
                </FlexEqual>
                <FlexEqual>
                  <AxisNode
                    label="low"
                    handleShadeChange={handleShadeChange}
                    shadeLevel={shadeLevel}
                    prevShadeLevel={prevShadeLevel}
                  />
                </FlexEqual>
                <FlexEqual>
                  <AxisNode
                    label="medium"
                    handleShadeChange={handleShadeChange}
                    shadeLevel={shadeLevel}
                    prevShadeLevel={prevShadeLevel}
                  />
                </FlexEqual>
                <FlexEqual>
                  <AxisNode
                    right={true}
                    label="high"
                    handleShadeChange={handleShadeChange}
                    shadeLevel={shadeLevel}
                    prevShadeLevel={prevShadeLevel}
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
