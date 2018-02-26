import React, { Component } from 'react'
import Icon from 'react-icons-kit'
import { home, calendar} from 'react-icons-kit/icomoon'
import { browserHistory } from 'react-router'

export default class Navigation extends Component {
  render() {
    const { currentSection, handleSectionChange, navShow, footShow } = this.props
    return (
      <div>
       {footShow&&(
        <footer>
          <div className='container footContain'>
            <div className='row'>
              
              <div onClick={e => browserHistory.push('/home')} className='col-sm-3'>
                <p id='hmClick' className='blueText'>Oceanside Parasail</p>
              </div>

              <div className='col-sm-6'>
                <p>
                  <span>
                    <a href="https://goo.gl/maps/DmgW1W2qGgR2" 
                       className='blueText'
                       target="_blank">123 Example St.</a>
                  </span>
                </p>
              </div>

              <div className='col-sm-3'>
                <p><a href="tel:555-555-5555" className='blueText'>555-555-5555</a></p>
              </div>
            </div>
          </div>
        </footer>
      )}
      </div>
    )
  }
}
