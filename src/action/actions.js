export const upCoords = (coords) => {
  console.log("up coords")
  return ({
    type: 'UP_COORDS',
    newCoords: coords,
  })
}

export const postReq = (dt) => {
  console.log("data returned from server", dt)
  return ({
    type: 'POST',
    data: dt,
  })
}

export const nextImage = () => {
  return ({
    type: 'NEXT_IMAGE',
  })
}

export const modelData = (dt) => {
  console.log("action modelled data..." , dt )
  return ({
    type: 'MODELED_DATA',
    modelData: dt,
  })
}


export const shadePercentage = (s) => {

  return ({
    type: 'SHADE_PERCENTAGE',
    shade: s,
  })
}


export const yieldPerHa = (y) => {
  return ({
    type: 'YIELD_PER_HA',
    yield: y,
  })
}
export const irrigationCheckBox = (i) => {
  return ({
    type: 'IRRIGATION_CHECKBOX',
    irr: i,
  })
}
export const slopePercentage= (s) => {

  return ({
    type: 'SLOPE_PERCENTAGE',
    slope: s,
  })
}

export const upAddress= (a) => {
  console.log("the addresses are working...")
  return ({
    type: 'ADDRESS_UPDATE',
    address: a,
  })
}
