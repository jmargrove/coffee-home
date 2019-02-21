import { observable, action, computed } from "mobx"

type OnChangeText = (value: string) => void

interface ICoordinates {
  latitude: number
  longitude: number
}

type OnYieldChange = (value: string) => void

type OnShadeChange = (shade: string) => void

type OnSlopeChange = (slope: string) => void
type OnIrrigationChange = () => void

export class ParametersStore {
  @observable
  public pointName: string = ""

  @observable
  public userCurrentYield = ""

  @observable
  public shadeLevel = ""

  @observable
  public prevShadeLevel = ""

  @observable
  public slopeLevel = ""

  @observable
  public prevSlopeLevel = ""

  @observable
  public irrigation: boolean | undefined = false

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
    this.prevShadeLevel = this.shadeLevel
    this.shadeLevel = shade
  }

  @action
  public handleSlopeChange: OnSlopeChange = slope => {
    this.prevSlopeLevel = this.slopeLevel
    this.slopeLevel = slope
  }

  @action
  public handleIrrigationChange: OnIrrigationChange = () => {
    this.irrigation = !this.irrigation
  }

  handleSend = () => {
    console.log("name", this.pointName)
    console.log("yeild", this.userCurrentYield)
    console.log("shade", this.shadeLevel)
    console.log("slope", this.slopeLevel)
    console.log("irrigated", this.irrigation)
  }

  @computed
  get isFormFilled() {
    if (
      this.pointName.length > 3 &&
      this.userCurrentYield.length > 1 &&
      this.shadeLevel !== "" &&
      this.slopeLevel !== ""
    ) {
      return true
    } else {
      return false
    }
  }

  public point: ICoordinates = { latitude: 0, longitude: 0 }

  constructor({ point }: { point: ICoordinates }) {
    this.point = point
  }
}
