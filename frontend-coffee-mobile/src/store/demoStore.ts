import { SAVE_DATA_LOCALLY, MAP_SCREEN, POINT_SCREEN } from "../utils/constants"
import AsyncStorage from "@react-native-community/async-storage"
import { Alert } from "react-native"
import NavigationServices from "../utils/NavigationServices"
import uuid from "uuid/v4"
import { action, observable, computed } from "mobx"

type OnChangeText = (value: string) => void

export interface IDataAddition {
  lng: number
  lat: number
  id: string
  dateCreated: Date
  userCurrentYield: string
  pointName: string
  userShadeValue: string
  userIrrValue: boolean
  userSlopeValue: string
}

type OnYieldChange = (value: string) => void

type OnShadeChange = (shade: string) => void

type OnSlopeChange = (slope: string) => void

type OnIrrigationChange = () => void

const handleLoadPoints = async function() {
  const dataString = await AsyncStorage.getItem(SAVE_DATA_LOCALLY)
  if (dataString) {
    this.savedPoints = (await JSON.parse(dataString)) as IDataAddition[]
  } else {
    this.savedPoints = [] as []
  }
}

class Store {
  @observable
  public coordinates!: { lat: number; lng: number }
  @observable
  public isLoading = false
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
  public irrigation: boolean = false
  @observable
  public savedPoints: IDataAddition[] = []

  async init(callback: () => any) {
    await callback.bind(this)()
    this.pointName = `Field-${this.savedPoints.length + 1}`
  }

  @action
  handleUpdateCoordinates = ({
    coordinates
  }: {
    coordinates: { lat: number; lng: number }
  }) => {
    this.coordinates = coordinates
  }

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

  @computed
  get isFormFilled() {
    if (
      this.pointName.length > 1 &&
      this.userCurrentYield.length > 1 &&
      this.shadeLevel !== "" &&
      this.slopeLevel !== ""
    ) {
      return true
    } else {
      return false
    }
  }

  @action
  resetValues = (n: number) => {
    this.isLoading = false
    this.pointName = `Field-${n}`
    this.userCurrentYield = ""
    this.shadeLevel = ""
    this.prevShadeLevel = ""
    this.slopeLevel = ""
    this.prevSlopeLevel = ""
    this.irrigation = false
  }

  @action
  handleSaveData = async () => {
    const dataAddition = {
      lng: this.coordinates.lng,
      id: uuid(),
      dateCreated: new Date(),
      lat: this.coordinates.lat,
      userCurrentYield: this.userCurrentYield,
      pointName: this.pointName,
      userShadeValue: this.shadeLevel,
      userIrrValue: this.irrigation,
      userSlopeValue: this.slopeLevel
    }

    if (this.savedPoints.length > 0) {
      const isNameDuplicate = this.savedPoints.find(
        (el: IDataAddition) => el.pointName === dataAddition.pointName
      )
      if (this.savedPoints.length > 5) {
        Alert.alert(
          "You have stored a maximum of 5 points",
          "Go to point locations and delete points or cancel point creation",
          [
            {
              text: "Point locatons",
              onPress: () => NavigationServices.navigate(POINT_SCREEN, {})
            },
            { text: "Cancel", style: "destructive" }
          ]
        )
        return
      }

      if (isNameDuplicate) {
        Alert.alert(
          "You have already store a point with the same name",
          "Please change the name",
          [{ text: "OK" }]
        )
        return
      }

      Alert.alert("Save data", "Are you sure you want to save point", [
        { text: "Cancel", style: "destructive" },
        {
          text: "OK",
          onPress: async () => {
            this.savedPoints = [...this.savedPoints, dataAddition]

            await AsyncStorage.setItem(
              SAVE_DATA_LOCALLY,
              JSON.stringify(this.savedPoints)
            )

            this.resetValues(this.savedPoints.length)
            NavigationServices.navigate(MAP_SCREEN, { selectPoint: false })
          }
        }
      ])
    } else {
      this.savedPoints.push(dataAddition)
      Alert.alert("Save data", "Are you sure you want to save point", [
        { text: "Cancel", style: "destructive" },
        {
          text: "OK",
          onPress: async () => {
            await AsyncStorage.setItem(
              SAVE_DATA_LOCALLY,
              JSON.stringify(this.savedPoints)
            )

            this.resetValues(this.savedPoints.length)

            NavigationServices.navigate(MAP_SCREEN, { selectPoint: false })
          }
        }
      ])
    }
  }

  @action
  handleDeletePoint = (item: IDataAddition) => {
    Alert.alert("Delete point.", "Are you sure you want to delete this point", [
      {
        text: "Yes",
        style: "destructive",
        onPress: async () => {
          const updatedData = this.savedPoints.filter(point => {
            if (point.id === item.id) {
              return false
            } else {
              return true
            }
          })

          this.savedPoints = updatedData

          await AsyncStorage.setItem(
            SAVE_DATA_LOCALLY,
            JSON.stringify(updatedData)
          )
          return
        }
      },
      { text: "No" }
    ])
  }
}

const demoStore = new Store()
demoStore.init(handleLoadPoints)
export { demoStore }
