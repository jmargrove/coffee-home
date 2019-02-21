import { observable, action, computed } from "mobx"
require("dotenv").config()
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

  handleUserShadeParameter = (shade: string) => {
    switch (shade) {
      case "none":
        return 0
      case "low":
        return (1 / 3) * 10
      case "medium":
        return (2 / 3) * 10
      case "high":
        return 10
    }
  }

  handleUserSlopeParameter = (slope: string) => {
    switch (slope) {
      case "flat":
        return 1
      case "slight":
        return (1 / 3) * 45
      case "gradual":
        return (2 / 3) * 45
      case "steep":
        return 45
    }
  }

  handleSend = async () => {
    console.log("sending....")
    const data = {
      lng: this.point.longitude,
      lat: this.point.latitude,
      userShadeValue: this.handleUserShadeParameter(this.shadeLevel),
      userIrrValue: this.irrigation ? 1 : 0,
      userSlopeValue: this.handleUserSlopeParameter(this.slopeLevel)
    }

    const response = await fetch(process.env.REACT_APP_SIMPLE_MODEL_REQUEST!, {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    })

    console.log("response ", response)
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
