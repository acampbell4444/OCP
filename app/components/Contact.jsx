import React, { Component } from 'react'

export default class Contact extends Component {
  componentDidMount(){
    document.body.style.backgroundColor='red'
  }
  componentWillUnmount(){
    document.body.style.backgroundColor='white'
  }

  render() {
    return (
      <div className='jumbotron well'>
        <h2>Contact Page Under Construction. Check Back Soon!</h2>
      </div>
    )
  }
}