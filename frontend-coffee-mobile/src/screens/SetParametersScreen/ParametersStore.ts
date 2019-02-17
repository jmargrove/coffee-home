import { observable, action } from "mobx"

type OnChangeText = (value: string) => void

interface ICoordinates {
  latitude: number
  longitude: number
}

export class ParametersStore {
  @observable
  public pointName: string = ""

  @action
  public handleNameChange: OnChangeText = (value: string) => {
    this.pointName = value
  }

  public point: ICoordinates = { latitude: 0, longitude: 0 }

  constructor({ point }: { point: ICoordinates }) {
    this.point = point
  }
}
