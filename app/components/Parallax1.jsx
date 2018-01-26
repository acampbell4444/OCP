
import React, { Component } from 'react'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Parallax, Background } from 'react-parallax'


const image1 = "http://www.northshoreparasail.com/images/homeslidecatlinanew3-crop-u13758.jpg?crc=402120419";
const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};

export default class Parallax1 extends Component {
  render() {
    return (
      <div className="">
       <Parallax bgImage={image1} strength={500}>
        <div style={{height: 500}}>
        <div style={insideStyles}>HTML inside the parallax</div>
        </div>
          
    </Parallax>
     <Parallax strength={500}>
      <div style={{height: 500}}>Use the background component for custom elements</div>
      <Background className="custom-bg">
        <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
      </Background>
    </Parallax>

      </div>
    )
  }
}