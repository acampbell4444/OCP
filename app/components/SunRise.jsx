import React, { Component } from 'react'
import {browserHistory} from 'react-router'
import Par1 from './Parallax1'
import Icon from 'react-icons-kit';
import { circleDown } from 'react-icons-kit/icomoon/circleDown';

export default class SunRise extends Component {
  constructor(props) {
    super(props)
    this.state = { }
    this.mm = this.mm.bind(this)
  }

  mm(e) { 
    const updateDimensions = () => {
      if( typeof( window.innerWidth ) == 'number' ) {
        myWidth = window.innerWidth
        myHeight = window.innerHeight
      } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
        myWidth = document.documentElement.clientWidth
        myHeight = document.documentElement.clientHeight
      } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
        myWidth = document.body.clientWidth
        myHeight = document.body.clientHeight
      }
    }
    let mouse = {x: 0, y: 0}
    let myWidth = 0, myHeight = 0
    let mouseIsDown = false
    let mouseIsDownDivision = false
    const startMove = () => mouseIsDown = true
    
    const stopMove = () => {
      mouseIsDown = false
      mouseIsDownDivision = false
      var sky = document.getElementById('sun')
    }
    
    const startDraggingDivision = () => mouseIsDownDivision = true
    
    const windowResize = () => {
      updateDimensions()
      var skyHeight = document.getElementById('horizon').clientHeight
      skyHeight = document.getElementById('sun').clientHeight
      document.getElementById('waterDistance').style.height = myHeight - skyHeight
      document.getElementById('division').style.top = skyHeight
    }
    mouse.x = e.clientX || e.pageX 
    mouse.y = e.clientY || e.pageY
    updateDimensions()
    document.getElementById('sun').style.background = '-webkit-radial-gradient(' + mouse.x + 'px ' + mouse.y + 'px, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)'
    document.getElementById('sun').style.background = '-moz-radial-gradient(' + mouse.x + 'px ' + mouse.y + 'px, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)'
    document.getElementById('sun').style.background = '-ms-radial-gradient(' + mouse.x + 'px ' + mouse.y + 'px, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)'
    document.getElementById('sunDay').style.background = '-webkit-radial-gradient(' + mouse.x + 'px ' + mouse.y + 'px, circle, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)'
    document.getElementById('sunDay').style.background = '-moz-radial-gradient(' + mouse.x + 'px ' + mouse.y + 'px, circle, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)'
    document.getElementById('sunDay').style.background = '-ms-radial-gradient(' + mouse.x + 'px ' + mouse.y + 'px, circle, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)'
    document.getElementById('sunSet').style.background = '-webkit-radial-gradient(' + mouse.x + 'px ' + mouse.y + 'px, circle, rgba(254,255,255,0.8) 5%,rgba(236,255,0,1) 10%,rgba(253,50,41,1) 25%, rgba(243,0,0,1) 40%,rgba(93,0,0,1) 100%)'
    document.getElementById('sunSet').style.background = '-moz-radial-gradient(' + mouse.x + 'px ' + mouse.y + 'px, circle, rgba(254,255,255,0.8) 5%,rgba(236,255,0,1) 10%,rgba(253,50,41,1) 25%, rgba(243,0,0,1) 40%,rgba(93,0,0,1) 100%)'
    document.getElementById('sunSet').style.background = '-ms-radial-gradient(' + mouse.x + 'px ' + mouse.y + 'px, circle, rgba(254,255,255,0.8) 5%,rgba(236,255,0,1) 10%,rgba(253,50,41,1) 25%, rgba(243,0,0,1) 40%,rgba(93,0,0,1) 100%)'
    document.getElementById('waterReflectionContainer').style.perspectiveOrigin = (mouse.x/myWidth*100).toString() + '% -15%'
    document.getElementById('waterReflectionMiddle').style.left = (mouse.x-myWidth-(myWidth*.03)).toString() + 'px'
    var bodyWidth = document.getElementsByTagName('span')[0].clientWidth
    document.getElementById('sun').style.width = (bodyWidth)
    document.getElementById('sun').style.left = '0px'
    document.getElementById('sunDay').style.width = (bodyWidth)
    document.getElementById('sunDay').style.left = '0px'
    var sky = document.getElementById('sun')
    var water = document.getElementById('water')
    var waterHeight = water.clientHeight
    var skyHeight = sky.clientHeight
    var skyRatio = mouse.y / skyHeight
    var waterRatio = waterHeight / myHeight
    document.getElementById('darknessOverlay').style.opacity = Math.min((mouse.y-(myHeight/2)) / (myHeight/2), 1)
    document.getElementById('darknessOverlaySky').style.opacity = Math.min((mouse.y-(myHeight*7/10)) / (myHeight-(myHeight*7/10)), 1)
    document.getElementById('moon').style.opacity = Math.min((mouse.y-(myHeight*9/10)) / (myHeight-(myHeight*9/10)), 0.65)
    document.getElementById('horizonNight').style.opacity = (mouse.y-(myHeight*4/5)) / (myHeight-(myHeight*4/5))
    document.getElementById('starsContainer').style.opacity = (mouse.y/myHeight-0.6)
    document.getElementById('waterDistance').style.opacity = (mouse.y/myHeight+0.6)
    document.getElementById('sunDay').style.opacity = (1-mouse.y/myHeight)
    document.getElementById('sky').style.opacity = Math.min((1-mouse.y/myHeight), 0.99)
    document.getElementById('sunSet').style.opacity = (mouse.y/myHeight-0.2)

    if(mouse.y > 0) {
      let clouds = document.getElementsByClassName('cloud')
      for(let i=0; i<clouds.length; i++) {
        clouds[i].style.left = Math.min(myWidth*(Math.pow(mouse.y,2)/Math.pow(myHeight/2,2)) * -1, 0)
      }

      let stars = document.getElementsByClassName('star')
      for(let i=0; i<stars.length; i++) {
        stars[i].style.opacity = (mouse.y/myHeight-0.6)
      }

      if(mouse.y > myHeight/2) {
        document.getElementById('sun').style.opacity = Math.min((myHeight-mouse.y) / (myHeight/2) + 0.2, 0.5)
        document.getElementById('horizon').style.opacity = (myHeight-mouse.y) / (myHeight/2) + 0.2
        document.getElementById('waterReflectionMiddle').style.opacity = (myHeight-mouse.y) / (myHeight/2) - 0.1
      } else {
        document.getElementById('horizon').style.opacity = Math.min(mouse.y / (myHeight/2), 0.99)
        document.getElementById('sun').style.opacity = Math.min(mouse.y / (myHeight/2), 0.5)
        document.getElementById('waterReflectionMiddle').style.opacity = mouse.y / (myHeight/2) - 0.1 
      }

    } else if (mouseIsDownDivision) {
      let sunElement = document.getElementById('sun')
      let water = document.getElementById('water')
      var division = document.getElementById('division')
      sunElement.style.height = (mouse.y).toString() + 'px'
      document.getElementById('sunDay').style.height = (mouse.y).toString() + 'px'
      division.style.top = (mouse.y).toString() + 'px'
      waterHeight = myHeight-mouse.y
      water.style.height = waterHeight.toString() + 'px'

      document.getElementById('sun').style.height = (mouse.y).toString() + 'px'
      document.getElementById('sunDay').style.height = (mouse.y).toString() + 'px'
      document.getElementById('horizon').style.height = (mouse.y).toString() + 'px'
      document.getElementById('waterDistance').style.height = (myHeight-mouse.y).toString() + 'px'
      document.getElementById('oceanRippleContainer').style.height = (myHeight-mouse.y).toString() + 'px'
      document.getElementById('darknessOverlay').style.height = (myHeight-mouse.y).toString() + 'px'
    }
  }
  componentDidMount() {
    document.addEventListener('mousemove', this.mm, false)
    document.body.style.backgroundColor='black'
  }
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mm, false)
    document.body.style.backgroundColor='#2F3C99'
  }
  render() {
    return (
      <div id='sRiseOuter'>
      <span id='sRise' onMouseDown={this.startMove} onTouchStart={this.startMove} onClick={this.startMove} onMouseUp={this.stopMove} >
        <div className='homeContentWrapper flex'>
          <h1 className='flex' id='sunriseHeader'>OCEANSIDE PARASAIL</h1>
          <div className='center flex'>
            <button id='BN' onClick={() => browserHistory.push('/reservations')}>
              <span id='bkTxt'> BOOK NOW</span>
            </button>
          </div>
          <h2 className='onTop' id='homeTagline'>If you can sit, you can FLY!</h2>
          <Icon className="onTop arrow bounce" size={140} icon={circleDown}></Icon>

          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          <h1 className='clear' id='sunriseHeader'></h1>
          
      
          <h1 className='clear' id='sunriseHeader'></h1>
        </div>

        <div id='starsContainer' onMouseDown={this.startMove} onTouchStart={this.startMove} onMouseUp={this.stopMove}>
          <div id='stars' onMouseDown={this.startMove} onTouchStart={this.startMove} onMouseUp={this.stopMove}></div>
        </div>
        <div id='sun' onMouseDown={this.startMove} onTouchStart={this.startMove} onMouseUp={this.stopMove}></div>
        <div id='sunDay' onMouseDown={this.startMove} onTouchStart={this.startMove} onMouseUp={this.stopMove}></div>
        <div id='sunSet' onMouseDown={this.startMove} onTouchStart={this.startMove} onMouseUp={this.stopMove}></div>
        <div id='sky' onMouseDown={this.startMove} onTouchStart={this.startMove} onMouseUp={this.stopMove}> </div>
        <div className='star' style={{'left': '250px', 'top': '30px'}}></div>
        <div className='star' style={{'left': '300px', 'top': '25px'}}></div>
        <div className='star' style={{'right': '40px', 'top': '40px'}}></div>
        <div className='star' style={{'right': '80px', 'top': '45px'}}></div>
        <div className='star' style={{'right': '120px', 'top': '20px'}}></div>
        <div id='horizon' onMouseDown={this.startMove} onTouchStart={this.startMove} onMouseUp={this.stopMove}></div>
        <div id='horizonNight' onMouseDown={this.startMove} onTouchStart={this.startMove} onMouseUp={this.stopMove}></div>
        <div id='moon' onMouseDown={this.startMove} onTouchStart={this.startMove} onMouseUp={this.stopMove}></div>
        <div id='mountainRange'>
          <div id='mountain' onMouseDown={this.startMove} onTouchStart={this.startMove} onMouseUp={this.stopMove}></div>
        </div>
        <div id='division' onMouseDown={this.startDraggingDivision} onMouseUp={this.stopMove}></div>
        <div id='water' onMouseDown={this.startMove} onTouchStart={this.startMove} onMouseUp={this.stopMove}></div>
        <div id='waterReflectionContainer' onMouseDown={this.startMove} onTouchStart={this.startMove} onMouseUp={this.stopMove}>
          <div id='waterReflectionMiddle' onMouseDown={this.startMove} onTouchStart={this.startMove} onMouseUp={this.stopMove}></div>
        </div>
        <div id='waterDistance' onMouseDown={this.startMove} onTouchStart={this.startMove} onMouseUp={this.stopMove}></div>
        <div id='darknessOverlaySky' onMouseDown={this.startMove} onTouchStart={this.startMove} onMouseUp={this.stopMove}></div>
        <div id='darknessOverlay'></div>
        <div id='oceanRippleContainer'></div>
        <div id='oceanRipple'></div>
      </span>
        <h2 className='flex onTop'><Par1/></h2>
      </div>
    )
  }
}
