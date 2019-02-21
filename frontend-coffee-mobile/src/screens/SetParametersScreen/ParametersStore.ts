import { observable, action } from "mobx"

type OnChangeText = (value: string) => void

interface ICoordinates {
  latitude: number
  longitude: number
}

type OnYieldChange = (value: string) => void

type OnShadeChange = (shade: string) => void

type OnSlopeChange = (slope: string) => void

export class ParametersStore {
  @observable
  public pointName: string = ""

  @observable
  public userCurrentYield = ""

  @observable
  public shadeLevel = "none"

  @observable
  public slopeLevel = "flat"

  @action
  public handleNameChange: OnChangeText = (value: string) => {
    this.pointName = value
  }

  @action
  public handleYieldChange: OnYieldChange = value => {
    this.userCurrentYield = value
  }

  @action
  public handleShadeChange: OnShadeChange = shade => {
    console.log("slope", this.slopeLevel)
    this.shadeLevel = shade
  }

  @action
  public handleSlopeChange: OnSlopeChange = slope => {
    console.log("shade", this.shadeLevel)
    this.slopeLevel = slope
  }

  handleSend = () => {
    console.log("name", this.pointName)
    console.log("yeild", this.userCurrentYield)
    console.log("shade", this.shadeLevel)
    console.log("slope", this.slopeLevel)
  }

  public point: ICoordinates = { latitude: 0, longitude: 0 }

  constructor({ point }: { point: ICoordinates }) {
    this.point = point
  }
}
