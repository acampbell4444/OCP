import React from 'react'
import { render } from 'react-dom'
import Modal from 'react-responsive-modal'
import { Button } from 'react-bootstrap'
import $ from 'jquery'
import Icon from 'react-icons-kit'
import { calendar} from 'react-icons-kit/icomoon'

export default class Reservation extends React.Component {
  state = {open: false}

  componentDidMount() {
    document.body.style.backgroundColor='#2E389C'
  }

  componentWillUnmount() {

  }
  onOpenModal = () => {
    this.setState({ open: true })
    this.props.showNav(false)
    this.props.showFoot(false)
  }
  onCloseModal = () => {
    this.setState({ open: false })
    this.props.showNav(true)
    this.props.showFoot(true)
  }

  render() {
    const { open } = this.state
    return (
      <div id='reserveBody'>
        <div id='reserveCanvas'>
    

          {!open&&(
            <div className='row center abs'>
              <h1 id='reserveTitle' onClick={this.onOpenModal}>Reserve Your Spot Now!</h1>
              <button id='showCalendar' onClick={this.onOpenModal}><Icon id='bigCalendar' size={200} icon={calendar}></Icon></button>
            </div>
           )}
            <Modal id='reservationModal' open={open} onClose={this.onCloseModal} showCloseIcon={false}>
              <iframe id="bookingCalendar" 
                      src="https://secure.webreserv.com/services/bookingcalendar.do?search=0&css=/assets/css/bookingcalendar-2.0/theme-white-blue.css&businessid=ocparasail&avgrid=y&page=addtocart&back=productlist&ptid=216898" 
                      frameBorder="0"
              >
                <a href="https://secure.webreserv.com/services/bookingcalendar.do?businessid=ocparasail&embedded=y&search=0&avgrid=y&css=/assets/css/bookingcalendar-2.0/theme-white-blue.css">Make Reservation</a>
              </iframe>
              <Button id='closeModalBtn' className='btn btn-danger btn-xs' onClick={this.onCloseModal}>Close</Button>
            </Modal>
            <div className='row'>
              <span className="ripple"></span>
            </div>
        </div>
      </div>
    )
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