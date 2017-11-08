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
