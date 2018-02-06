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
        
        <Parallax bgImage={'/images/p1p1.jpg'}
                  bgHeight={'800px'}
                  strength={200}
        >
          <div className='img img-responsive' style={{'height': '900px','paddingBottom':'200px'}}>
            <div className='insideP1'>Fun for the whole family!</div>
          </div>
        </Parallax>
        
        <div id='under1'>
          <h3>Experience the thrill of floating through the air with California's premier parasail operator. We specialize in providing the safest, easiest and most exciting watersports activity- PARASAILING! Breathtaking panoramic views of Oceanside await as you are gently lifted to your chosen altitude.</h3>
        </div>
        
        <Parallax bgImage={'https://i.ytimg.com/vi/2HVPsdcgKRs/maxresdefault.jpg'} 
                  blur={{min: 10,max:-10}}
        
        >
          <div style={{height: 800}}>
            <div id='insideP2'>Way up there!</div>
          </div>
        </Parallax>
        
        <div id='under1'>
          <h3>Choose from 600 or 800 foot flights. Share in the fun. Bring your friends and family. Flights accommodate two or three at a time. Oceanside Parasail is dedicated to safety, all captains are USCG licensed.</h3>
        </div>
        
        <Parallax bgImage={'/images/p1p1.jpg'} 
                  bgHeight={'800px'}
                  strength={-200}>
          <div style={{height: 500}}>
            <div>   
              In here                
           </div>
          </div>
        </Parallax>

        <div id='under1'>
          <h3>Our goal is to provide the safest and most memorable parasail experience for our customers. Our experienced, friendly, and professional staff are driven to make your parasailing experience at Oceanside Parasail the highlight of your stay.</h3>
        </div>
        <div>

        </div>
        <h2>{'\u2728'}</h2>
      </div>
    )
  }
}
