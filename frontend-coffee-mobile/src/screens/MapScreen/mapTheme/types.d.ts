export interface IMapTheme {
  zoomMax: {
    latitudeDelta: number
    longitudeDelta: number
  }
  initialZoom: {
    latitudeDelta: number
    longitudeDelta: number
  }
  zoomMin: {
    latitudeDelta: number
    longitudeDelta: number
  }
  geoLocator: {
    timeout: number
    highAccuracy: boolean
  }
  zoomScale: number
  regionSensitivity: number
}
