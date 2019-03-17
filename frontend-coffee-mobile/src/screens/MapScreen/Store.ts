import { observable, action } from "mobx"

interface ICoordinate {
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}

export class Store {
  @observable
  isSelectingPoint = false
  @observable
  pointLocation: { latitude: number; longitude: number } = {
    latitude: 0,
    longitude: 0
  }

  @action
  handlePointLocation = ({
    longitude,
    latitude
  }: {
    latitude: number
    longitude: number
  }) => {
    this.pointLocation = {
      longitude,
      latitude
    }
  }
}
