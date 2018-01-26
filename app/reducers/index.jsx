import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  navBar: require('./navBar').default,
})

export default rootReducer
