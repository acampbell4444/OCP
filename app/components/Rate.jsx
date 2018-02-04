import React, { Component } from 'react'

export default class Rate extends Component {
  componentDidMount() {
    document.body.style.backgroundColor='black'
  }
  componentWillUnmount() {
    document.body.style.backgroundColor='#2F3C99'
  }
  render() {
    return (
<span id='turkey'>
<div id='rateCanvas' style={{'background': "url('/images/city-vector.jpg') no-repeat"}}>
  <div className="parachute">
    <div className="parachute__img img-responsive" style={{'background': "url('/images/parasailer.svg') no-repeat"}}>    </div>
  </div>

  <div className="plane" style={{'background': "url('/images/aeroplane.svg') no-repeat"}}></div>

</div>
</span>

    )
  }
}
