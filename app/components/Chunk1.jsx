
import React, { Component } from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class Chunk1 extends Component {
  render() {
    return (
      <div className='mtop'>
        <h1>
          <Element name="1">
            Chunk1
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
