
import React, { Component } from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class Intro extends Component {
  render() {
    return (
      <div id="pageContainer1">
        <h1>
          <Element name="1" className="element">
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
