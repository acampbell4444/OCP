//import axios from 'axios'

const initState = {
  navBarActive: true,
  currentSection: null,
}

const reducer = (state=initState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
  case UPDATE_NAVBAR_ACTIVE:
    newState.navBarActive = action.bool
    break
  case UPDATE_CURR_SECTION:
    newState.currentSection = action.section
    break
  default:
    return state
  }
  return newState
}

const UPDATE_NAVBAR_ACTIVE = 'UPDATE_NAVBAR_ACTIVE'
const UPDATE_CURR_SECTION = 'UPDATE_CURR_SECTION'

export const updateNavbarActive = bool => ({type: UPDATE_NAVBAR_ACTIVE, bool})
export const updateCurrentSection = section => ({type: UPDATE_CURR_SECTION, section})

export default reducer
