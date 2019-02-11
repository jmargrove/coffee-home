import { observable, action } from "mobx"

export class Store {
  constructor() {
    this.handleInitialLocation()
  }

  @observable
  marker: { latitude: number; longitude: number } = {
    latitude: 0,
    longitude: 0
  }

  @observable
  zoom = { latitudeDelta: 0.015, longitudeDelta: 0.0121 }

  @observable
  field: any[] = []

  @action
  handleMakerLocation = ({ nativeEvent }: any) => {
    this.marker = nativeEvent.coordinate
    this.field.push(nativeEvent.coordinate)
  }

  @action
  handleInitialLocation = () => {
    navigator.geolocation.getCurrentPosition(
      location => {
        const { latitude, longitude } = location.coords
        this.marker = { latitude, longitude }
        this.zoom = { latitudeDelta: 0.015, longitudeDelta: 0.0121 }
      },
      error => {
        console.log("error", error)
      },
      {
        timeout: 1000 * 5,
        enableHighAccuracy: false
      }
    )
  }

  @action handleZoomIn = () => {
    const { latitudeDelta, longitudeDelta } = this.zoom
    this.zoom = {
      latitudeDelta: latitudeDelta / 3,
      longitudeDelta: longitudeDelta / 3
    }
  }

  @action handleZoomOut = () => {
    const { latitudeDelta, longitudeDelta } = this.zoom
    this.zoom = {
      latitudeDelta: latitudeDelta * 3,
      longitudeDelta: longitudeDelta * 3
    }
  }

  handleDraggableMarker = ({ nativeEvent }: any) => {
    this.marker = nativeEvent.coordinate
  }
}
