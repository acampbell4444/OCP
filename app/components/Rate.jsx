import React, { Component } from 'react'
import { browserHistory } from 'react-router'

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
           <h1 id='rateHeader'> Prices and Deals </h1>
        <div className="parachute">
           <div className="parachute__img" style={{'background': "url('/images/longRope.svg') no-repeat"}}>    </div>
         </div>
         <div className="plane" style={{'background': "url('/images/aeroplane.svg') no-repeat"}}></div>
        <div className='onTop2'>
            <div className="row">
                <div className="col-sm-6 ">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">600' Flight <br/><span className='smTit'> $65 per person</span></h5>
                      <p className="card-text">Fly higher than a skyscraper. Take off and land right on the boat. Stay
                      dry if you would like.</p>
                      <button onClick={e => browserHistory.push('/reservations')}className="btn btn-primary cardBook">Book Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">800' Flight <br/><span className='smTit'> $75 per person</span></h5>
                      <p className="card-text">For those thrill-seekers that are looking for a little bit extra. This trip is 200 feet higher!</p>
                      <button onClick={e => browserHistory.push('/reservations')}className="btn btn-primary cardBook">Book Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <div className="card">
                    <div id='padLong' className="card-body">
                      <h5 className="card-title">Non-Flying Passenger <br/><span className='smTit'> $25 per person</span></h5>
                      <p className="card-text">Don't want to fly- but still want to catch all the fun? No problem. If you decide to upgrade
                      during the trip, great! Seats available on standby basis unless reserved by phone.</p>
                      <a id='phoneText' className="btn btn-primary" href="tel:555-555-5555">
                        Call to Book
                        <br/>
                         <p>555-555-5555</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Photo or GoPro Package <br/><span className='smTit'> $30 per group</span></h5>
                      <p id='litLong' className="card-text">With the photo options- we take your pictures from the boat. With the goPro option, we give
                      you the equipment to take up with you. In both cases, you get to keep an SD card with your photos or video.</p>
                      <button className="btn btn-primary">Ask for this option at our booth when you get here</button>
                    </div>
                  </div>
                </div>
             </div>

              <div className="row">
                <div className="col-sm-6 ">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Birthday Special <br/><span className='smTit'> FREE flight</span></h5>
                      <p className="card-text">Free flight for the birthday person with one paid 800ft flight.  Offer can NOT be combined with any other discounts and can NOT be applied on the 600ft. Must reserve for two people on the 800ft flight, and show a valid ID for proof of birthday at check in. Must fly tandem.
                        Reservations recommended. Flight must be on your actual birthday.</p>
                        <a id='phoneText' className="btn btn-primary" href="tel:555-555-5555">
                         Call to Book
                        <br/>
                         <p>555-555-5555</p>
                        </a>
                      </div>
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Group Rates<br/><span className='smTit'> Based on Availability</span></h5>
                      <p id='mkLonger' className="card-text">Have a group of 4 people or more? We will offer a discount proportional to the number of total passengers
                      and our current availabilities. Have a large group? Family reunion? Corporate event? Want to rent the boat out
                      for an entire day? Give us a call, we'd love to talk!</p>
                    <a id='phoneText' className="btn btn-primary" href="tel:555-555-5555">
                      Call to Book
                      <br/>
                         <p>555-555-5555</p>
                       </a>
                    </div>
                  </div>
                </div>
                </div>

            </div>
           <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>

        </div>

      </span>
    )
  }
}
