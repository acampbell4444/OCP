'use strict'

import 'babel-polyfill'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'

import Navbar from './containers/NavigationContainer'
import ReservationContainer from './containers/ReservationContainer'
import HomeContainer from './containers/HomeContainer'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

import { updateCurrentSection } from './reducers/navBar'

const OSApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <span>
      <div className='navbar sticky-top navbar-light bg-med'>
          <Navbar> </Navbar>
      </div>
      {children}
    </span>
)
const onHomeEnter = () => store.dispatch(updateCurrentSection(1))
const onReservationEnter = () => store.dispatch(updateCurrentSection(2))

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={OSApp}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={HomeContainer} onEnter={onHomeEnter} />
        <Route path="/reservations" component={ReservationContainer} onEnter={onReservationEnter} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
