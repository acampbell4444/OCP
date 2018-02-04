import React, { Component } from 'react'
import Icon from 'react-icons-kit'
import { home, calendar} from 'react-icons-kit/icomoon'

export default class Navigation extends Component {
  render() {
    const { currentSection, handleSectionChange, navShow } = this.props
    return (
      <div>
        <footer>
          <div className='container footContain'>
            <div className='row'>
              
              <div className='col-sm'>
                <p><span className='animatedText'>OCEANSIDE PARASAIL</span></p>
              </div>

              <div className='col-sm'>
                <p><span className='animatedText'><a href="tel:555-555-5555">1-555-555-5555</a></span></p>
              </div>

              <div className='col-sm'>
                 <p>
                   <span className='animatedText'>
                     <a href="https://goo.gl/maps/DmgW1W2qGgR2" target="_blank">1395 1/2 North Harbor Drive <br/> Oceanside, CA 92054</a>
                    </span>
                  </p>
              </div>

              <div className='col-sm'>
                <div className='row footIcons'>
                    <div className='col-sm'>
                      <Icon size={20} icon={home}></Icon>
                    </div>
                    <div className='col-sm'>
                      <Icon size={20} icon={home}></Icon>
                    </div>
                    <div className='col-sm'>
                      <Icon size={20} icon={home}></Icon>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </footer>
      </div>
    )
  }
}
