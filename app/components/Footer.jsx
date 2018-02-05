import React, { Component } from 'react'
import Icon from 'react-icons-kit'
import { home, calendar} from 'react-icons-kit/icomoon'
import { browserHistory } from 'react-router'

export default class Navigation extends Component {
  render() {
    const { currentSection, handleSectionChange, navShow } = this.props
    return (
      <div>
        <footer>
          <div className='container footContain'>
            <div className='row'>
              
              <div onClick={e => browserHistory.push('/home')} className='col-sm-3'>
                <p id='hmClick' className='orangeText'>Oceanside Parasail</p>
              </div>

              <div className='col-sm-6'>
                <p>
                  <span>
                    <a href="https://goo.gl/maps/DmgW1W2qGgR2" 
                       className='orangeText'
                       target="_blank">1395 1/2 N. Harbor Dr.<br/>Oceanside, CA</a>
                  </span>
                </p>
              </div>

              <div className='col-sm-3'>
                <p><a href="tel:555-555-5555" className='orangeText'>555-555-5555</a></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
