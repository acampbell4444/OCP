import React, { Component } from 'react'

export default class Reservation extends Component {
  render() {
    return (
      <div className='resContainer'>
      <div className='scrollContainer'>

<div className='container1'></div>
<div className='container2'></div>
<div className='container3'></div>
<div className='content'></div>
<div className='bookincalendarContainer center'  >
    <iframe id="bookingcalendar" 
          src="https://secure.webreserv.com/services/bookingcalendar.do?businessid=ocparasail&embedded=y&search=0&avgrid=y&css=/assets/css/bookingcalendar-2.0/theme-white-blue.css" 
          style={{'width': '100%', 'maxWidth': '1800px', 'height': '2200px', 'marginTop':'15%' }} 
          frameBorder="0">
          <a href="https://secure.webreserv.com/services/bookingcalendar.do?businessid=ocparasail&embedded=y&search=0&avgrid=y&css=/assets/css/bookingcalendar-2.0/theme-white-blue.css">Make Reservation</a>
        </iframe>
  </div>
  </div>




{/*

      <div>
      	<h1>Reservation Component. Do some work.</h1>

      	<iframe id="bookingcalendar" 
      	  src="https://secure.webreserv.com/services/bookingcalendar.do?businessid=ocparasail&embedded=y&search=0&avgrid=y&css=/assets/css/bookingcalendar-2.0/theme-white-blue.css" 
      	  style={{'width': '100%', 'maxWidth': '800px', 'height': '1200px', 'border': '0', 'padding': '0', 'margin': '0'}} 
      	  frameBorder="0">
      	  <a href="https://secure.webreserv.com/services/bookingcalendar.do?businessid=ocparasail&embedded=y&search=0&avgrid=y&css=/assets/css/bookingcalendar-2.0/theme-white-blue.css">Make Reservation</a>
      	</iframe>
      </div>*/}
      </div>
    )
  }
}

