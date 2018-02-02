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
    const { updateNavbarActive, navBarActive, currentSection, handleSectionChange, handleHover, hoverState, handleIconLeave, iconJustLeft } = this.props
    return (
      <div className='row center'>
        <div className='flex' >
          <div className={'icon-wrapper one'} id={'navActive'+(currentSection===1).toString()} 
                onClick={e => {handleSectionChange(1); handleHover(1)} }
          >
            {hoverState!==1&&(<Icon size={80} id='taco' icon={home}></Icon>)}
            {hoverState===1&&(<h3 id='iconTextHm'>HOME</h3>)}
           </div>
        </div>
        
        <div className='flex' >
          <div className={'icon-wrapper two'} id={'navActive'+(currentSection===2).toString()} 
                onClick={e => {handleSectionChange(2); handleHover(2)} }
          >
            {hoverState!==2&&(<Icon size={80} icon={calendar}></Icon>)}
            {hoverState===2&&(<h3 id='iconTextCl'>BOOK NOW</h3>)}
           </div>
        </div>
       
        <div className='flex' >
          <div className={'icon-wrapper three'} id={'navActive'+(currentSection===3).toString()} 
               onClick={e => {handleSectionChange(3); handleHover(3)} }
          >
            {hoverState!==3&&(<Icon size={80} icon={dollar}></Icon>)}
            {hoverState===3&&(<h3 id='iconTextRt'>RATES</h3>)}
           </div>
        </div>
          
        <div className='flex'>
          <div className='icon-wrapper' id={'navActive'+(currentSection===4).toString()} onClick={e => handleSectionChange(4) }>
            <Icon size={80} icon={location2}></Icon>
          </div>
        </div>
        
        <div className='flex'>
          <div className={'icon-wrapper'} id={'navActive'+(currentSection===5).toString()} onClick={e => handleSectionChange(5) }>
            <Icon size={100} icon={question}></Icon>
          </div>
        </div>
        
        <div className='flex'>
          <div className={'icon-wrapper'} id={'navActive'+(currentSection===6).toString()} onClick={e => handleSectionChange(6) }>
            <Icon size={80} icon={phone}></Icon>
          </div>
        </div>
        
      </div>
    )
  }
}
