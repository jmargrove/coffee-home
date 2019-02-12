import { observable, action, computed } from "mobx"
import { mapTheme } from "./mapTheme/mapTheme"

interface ICoordinate {
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}

export class Store {
  @observable
  userLocation: ICoordinate = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: mapTheme.initialZoom.latitudeDelta,
    longitudeDelta: mapTheme.initialZoom.longitudeDelta
  }
  @observable
  mapExtent: ICoordinate = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: mapTheme.initialZoom.latitudeDelta,
    longitudeDelta: mapTheme.initialZoom.longitudeDelta
  }
  @observable
  nextRegion: ICoordinate = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: mapTheme.initialZoom.latitudeDelta,
    longitudeDelta: mapTheme.initialZoom.longitudeDelta
  }

  @observable
  isSelectingPoint = false
  @observable
  isPointPressed = false
  @observable
  pointLocation: { latitude: number; longitude: number } = {
    latitude: 0,
    longitude: 0
  }

  constructor() {
    this.handleInitialLocation()
  }

  @action
  handleInitialLocation = () => {
    navigator.geolocation.getCurrentPosition(
      location => {
        const { latitude, longitude } = location.coords
        this.userLocation = {
          latitude,
          longitude,
          latitudeDelta: mapTheme.initialZoom.latitudeDelta,
          longitudeDelta: mapTheme.initialZoom.longitudeDelta
        }
        this.mapExtent = {
          latitude,
          longitude,
          latitudeDelta: mapTheme.initialZoom.latitudeDelta,
          longitudeDelta: mapTheme.initialZoom.longitudeDelta
        }
      },
      error => {
        console.log("error", error)
      },
      {
        timeout: mapTheme.geoLocator.timeout,
        enableHighAccuracy: mapTheme.geoLocator.highAccuracy
      }
    )
  }

  @action handleZoomIn = () => {
    const { latitudeDelta, longitudeDelta } = this.mapExtent
    if (
      latitudeDelta > mapTheme.zoomMin.latitudeDelta &&
      longitudeDelta > mapTheme.zoomMin.latitudeDelta
    ) {
      this.mapExtent = {
        ...this.mapExtent,
        latitudeDelta: latitudeDelta / mapTheme.zoomScale,
        longitudeDelta: longitudeDelta / mapTheme.zoomScale
      }
    }
  }

  @action handleZoomOut = () => {
    const { latitudeDelta, longitudeDelta } = this.mapExtent
    if (
      latitudeDelta < mapTheme.zoomMax.latitudeDelta &&
      longitudeDelta < mapTheme.zoomMax.longitudeDelta
    ) {
      this.mapExtent = {
        ...this.mapExtent,
        latitudeDelta: latitudeDelta * mapTheme.zoomScale,
        longitudeDelta: longitudeDelta * mapTheme.zoomScale
      }
    }
  }

  @action
  viewUserLocaton = () => {
    this.mapExtent = {
      ...this.mapExtent,
      latitude: this.userLocation.latitude,
      longitude: this.userLocation.longitude
    }
  }

  @computed
  get hasRegionLatitudeChanged() {
    return (
      Math.round(this.nextRegion.latitude * mapTheme.regionSensitivity) !==
      Math.round(this.mapExtent.latitude * mapTheme.regionSensitivity)
    )
  }

  @computed
  get hasRegionLatitudeDeltaChanged() {
    return (
      Math.round(this.nextRegion.latitudeDelta * mapTheme.regionSensitivity) !==
      Math.round(this.mapExtent.latitudeDelta * mapTheme.regionSensitivity)
    )
  }

  @computed
  get hasRegionLongitudeChanged() {
    return (
      Math.round(this.nextRegion.longitude * mapTheme.regionSensitivity) !==
      Math.round(this.mapExtent.longitude * mapTheme.regionSensitivity)
    )
  }

  @computed
  get hasRegionLongitudeDeltaChanged() {
    return (
      Math.round(
        this.nextRegion.longitudeDelta * mapTheme.regionSensitivity
      ) !==
      Math.round(this.mapExtent.longitudeDelta * mapTheme.regionSensitivity)
    )
  }

  @action
  handleRegionChange = (extent: ICoordinate) => {
    if (this.isSelectingPoint) {
      this.nextRegion = extent
      if (
        this.hasRegionLatitudeChanged ||
        this.hasRegionLongitudeChanged ||
        this.hasRegionLatitudeDeltaChanged ||
        this.hasRegionLongitudeDeltaChanged
      ) {
        const changeLatitude = this.mapExtent.latitude - extent.latitude
        const changeLongitude = this.mapExtent.longitude - extent.longitude

        this.mapExtent = {
          ...this.mapExtent,
          longitude: this.mapExtent.longitude - changeLongitude,
          latitude: this.mapExtent.latitude - changeLatitude
        }
      }
    } else {
      this.nextRegion = extent
      if (
        this.hasRegionLatitudeChanged ||
        this.hasRegionLongitudeChanged ||
        this.hasRegionLatitudeDeltaChanged ||
        this.hasRegionLongitudeDeltaChanged
      ) {
        this.mapExtent = extent
      }
    }
  }

  handleDragPoint = e => {
    console.log(e)
    this.pointLocation = {
      ...this.pointLocation,
      latitude: e.latitude,
      longitude: e.longitude
    }
  }

  @action
  handlePointDrop = () => {
    this.isSelectingPoint = !this.isSelectingPoint
    this.pointLocation = {
      latitude: this.mapExtent.latitude,
      longitude: this.mapExtent.longitude
    }
  }

  @action
  handlePointPress = () => {
    console.log("pressed")
    this.isPointPressed = true
  }

  @action
  handlePointRelease = () => {
    this.isPointPressed = false
  }
}
