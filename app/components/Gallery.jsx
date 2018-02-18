import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';


export default class Gall extends React.Component {
    constructor(props){
        super(props);
        this.state = {showHeader: true}
    }
    componentDidMount() {
      document.body.style.backgroundColor='white'
    }
    componentWillUnmount() {
      document.body.style.backgroundColor='#2F3C99'
    }
    handleClose() {

    }
    render () {
      const {showNav, footShow} = this.props
      return (
        <div>
        
      <div id='skyWrap'>
        <div id="clouds">
          <div className="star f"></div>
          <div className="star g"></div>
          <div className="star h"></div>
          <div className="star i"></div>
          <div className="star j"></div>
          <div className="star k"></div>
          <div className="star l"></div>
          <div className="star m"></div>
          <div className="star o"></div>
          <div className="star p"></div>
          <div className="star q"></div>
          <div className="cloud A"></div>
          <div className="cloud B"></div>
          <div className="cloud C"></div>
          <div className="cloud D"></div>
          <div className="cloud E"></div>
      </div>
    </div>



         {this.state.showHeader&&(
            <h1 className='flex exMarg'>Gallery</h1>)
         }

        <div className='container' >
          <Gallery images={IMAGES}
                   lightboxWillClose={e => {footShow(true); showNav(true); this.setState({showHeader:true})}}
                   lightboxWillOpen={e => {footShow(false); showNav(false); ; this.setState({showHeader:false})}}
                   showNav={showNav}
                   footShow={footShow}
                   backdropClosesModal={true}
          />
           <h1 className='clear' id='sunriseHeader'></h1>
           <h1 className='clear' id='sunriseHeader'></h1>
           <h1 className='clear' id='sunriseHeader'></h1>
        </div>
        </div>
      )
    }
}

const IMAGES =
[{
        src: "../public/images/coolShot.jpg",
        thumbnail: "../public/images/coolShot.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 174,
        tags: [{value: "Cruisin"}],
        caption: "Picture yourself Cruisin' on the Open Water."
},
{
        src: "../public/images/takeOff2.jpg",
        thumbnail: "../public/images/takeOff2.jpg",
        thumbnailWidth: 200,
        thumbnailHeight: 174,
        tags: [{value: "Smooth"}],
        caption: "With our state of the art equipment, take offs and landings are a breeze."
},
{
        src: '../public/images/dolphinJump.jpg',
        thumbnail: '../public/images/dolphinJump.jpg',
        thumbnailWidth: 270,
        thumbnailHeight: 212,
        tags: [{value: "Dolphin"}],
        caption: "It is not uncommon to see dolphin pods, seals, whales, and more."
},
{
        src: '../public/images/longLine.jpg',
        thumbnail: '../public/images/longLine.jpg',
        thumbnailWidth: 220,
        thumbnailHeight: 280,
        tags: [{value: "Elevate"}],
        caption: "Ascending to your chosen altitude is smooth. Like a Hot Air Balloon ride. Trust us, it's smooth."
},
{
        src: '../public/images/highFeet.jpg',
        thumbnail: '../public/images/highFeet.jpg',
        thumbnailWidth: 220,
        thumbnailHeight: 212,
        tags: [{value: "Perspective"}],
        caption: "Change your perspective. That little green speck is our boat."
},
{
        src: '../public/images/tripleLilKev.jpg',
        thumbnail: '../public/images/tripleLilKev.jpg',
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Triple"}],
        caption: "Fly up to 2 or 3 at a time. Smiles all round."
},
{
        src: '../public/images/coupleDip.jpg',
        thumbnail: '../public/images/coupleDip.jpg',
        thumbnailWidth: 230,
        thumbnailHeight: 212,
        tags: [{value: "Dip"}],
        caption: "Take a dip. Just your toes- or up to your nose! Skip the dip if you want. Your call."
},
{
        src: '../public/images/takeOff.jpg',
        thumbnail: '../public/images/takeOff.jpg',
        thumbnailWidth: 200,
        thumbnailHeight: 212,
        tags: [{value: "Safe"}],
        caption: "We use the best equipment. Our staff is highly trained. 100% safety record."
},
{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}
]
