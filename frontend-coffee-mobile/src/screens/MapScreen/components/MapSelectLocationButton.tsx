import React, { FunctionComponent } from "react"
import { SystemButtonLarge, SystemAbsolute } from "../../../system-components"
import { SET_PARAMETERS_SCREEN } from "../../../utils/constants"
import { theme } from "../../../system-components/system-theme/theme"
import {
  selectPrimary,
  selectBlack,
  selectWhite
} from "../../../utils/selectors"

export const MapSelectLocationButton: FunctionComponent<{
  mapExtent: any
  navigation: any
  isActive: boolean
}> = ({ mapExtent, navigation, isActive }) => {
  if (isActive) {
    return (
      <SystemAbsolute bottom={32} horizontal={300}>
        <SystemAbsolute bottom={8}>
          <SystemButtonLarge
            colorBorder={selectPrimary({ theme })}
            color={selectWhite({ theme })}
            textColor={selectBlack({ theme })}
            onPress={() => {
              navigation.navigate(SET_PARAMETERS_SCREEN, {
                point: {
                  latitude: mapExtent.latitude,
                  longitude: mapExtent.longitude
                }
              })
            }}
          >
            Select location
          </SystemButtonLarge>
        </SystemAbsolute>
      </SystemAbsolute>
    )
  } else {
    return null
  }
}
