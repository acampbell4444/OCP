import React, { Component } from 'react'

export default class Rate extends Component {
  componentDidMount() {
    document.body.style.backgroundColor='#2181DD'
  }
  componentWillUnmount() {
    document.body.style.backgroundColor='#2F3C99'
  }
  render() {
    return (
      <span id='turkey' style={{'background': "url('/images/city-vector.jpg') no-repeat"}}>
       <div id='rateCanvas' >
         <div className="parachute">
           <div className="parachute__img" style={{'background': "url('/images/longRope.svg') no-repeat"}}>    </div>
         </div>
         <div className="plane" style={{'background': "url('/images/aeroplane.svg') no-repeat"}}></div>
        </div>
      </span>
    )
  }
}
