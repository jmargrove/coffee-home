import React, { FunctionComponent } from "react"
import { SystemText, SystemFlex, SystemSpace } from "../../system-components"
import styled from "styled-components"
import { View } from "react-native"
import { REGULAR, BLACK } from "../../system-components/system-theme/theme"
import { AxisNode } from "./components/AxisNode"
import uuid from "uuid/v4"

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
  levels: string[]
  factorLevel: string
  prevFactorLevel: string
  handleFactorChange: (shade: string) => void
}> = ({ handleFactorChange, factorLevel, prevFactorLevel, title, levels }) => {
  return (
    <>
      <SystemFlex noFlex row>
        <SystemSpace size={REGULAR} />
        <SystemFlex>
          <SystemText color={BLACK}>{title}</SystemText>
          <SystemFlex justify="flex-end">
            <CategorySelectionContainer>
              <SystemFlex row>
                {levels.map((level, i) => {
                  return (
                    <FlexEqual key={`${i}_${level}_${uuid()}`}>
                      <AxisNode
                        left={i === 0 ? true : false}
                        right={i === levels.length - 1 ? true : false}
                        label={level}
                        handleFactorChange={handleFactorChange}
                        factorLevel={factorLevel}
                        prevFactorLevel={prevFactorLevel}
                      />
                    </FlexEqual>
                  )
                })}
              </SystemFlex>
            </CategorySelectionContainer>
          </SystemFlex>
        </SystemFlex>

        <SystemSpace size={REGULAR} />
      </SystemFlex>
    </>
  )
}
