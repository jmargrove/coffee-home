import { observable, action, computed } from "mobx"
import { NavigationProps } from "../../types.d"
import { REACT_APP_SIMPLE_MODEL_REQUEST } from "react-native-dotenv"
import { NavigationScreenProp, NavigationRoute } from "react-navigation"
import { SAVE_DATA_LOCALLY, MAP_SCREEN } from "../../utils/constants"
import { AsyncStorage } from "react-native"
import { Alert } from "react-native"
import NavigationServices from "../../utils/NavigationServices"

type OnChangeText = (value: string) => void

interface ICoordinates {
  latitude: number
  longitude: number
}

export interface IDataAddition {
  lng: number
  lat: number
  userCurrentYield: number
  pointName: string
  userShadeValue: number
  userIrrValue: 1 | 0
  userSlopeValue: number
}

type OnYieldChange = (value: string) => void

type OnShadeChange = (shade: string) => void

type OnSlopeChange = (slope: string) => void

type OnIrrigationChange = () => void

export class ParametersStore {
  @observable
  public isLoading = false

  public navigation: null | NavigationProps = null

  @observable
  public pointName: string = "Field-1"

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

  @action
  handleSend = async () => {
    this.isLoading = true
    console.log("sending....")
    const data = {
      lng: this.point.longitude,
      lat: this.point.latitude,
      userShadeValue: this.handleUserShadeParameter(this.shadeLevel),
      userIrrValue: this.irrigation ? 1 : 0,
      userSlopeValue: this.handleUserSlopeParameter(this.slopeLevel)
    }

    const response = await fetch(REACT_APP_SIMPLE_MODEL_REQUEST, {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    })

    console.log("response", response.json())

    this.isLoading = false
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

  constructor({
    point,
    navigation
  }: {
    point: ICoordinates
    navigation: NavigationScreenProp<NavigationRoute>
  }) {
    this.point = point
  }

  handleLoadingTrue = () => {
    this.isLoading = true
  }

  handleLoadingFalse = () => {
    this.isLoading = false
  }

  handleSaveData = async () => {
    const dataAddition = {
      lng: this.point.longitude,
      lat: this.point.latitude,
      userCurrentYield: this.userCurrentYield,
      pointName: this.pointName,
      userShadeValue: this.shadeLevel,
      userIrrValue: this.irrigation,
      userSlopeValue: this.slopeLevel
    }

    const storedData = await AsyncStorage.getItem(SAVE_DATA_LOCALLY)
    if (storedData) {
      const dataArray = JSON.parse(storedData)
      dataArray.push(dataAddition)
      Alert.alert("Save data", "Are you sure you want to save point", [
        { text: "Cancel", style: "destructive" },
        {
          text: "OK",
          onPress: async () => {
            await AsyncStorage.setItem(
              SAVE_DATA_LOCALLY,
              JSON.stringify(dataArray)
            )
            NavigationServices.navigate(MAP_SCREEN, {})
          }
        }
      ])
    } else {
      const dataArray: object[] = []
      dataArray.push(dataAddition)
      Alert.alert("Save data", "Are you sure you want to save point", [
        { text: "Cancel", style: "destructive" },
        {
          text: "OK",
          onPress: async () => {
            await AsyncStorage.setItem(
              SAVE_DATA_LOCALLY,
              JSON.stringify(dataArray)
            )
            NavigationServices.navigate(MAP_SCREEN, {})
          }
        }
      ])
    }
  }
}
