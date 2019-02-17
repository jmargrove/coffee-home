import React from "react"
import { observer } from "mobx-react"
import { action, computed, observable } from "mobx"
import { compose, withProps } from "recompose"

export const powerSystemInput = compose(
  withProps(({ onFocus, onEndEditing, onChangeText, value }: any) => {
    class SystemInputStore {
      @observable showEdit = true
      @action
      handleFocus = ({ event }: any) => {
        if (this.ref.current) {
          this.ref.current.focus()
        }
        this.showEdit = false
        if (onFocus) {
          onFocus(event)
        }
      }

      @computed
      get isEditing() {
        if (value.length < 1 && this.showEdit) {
          return true
        } else if (value.length < 1) {
          return true
        } else {
          return false
        }
      }

      @action
      handleEndEditing = ({ event }: any) => {
        this.showEdit = true
        if (onEndEditing) {
          onEndEditing(event)
        }
      }

      clearInput = () => {
        if (onChangeText) {
          onChangeText("")
        }
      }

      ref: any = React.createRef()
    }

    const store = new SystemInputStore()
    return { store }
  }),
  observer
)
