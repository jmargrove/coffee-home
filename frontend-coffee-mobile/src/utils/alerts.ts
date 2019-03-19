import { Alert } from "react-native"
import NavigationServices from "./NavigationServices"
import { MAP_SCREEN } from "./constants"

export const noPointsAlert = () => {
  Alert.alert("No points locations", "", [
    {
      text: "Add points",
      onPress: () =>
        NavigationServices.navigate(MAP_SCREEN, { selectPoint: true })
    },
    { text: "Back" }
  ])
}
