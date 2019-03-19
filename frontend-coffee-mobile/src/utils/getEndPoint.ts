import {
  REACT_APP_SIMPLE_MODEL_REQUEST,
  REACT_APP_OPTIMIZE_SHADE_REQUEST
} from "react-native-dotenv"
import { YIELD, OPTIMIZE } from "./constants"

export const getEndPoint = ({ type }: { type: string }) => {
  switch (type) {
    case YIELD:
      return REACT_APP_SIMPLE_MODEL_REQUEST
    case OPTIMIZE:
      return REACT_APP_OPTIMIZE_SHADE_REQUEST
  }
}
