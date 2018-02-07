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
        </div>
        </div>
      )
    }
}

const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}
]
