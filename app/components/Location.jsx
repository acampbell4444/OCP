import React, { Component } from 'react'
import GoogleMap from './GoogleMap'

export default class Location extends Component {
  componentDidMount() {
    document.body.style.backgroundColor='white'
  }
  componentWillUnmount() {
    document.body.style.backgroundColor='#2F3C99'
  }
  render() {
    return (
      <div>
      <h1 className='flex exMarg'>Location</h1>
      <div className='container' >
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.086964880247!2d-117.90228538479671!3d33.603047980730544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce06cbeb1ff89%3A0x572a9b57a980b592!2sBalboa+Parasail!5e0!3m2!1sen!2sus!4v1519456695622" 
width="100%" height="600" frameBorder="0" style={{"border":0}} allowFullScreen></iframe>
      </div>
         <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>




        <div id='skyWrap'>
          <div id="clouds">
            <div className="star f"></div>
            <div className="star g"></div>
            <div className="star h"></div>
            <div className="star i"></div>
            <div className="star j"></div>
            <div className="star k"></div>
            <div className="star l"></div>
            <div className="star m"></div>
            <div className="star o"></div>
            <div className="star p"></div>
            <div className="star q"></div>
            <div className="cloud A"></div>
            <div className="cloud B"></div>
            <div className="cloud C"></div>
            <div className="cloud D"></div>
            <div className="cloud E"></div>
        </div>
      </div>
    </div>
    )
  }
}