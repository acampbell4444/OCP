
import React, { Component } from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class Intro extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <h1>
          <Element name="1">
            osParasailIntro
            <br/>
            bla<br/>
            bla<br/>
            bla<br/>
            bla<br/>
            bla<br/>
            bla
          </Element>
        </h1>
      </div>
    )
  }
}
