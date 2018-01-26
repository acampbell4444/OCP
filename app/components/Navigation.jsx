import React, { Component } from 'react'
import { Link } from 'react-scroll'
import Icon from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon'
//  import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class Navigation extends Component {
  render() {
    const { updateNavbarActive, navBarActive, currentSection, handleSectionChange } = this.props
    return (
      <div className='row'>
        <div className='col-3 col-sm-1 center'>
          <div className='icon-wrapper' id={'navActive'+(currentSection===1).toString()} onClick={e => handleSectionChange(1) }>
            <Link activeClass="active " to="1" spy={true} smooth={true}
              offset={-100} duration={1500} onSetActive={ e => { updateNavbarActive(true); handleSectionChange(1) } }
              onSetInactive={e => updateNavbarActive(false)}
              onClick={e => handleSectionChange(1) }
            >
              <Icon size={40} icon={home}></Icon>
            </Link>
          </div>
        </div>
        <div className='col-3 col-sm-1 center'>
          <div className={'icon-wrapper'} id={'navActive'+(currentSection===2).toString()} onClick={e => handleSectionChange(2) }>
            <Link activeClass="active " to="2" spy={true} smooth={true}
              offset={-100} duration={1500} onSetActive={ e => { updateNavbarActive(true); handleSectionChange(2) } }
              onSetInactive={e => updateNavbarActive(false)}
              onClick={e => handleSectionChange(2) }
            >
              <Icon size={40} icon={home}></Icon>
            </Link>
          </div>
        </div>
        <div className='col-3 col-sm-1 center'>
          <div className={'icon-wrapper'} id={'navActive'+(currentSection===3).toString()} onClick={e => handleSectionChange(3) }>
            <Link activeClass="active " to="3" spy={true} smooth={true}
              offset={-100} duration={1500} onSetActive={ e => { updateNavbarActive(true); handleSectionChange(3) } }
              onSetInactive={e => updateNavbarActive(false)}
              onClick={e => handleSectionChange(3) }
            >
              <Icon size={40} icon={home}></Icon>
            </Link>
          </div>
        </div>

                <div className='col-3 col-sm-1 center'>
          <div className='icon-wrapper' id={'navActive'+(currentSection===1).toString()} onClick={e => handleSectionChange(1) }>
            <Link activeClass="active " to="1" spy={true} smooth={true}
              offset={-100} duration={1500} onSetActive={ e => { updateNavbarActive(true); handleSectionChange(1) } }
              onSetInactive={e => updateNavbarActive(false)}
              onClick={e => handleSectionChange(1) }
            >
              <Icon size={40} icon={home}></Icon>
            </Link>
          </div>
        </div>
        <div className='col-3 col-sm-1 center'>
          <div className={'icon-wrapper'} id={'navActive'+(currentSection===2).toString()} onClick={e => handleSectionChange(2) }>
            <Link activeClass="active " to="2" spy={true} smooth={true}
              offset={-100} duration={1500} onSetActive={ e => { updateNavbarActive(true); handleSectionChange(2) } }
              onSetInactive={e => updateNavbarActive(false)}
              onClick={e => handleSectionChange(2) }
            >
              <Icon size={40} icon={home}></Icon>
            </Link>
          </div>
        </div>
        <div className='col-3 col-sm-1 center'>
          <div className={'icon-wrapper'} id={'navActive'+(currentSection===3).toString()} onClick={e => handleSectionChange(3) }>
            <Link activeClass="active " to="3" spy={true} smooth={true}
              offset={-100} duration={1500} onSetActive={ e => { updateNavbarActive(true); handleSectionChange(3) } }
              onSetInactive={e => updateNavbarActive(false)}
              onClick={e => handleSectionChange(3) }
            >
              <Icon size={40} icon={home}></Icon>
            </Link>
          </div>
        </div>

        <div className='col-3 col-sm-1 center'>
          <div className={'icon-wrapper'} id={'navActive'+(currentSection===2).toString()} onClick={e => handleSectionChange(2) }>
            <Link activeClass="active " to="2" spy={true} smooth={true}
              offset={-100} duration={1500} onSetActive={ e => { updateNavbarActive(true); handleSectionChange(2) } }
              onSetInactive={e => updateNavbarActive(false)}
              onClick={e => handleSectionChange(2) }
            >
              <Icon size={40} icon={home}></Icon>
            </Link>
          </div>
        </div>
        <div className='col-3 col-sm-1 center'>
          <div className={'icon-wrapper'} id={'navActive'+(currentSection===3).toString()} onClick={e => handleSectionChange(3) }>
            <Link activeClass="active " to="3" spy={true} smooth={true}
              offset={-100} duration={1500} onSetActive={ e => { updateNavbarActive(true); handleSectionChange(3) } }
              onSetInactive={e => updateNavbarActive(false)}
              onClick={e => handleSectionChange(3) }
            >
              <Icon size={40} icon={home}></Icon>
            </Link>
          </div>
        </div>

      </div>
    )
  }
}
