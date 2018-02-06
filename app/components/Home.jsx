import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Scroll, Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Parallax } from 'react-parallax'

import Navbar from '../containers/NavigationContainer'
import Chunk1 from '../containers/Chunk1Container'
import Parallax1 from '../components/Parallax1'

 import Bubbles from '../components/Bubbles'
 import SunRise from '../containers/SunRiseContainer'

export default class Home extends Component {
  render() {
    return (
      <span id='homeContainer'>
        <div><Bubbles/></div>
        <div id='sunriseContainer'> <SunRise/> </div>
        <div>
          <div className='center flex underP1button'>
            <button id='dubBub1' className='dubBub' onClick={() => browserHistory.push('/reservations')}>BOOK NOW</button>
            <button id='dubBub2' className='dubBub' onClick={() => window.scrollTo(0,0)}>BACK TO TOP</button>
         </div>
        </div>
      </span>
    )
  }
}
