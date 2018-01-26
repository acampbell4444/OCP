
import React, { Component } from 'react'
import { Link } from 'react-scroll'
import Icon from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon'
//import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class Navigation extends Component {
   render() {
      const { updateNavbarActive, navBarActive, currentSection, handleSectionChange } = this.props
    return (
      <div>v
        <div className={'icon-wrapper'} id={'navActive'+(currentSection===1).toString()} onClick={e => handleSectionChange(1) }>
          <Link activeClass="active " to="1" spy={true} smooth={true} 
            offset={-100} duration={1500} onSetActive={e => {updateNavbarActive(true); handleSectionChange(1)}} 
            onSetInactive={e => updateNavbarActive(false)}
            onClick={e => handleSectionChange(1) }
          >
            <Icon size={50} icon={home}></Icon>
          </Link>
        </div>
       
       <div className={'icon-wrapper'} id={'navActive'+(currentSection===2).toString()} onClick={e => handleSectionChange(2) }>
          <Link activeClass="active " to="2" spy={true} smooth={true} 
            offset={-100} duration={1500} onSetActive={e => {updateNavbarActive(true); handleSectionChange(2)}} 
            onSetInactive={e => updateNavbarActive(false)}
            onClick={e => handleSectionChange(2) }
          >
            <Icon size={50} icon={home}></Icon>
          </Link>
        </div>
        
        <Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>
          <div className='icon-wrapper'>
            <Icon size={50} icon={home} className='custom-icon'>
              <span className="fix-editor">&nbsp;</span>
            </Icon>
          </div>
        </Link>
      </div>
    )
  }
}