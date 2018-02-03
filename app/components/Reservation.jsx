import React from "react";
import { render } from "react-dom";
import Modal from "react-responsive-modal";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class App extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>


          <button onClick={this.onOpenModal} >
          Show Calendar</button>
            

     
        <h2>react-responsive-modal</h2>
       
        <Modal id='reservationModal' open={open} onClose={this.onCloseModal} big>
          <h2>Simple centered modal</h2>
          <iframe id="bookingcalendar" 
                src="https://secure.webreserv.com/services/bookingcalendar.do?businessid=ocparasail&embedded=y&search=0&avgrid=y&css=/assets/css/bookingcalendar-2.0/theme-white-blue.css" 
                style={{'width': '100%', 'maxWidth': '1800px', 'height': '2200px', 'marginTop':'15%' }} 
                frameBorder="0">
                <a href="https://secure.webreserv.com/services/bookingcalendar.do?businessid=ocparasail&embedded=y&search=0&avgrid=y&css=/assets/css/bookingcalendar-2.0/theme-white-blue.css">Make Reservation</a>
              </iframe>
        </Modal>
      </div>
    );
  }
}



{/*      <div className='resContainer'>
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
      </div>*/}