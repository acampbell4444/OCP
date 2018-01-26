import React, { Component } from 'react'
import { Scroll, Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Parallax } from 'react-parallax'
import Navbar from '../containers/NavigationContainer'
import Intro from '../containers/IntroContainer'
import Parallax1 from '../components/Parallax1'

const image2 = 'https://v478pa.bn1.livefilestore.com/y2m2yJeC7UfWJ9AiIG8Lm4_K5BiN1yRU84tMlBtxQ-7Llr9oV4XYEYyr8l0j8eXPbFroKrD1f9KKjY_jURbKC5lA_rS6h6mOBZVgCeZknD6I9VAl126yEzdzPTXk0KX_Tdd/air.jpg?psid=1'
const image3 = 'https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001'

export default class Home extends Component {
  render() {
    const { navBarActive, scrollToTop, scrollToBottom, scrollTo, scrollMore } = this.props
    return (
      <span>
        <div className='navbar sticky-top navbar-light bg-light'>
          <div className='' id={'navBar'+navBarActive}>
            <Navbar />
          </div>
        </div>
        <div id='introContainer'>
            <Intro/>
        </div>

          <Parallax1/>
            <Element name='2' className='element'>
             <h1>test 2</h1>
           </Element>
         <Parallax bgImage={image3} blur={{min: -2, max: 3}}>
           <div style={{height: 500}}>
             <div >Dynamic Blur</div>
           </div>
         </Parallax>
         <h1>
           <Element name='3' className='element'>
             <h1>test 3</h1>
           </Element>
         </h1>
        <Parallax bgImage={image2} strength={-300}>
          <div style={{height: 500}}>
            <div >Reverse direction</div>
          </div>
        </Parallax>

          <h1>
           <Element name='4' className='element'>
             <h1>test 4</h1>
           </Element>

               <Parallax bgImage={image2} strength={-300}>
          <div style={{height: 500}}>
            <div >Reverse direction</div>
          </div>
        </Parallax>
         </h1>
        <a onClick={scrollToTop}>To the top!</a>
        <br/>
        <a onClick={scrollToBottom}>To the bottom!</a>
        <br/>
        <a onClick={scrollTo}>Scroll to 100px from the top</a>
        <br/>
        <a onClick={scrollMore}>Scroll 100px more from the current position!</a>
      </span>
    )
  }
}
