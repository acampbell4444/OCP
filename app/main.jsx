'use strict'

import 'babel-polyfill'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'
import Favicon from 'react-favicon';

import Parallax1 from './components/Parallax1'


import Navbar from './containers/NavigationContainer'
import HomeContainer from './containers/HomeContainer'
import ReservationContainer from './containers/ReservationContainer'
import RateContainer from './containers/RateContainer'
import LocationContainer from './containers/LocationContainer'
import FAQContainer from './containers/FAQContainer'
import GalleryContainer from './containers/GalleryContainer'


import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Footer from './containers/FooterContainer'

import { updateCurrentSection } from './reducers/navBar'
import { navShow } from './reducers/navBar'

const OSApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <span>
{/*      <Favicon url="http://http://www.designfloat.com/favicon.ico" />*/}
      <div className='row navbar sticky-top navbar-light bg-med'>
          <Navbar/>
      </div>
      <Footer/>
      {children}
    </span>
)
const onHomeEnter = () => {
  store.dispatch(updateCurrentSection(1))
  store.dispatch(navShow(true))
}
const onReservationEnter = () => {
  store.dispatch(updateCurrentSection(2))
  store.dispatch(navShow(true))
}
const onRateEnter = () => {
  store.dispatch(updateCurrentSection(3))
  store.dispatch(navShow(true))
}
const onLocationEnter = () => {
  store.dispatch(updateCurrentSection(4))
  store.dispatch(navShow(true))
}
const onFAQEnter = () => {
  store.dispatch(updateCurrentSection(5))
  store.dispatch(navShow(true))
}
const onGalleryEnter = () => {
  store.dispatch(updateCurrentSection(6))
  store.dispatch(navShow(true))
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={OSApp}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={HomeContainer} onEnter={onHomeEnter} />
        <Route path="/reservations" component={ReservationContainer} onEnter={onReservationEnter} />
        <Route path="/rates" component={RateContainer} onEnter={onRateEnter} />
        <Route path="/location" component={LocationContainer} onEnter={onLocationEnter} />
        <Route path="/FAQ" component={FAQContainer} onEnter={onFAQEnter} />
        <Route path="/gallery" component={GalleryContainer} onEnter={onGalleryEnter} />
        <Route path="/par1" component={Parallax1} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
