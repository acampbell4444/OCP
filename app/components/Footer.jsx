import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    const { currentSection, handleSectionChange, navShow } = this.props
    return (
      <div>
        <footer>
          <p>
            <span className='animatedText'>
              OCEANSIDE PARASAIL
           </span>
        </p>
        </footer>
      </div>
    )
  }
}
