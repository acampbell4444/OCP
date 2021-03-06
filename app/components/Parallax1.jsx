import React, { Component } from 'react';
import { render } from 'react-dom';
import { Parallax } from 'react-parallax';

export default class Par1 extends Component {
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className='whiteText'>

      <Parallax bgImage={'/images/balboaPier.jpg'}
                  bgHeight={'800px'}
                  strength={200}
        >
          <div className='img img-responsive' style={{'height': '900px','paddingBottom':'200px'}}>
            <div className='insideP1'>Change your Altitude!</div>
          </div>
        </Parallax>

        <div id='under1'>
          <h2 className='biggerText'>Experience the thrill of floating through the air with California's premier parasail operator. We specialize in providing the safest, easiest and most exciting watersports activity- PARASAILING! Breathtaking panoramic views of Oceanside await as you are gently lifted to your chosen altitude.</h2>
        </div>

        <Parallax bgImage={'/images/blurArial.jpg'} 
                  blur={{min: 10,max:-10}}
        
        >
          <div style={{height: 800}}>
            <div id='insideP2'>Way up there!</div>
          </div>
        </Parallax>        

        
        <div id='under2'>
          <h2 className='biggerText'>Choose from 600 or 800 foot flights. Share in the fun. Bring your friends and family. Flights accommodate two or three at a time. Oceanside Parasail is dedicated to safety, all captains are USCG licensed.</h2>
        </div>
        

        
        <Parallax bgImage={'/images/coupleDip.jpg'} 
                  bgHeight={'900px'}
                  bgWidth='100%'
                  strength={-300}>
          <div style={{height: 900}}>
            <div id='insideP3'>   
              Let the Good Times Roll!               
           </div>
          </div>
        </Parallax>

        <div id='under3'>
          <h2 className='biggerText'>Our goal is to provide the safest and most memorable parasail experience for our customers. Our experienced, friendly, and professional staff are driven to make your parasailing experience at Oceanside Parasail the highlight of your stay.</h2>
        </div>
        <span>{'\u2728'}</span>
      </div>
    )
  }
}
