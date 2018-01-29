'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import HomeContainer from './containers/HomeContainer'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Bubbles from './components/Bubbles'
import Navbar from './containers/NavigationContainer'
import ReservationContainer from './containers/ReservationContainer'


const OSApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <span>
      <div className='navbar sticky-top navbar-light bg-med'>
          <Navbar> </Navbar>
          <Bubbles/>
      </div>
      {children}
    </span>
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={OSApp}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={HomeContainer} />
        <Route path="/reservations" component={ReservationContainer} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
