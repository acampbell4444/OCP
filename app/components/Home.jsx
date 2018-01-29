import React, { Component } from 'react'
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
      <span>
        <div> <SunRise/> </div>
      </span>
    )
  }
}
