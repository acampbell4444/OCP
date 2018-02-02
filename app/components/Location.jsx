import React, { Component } from 'react'

export default class Location extends Component {
  componentDidMount(){
    document.body.style.backgroundColor='red'
  }
  componentWillUnmount(){
    document.body.style.backgroundColor='white'
  }
  render() {
    return (
      <div className='jumbotron well'>
        <h2>Location Page Under Construction. Check Back Soon!</h2>
      </div>
    )
  }
}