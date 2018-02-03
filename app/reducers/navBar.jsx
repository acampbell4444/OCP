// import axios from 'axios'

const initState = {
  navShow: true,
  currentSection: null,
}

const reducer = (state=initState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {

  case UPDATE_CURR_SECTION:
    newState.currentSection = action.section
    break
  case UPDATE_NAV_SHOW:
    newState.navShow = action.bool
    break
  default:
    return state
  }
  return newState
}

const UPDATE_CURR_SECTION = 'UPDATE_CURR_SECTION'
const UPDATE_NAV_SHOW = 'UPDATE_NAV_SHOW'

export const updateCurrentSection = section => ({type: UPDATE_CURR_SECTION, section})
export const navShow = bool => ({type: UPDATE_NAV_SHOW, bool})

export default reducer
