
const defaultState = {
  data: {dt: [ { month: 1, rain: 40 },
  { month: 2, rain: 36 },
  { month: 3, rain: 48 },
  { month: 4, rain: 54 },
  { month: 5, rain: 65 },
  { month: 6, rain: 46 },
  { month: 7, rain: 24 },
  { month: 8, rain: 49 },
  { month: 9, rain: 70 },
  { month: 10, rain: 72 },
  { month: 11, rain: 59 },
  { month: 12, rain: 46 } ],
  dom_soil_type: 'soil type',
  TpH: 7.745,
  TOC: 0.50,
  top_bulk_density: 1.00,
  top_soil_fraction: [
    { soil_fraction: 'gravel', percentage: 25 },
    { soil_fraction: 'sand', percentage: 25 },
    { soil_fraction: 'silt', percentage: 25 },
    { soil_fraction: 'clay', percentage: 25}
  ],
  SpH: 7.745,
  SOC: 0.50,
  sub_bulk_density: 1.00,
  sub_soil_fraction: [
    { soil_fraction: 'gravel', percentage: 25 },
    { soil_fraction: 'sand', percentage: 25 },
    { soil_fraction: 'silt', percentage: 25 },
    { soil_fraction: 'clay', percentage: 25 }
  ]
  },
  coords: {lat: 41.459, lng: 1.6369, zoom: 7}
}

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
let count = -1

//// the reducers
const reducer = (state = defaultState, action) => {
  if(action.type === 'POST') {
    console.log("POST red:", action.data['TOP_pH'])
    return ({...state,
      data: {dt: [...action.data.dt],
        dom_soil_type: action.data.dom_soil_type,
        TpH: action.data['TOP_pH'],
        TOC: action.data['TOP_OC'],
        top_bulk_density: action.data['TOP_BD'],
        top_soil_fraction: [
          {...action.data['top_soil_fraction'][0]},
          {...action.data['top_soil_fraction'][1]},
          {...action.data['top_soil_fraction'][2]},
          {...action.data['top_soil_fraction'][3]},
        ],
        SpH: action.data['SUB_pH'],
        SOC: action.data['SUB_OC'],
        sub_bulk_density: action.data['SUB_BD'],
        sub_soil_fraction: [
          {...action.data['sub_soil_fraction'][0]},
          {...action.data['sub_soil_fraction'][1]},
          {...action.data['sub_soil_fraction'][2]},
          {...action.data['sub_soil_fraction'][3]},
        ]
      }})
  }
  else if (action.type === 'UP_COORDS') {
    return {...state,
      coords: {lat: action.newCoords.lat, lng: action.newCoords.lng, zoom: action.newCoords.zoom}}
  }
  else if( action.type === 'NEXT_IMAGE') {
    if(count > 10) {
      count = -1;
    }
    count++
    return ({...state,
      rainfallMap:[('http://localhost:8080/Rcode/rainfall-maps/' + months[count] + '.jpg'), months[count]]
    })
  }

  return state;
}



export default reducer
