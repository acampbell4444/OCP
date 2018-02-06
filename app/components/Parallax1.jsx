import React, { Component } from 'react';
import { render } from 'react-dom';
import { Parallax } from 'react-parallax';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 = "https://v478pa.bn1.livefilestore.com/y2m2yJeC7UfWJ9AiIG8Lm4_K5BiN1yRU84tMlBtxQ-7Llr9oV4XYEYyr8l0j8eXPbFroKrD1f9KKjY_jURbKC5lA_rS6h6mOBZVgCeZknD6I9VAl126yEzdzPTXk0KX_Tdd/air.jpg?psid=1";
const image3 = "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";

export default class Par1 extends Component {
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div style={styles}>
    <Parallax bgImage={image1}
      strength={500}>
      <div style={{height: 500}}>
        <div style={insideStyles}>HTML inside the parallax</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image3} blur={{min: -1,max:3}}>
      <div style={{height: 500}}>
        <div style={insideStyles}>Dynamic Blur</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image2} strength={-100}>
      <div style={{height: 500}}>
        <div style={insideStyles}>Reverse direction</div>
      </div>
    </Parallax>
    <div style={{height: 500}}>
      </div>
    <h2>{'\u2728'}</h2>
  </div>
    )
  }
}
