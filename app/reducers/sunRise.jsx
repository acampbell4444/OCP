import axios from 'axios'

const initState = {
  sunRiseHeight: 0,
  sunRiseWidth: 0
}

const reducer = (state=initState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
  case UPDATE_SUNRISE_DIMENSIONS:
    newState.sunRiseHeight = action.height
    newState.sunRiseWidth = action.width
    break
  default:
    return state
  }
  return newState
}

const UPDATE_SUNRISE_DIMENSIONS = 'UPDATE_SUNRISE_DIMENSIONS'

export const setSunRiseDimensions = (height,width) => ({type: UPDATE_SUNRISE_DIMENSIONS, height, width})

export default reducer