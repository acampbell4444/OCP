import React, { Component } from 'react'
import { Link } from 'react-scroll'
import Icon from 'react-icons-kit'
import { home, calendar, coinDollar } from 'react-icons-kit/icomoon'
import { dollar } from 'react-icons-kit/fa/dollar'
import { question } from 'react-icons-kit/fa/question'
import { camera } from 'react-icons-kit/entypo/camera'
import { phone } from 'react-icons-kit/icomoon/phone'
import { location2 } from 'react-icons-kit/icomoon/location2'

export default class Navigation extends Component {
  render() {
    const { updateNavbarActive, navBarActive, currentSection, handleSectionChange } = this.props
    return (
      <div className='row center'>
        
        <div className='col-3 col-sm-2' >
          <div className='icon-wrapper' id={'navActive'+(currentSection===1).toString()} onClick={e => handleSectionChange(1) }>
            <Icon size={80} icon={home}></Icon>
           </div>
        </div>
        
        <div className='col-3 col-sm-2'>
          <div className={'icon-wrapper two'} id={'navActive'+(currentSection===2).toString()} onClick={e => handleSectionChange(2) }>
            <Icon size={80} icon={calendar}></Icon>
          </div>
       </div>
       
       <div className='col-3 col-sm-2'>
          <div className={'icon-wrapper three'} id={'navActive'+(currentSection===3).toString()} onClick={e => handleSectionChange(3) }>
              <Icon size={80} icon={dollar}></Icon>
          </div>
        </div>
          
        <div className='col-3 col-sm-2'>
          <div className='icon-wrapper' id={'navActive'+(currentSection===4).toString()} onClick={e => handleSectionChange(4) }>
            <Icon size={80} icon={location2}></Icon>
          </div>
        </div>
        
        <div className='col-3 col-sm-2'>
          <div className={'icon-wrapper'} id={'navActive'+(currentSection===5).toString()} onClick={e => handleSectionChange(5) }>
            <Icon size={100} icon={question}></Icon>
          </div>
        </div>
        
        <div className='col-3 col-sm-2'>
          <div className={'icon-wrapper'} id={'navActive'+(currentSection===6).toString()} onClick={e => handleSectionChange(6) }>
            <Icon size={80} icon={phone}></Icon>
          </div>
        </div>
        
      </div>
    )
  }
}
