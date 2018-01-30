import axios from 'axios'

const initState = {
  navBarActive: true,
  currentSection: 1,
  iconNum: 'off',
  iconJustLeft: null
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
  case UPDATE_ICON_HOVER:
    newState.iconNum = action.iconNum
    break
  case UPDATE_ICON_LEFT:
    newState.iconJustLeft = action.iconNum
    break
  default:
    return state
  }
  return newState
}

const UPDATE_NAVBAR_ACTIVE = 'UPDATE_NAVBAR_ACTIVE'
const UPDATE_CURR_SECTION = 'UPDATE_CURR_SECTION'
const UPDATE_ICON_HOVER = 'UPDATE_ICON_HOVER'
const UPDATE_ICON_LEFT = 'UPDATE_ICON_LEFT'

export const updateNavbarActive = bool => ({type: UPDATE_NAVBAR_ACTIVE, bool})
export const updateCurrentSection = section => ({type: UPDATE_CURR_SECTION, section})
export const iconNumHover = iconNum => ({type: UPDATE_ICON_HOVER, iconNum})
export const iconLeft = iconNum => ({type: UPDATE_ICON_LEFT, iconNum})

export default reducer
