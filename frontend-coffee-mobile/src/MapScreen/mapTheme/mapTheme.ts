import { IMapTheme } from "./types.d"

export const mapTheme: IMapTheme = {
  zoomMax: {
    latitudeDelta: 141,
    longitudeDelta: 131
  },
  initialZoom: {
    latitudeDelta: 12.4,
    longitudeDelta: 11.6
  },
  zoomMin: {
    latitudeDelta: 0.00024,
    longitudeDelta: 0.00025
  },
  geoLocator: {
    timeout: 5000,
    highAccuracy: false
  },
  zoomScale: 3,
  regionSensitivity: 100
}
