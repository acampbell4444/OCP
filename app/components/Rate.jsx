import React, { Component } from 'react'

export default class Rate extends Component {
  componentDidMount(){
  }
  componentWillUnmount(){
  }
  render() {
    return (
<div id='rateCanvas' style={{'background': "url('/images/city-vector.jpg')"}}>
  <div className="parachute">
    <div className="parachute__img img-responsive" style={{'background': "url('/images/parasailer.svg') no-repeat"}}>    </div>
  </div>

  <div className="plane" style={{'background': "url('/images/aeroplane.svg') no-repeat"}}>></div>

</div>

    )
  }
}
