import React, { FunctionComponent, ReactNode } from "react"
import { SystemText, SystemFlex, SystemSpace } from "../../system-components"
import styled from "styled-components"
import { View } from "react-native"
import { REGULAR, BLACK } from "../../system-components/system-theme/theme"
import { AxisNode } from "./components/AxisNode"
import uuid from "uuid/v4"
import { observable, action } from "mobx"
import { compose, withProps, mapProps } from "recompose"
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

const CategorySelector: FunctionComponent<{
  title: string
  levels: string[]
  store: Store
  retrieve: any
}> = ({ title, levels, store, retrieve }) => {
  const { factorLevel, prevFactorLevel, handleFactorChange } = store
  retrieve(factorLevel)
  console.log(`factore level ${title}`)
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

class Store {
  constructor(args: { default: string }) {
    this.factorLevel = args.default
  }
  @observable
  public factorLevel = ""

  @observable
  public prevFactorLevel = ""

  @action
  public handleFactorChange: any = (factorLevel: any) => {
    this.prevFactorLevel = this.factorLevel
    this.factorLevel = factorLevel
  }
}

const power = compose<any, any>(
  mapProps(({ title, levels, retrieve }: any) => {
    return {
      title,
      levels,
      retrieve,
      store: new Store({ default: levels[0] })
    }
  }),
  observer
)

export const CategorySelectorWithStore = power(CategorySelector)
