import { observable, action } from "mobx"

type OnChangeText = (value: string) => void

interface ICoordinates {
  latitude: number
  longitude: number
}

type OnYieldChange = (value: string) => void

export class ParametersStore {
  @observable
  public pointName: string = ""

  @observable
  public userCurrentYield = ""

  @action
  public handleNameChange: OnChangeText = (value: string) => {
    this.pointName = value
  }

  @action
  public handleYieldChange: OnYieldChange = value => {
    this.userCurrentYield = value
  }

  public point: ICoordinates = { latitude: 0, longitude: 0 }

  constructor({ point }: { point: ICoordinates }) {
    this.point = point
  }
}
