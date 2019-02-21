import React, { FunctionComponent, ReactNode } from "react"
import { SystemText, SystemFlex, SystemSpace } from "../../system-components"
import styled from "styled-components"
import { View } from "react-native"
import { REGULAR, BLACK } from "../../system-components/system-theme/theme"
import { AxisNode } from "./components/AxisNode"
import uuid from "uuid/v4"
import { observable, action } from "mobx"
import { compose, shouldUpdate } from "recompose"
import { observer } from "mobx-react"

const CategorySelectionContainer = styled(View)<any>`
  height: 100
  width: 100%;
`

const FlexEqual = styled(View)<{ flex?: boolean; children: ReactNode }>`
  ${({ flex }) => (flex ? `flex: ${flex}` : `flex: 1`)}
  justify-content: flex-end;
  align-items: center;
`
interface ICategorySelectorProps {
  title: string
  levels: string[]
  handleChange: any
  prevFactorLevel: string
  factorLevel: string
}
const CategorySelector: FunctionComponent<ICategorySelectorProps> = ({
  title,
  levels,
  factorLevel,
  prevFactorLevel,
  handleChange
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
                {levels.map((level, i) => {
                  return (
                    <FlexEqual key={`${i}_${level}_${uuid()}`}>
                      <AxisNode
                        left={i === 0 ? true : false}
                        right={i === levels.length - 1 ? true : false}
                        label={level}
                        handleFactorChange={handleChange}
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

const power = compose<ICategorySelectorProps, ICategorySelectorProps>(
  shouldUpdate(
    (props: ICategorySelectorProps, nextProps: ICategorySelectorProps) => {
      if (props.factorLevel === nextProps.factorLevel) {
        return false
      } else {
        return true
      }
    }
  )
)

export default power(CategorySelector)
