import React, { Component } from 'react'
import { Link } from 'react-scroll'
import Icon from 'react-icons-kit'
import { home, calendar} from 'react-icons-kit/icomoon'
import { dollar } from 'react-icons-kit/fa/dollar'
import { question } from 'react-icons-kit/fa/question'
import { camera } from 'react-icons-kit/entypo/camera'
import { phone } from 'react-icons-kit/icomoon/phone'
import { location2 } from 'react-icons-kit/icomoon/location2'
// import "font-awesome/css/font-awesome.css"

export default class Navigation extends Component {
  render() {
    const { currentSection, handleSectionChange } = this.props
    return (
      <div>{false&&(
      <div className='row center'>
        
        <div className='flex' >
          <div className={'flex icon-wrapper one'} id={'navActive'+(currentSection===1).toString()} onClick={e => handleSectionChange(1) }>
            {currentSection!==1 ? (<Icon size={80} className='iconDarken' icon={home}></Icon>) : (<h3 id='iconTextHm'>HOME</h3>)}
           </div>
        </div>
        
        <div className='flex' >
          <div className={'icon-wrapper two'} id={'navActive'+(currentSection===2).toString()} onClick={e => handleSectionChange(2) }>
            {currentSection!==2 ? (<Icon size={80} className='iconDarken' icon={calendar}></Icon>) : (<h3 id='iconTextCl'>BOOK NOW</h3>)}
           </div>
        </div>
       
        <div className='flex' >
          <div className={'icon-wrapper three'} id={'navActive'+(currentSection===3).toString()} onClick={e => handleSectionChange(3)}>
            {currentSection!==3 ? (<Icon size={80} className='iconDarken' icon={dollar}></Icon>) : (<h3 id='iconTextRt'>RATES</h3>)}
           </div>
        </div>
          
        <div className='flex'>
          <div className='icon-wrapper' id={'navActive'+(currentSection===4).toString()} onClick={e => handleSectionChange(4) }>
             {currentSection!==4 ? (<Icon size={80} className='iconDarken' icon={location2}></Icon>) : (<h3 id='iconTextLoc'>LOCATION</h3>)}
          </div>
        </div>
        
        <div className='flex'>
          <div className={'icon-wrapper'} id={'navActive'+(currentSection===5).toString()} onClick={e => handleSectionChange(5) }>
            {currentSection!==5 ? (<Icon size={100} className='iconDarken' icon={question}></Icon>) :  (<h3 id='iconTextFAQ'>FAQ</h3>)}
          </div>
        </div>
        
        <div className='flex'>
          <div className={'icon-wrapper'} id={'navActive'+(currentSection===6).toString()} onClick={e => handleSectionChange(6) }>
            {currentSection!==6 ? (<Icon size={80} className='iconDarken' icon={phone}></Icon>) : (<h3 id='iconTextContact'>CONTACT</h3>)}
        </div>
      </div>
    </div>
    )}</div>
    )
  }
}
