import React, { Component } from 'react'

export default class Bubbles extends Component {
  constructor(props) {
    super(props)
    this.state = {bub1:'on',bub2:'on',bub3:'on',bub4:'on',bub5:'on',bub6:'on',bub7:'on',bub8:'on',bub9:'on',bub10:'on', 
                  popCount: 1, moreBubbles: false
                  }
    this.handleButtonPop = this.handleButtonPop.bind(this)
    this.blowMoreBubbles = this.blowMoreBubbles.bind(this)
  }
  handleButtonPop(bubName){
    this.setState({[bubName]: 'off'})
    this.setState({popCount:this.state.popCount+1})
    if(this.state.popCount>=10){this.setState({moreBubbles:true})}
      console.log('count',this.state.popCount)
  }
  blowMoreBubbles(){
    for(var i=1; i<11; i++){
      let bub = 'bub'+i.toString()
      this.setState({[bub]:'on'})
    }
    this.setState({moreBubbles: false})
    return this.setState({popCount:1})
    console.log('steelo',this.state)
  }

  render() {
    return (
      <div>
        <div id="background-wrap" onClick={e=> this.setState({intiateMobileMove:true})}>
          <div className={'bubble x1 '+ 'bub'+this.state.bub1} onClick={e=> this.handleButtonPop('bub1')}></div>
          <div className={'bubble x2 '+ 'bub'+this.state.bub2} onClick={e=> this.handleButtonPop('bub2')}></div>
          <div className={'bubble x3 '+ 'bub'+this.state.bub3} onClick={e=> this.handleButtonPop('bub3')}></div>
          <div className={'bubble x4 '+ 'bub'+this.state.bub4} onClick={e=> this.handleButtonPop('bub4')}></div>
          <div className={'bubble x5 '+ 'bub'+this.state.bub5} onClick={e=> this.handleButtonPop('bub5')}></div>
          <div className={'bubble x6 '+ 'bub'+this.state.bub6} onClick={e=> this.handleButtonPop('bub6')}></div>
          <div className={'bubble x7 '+ 'bub'+this.state.bub7} onClick={e=> this.handleButtonPop('bub7')}></div>
          <div className={'bubble x8 '+ 'bub'+this.state.bub8} onClick={e=> this.handleButtonPop('bub8')}></div>
          <div className={'bubble x9 '+ 'bub'+this.state.bub9} onClick={e=> this.handleButtonPop('bub9')}></div>
          <div className={'bubble x10 '+ 'bub'+this.state.bub10} onClick={e=> this.handleButtonPop('bub10')}></div>
          {this.state.moreBubbles&&(
            <div className={'bubble x11'} onClick={this.blowMoreBubbles}></div>
            )
          }
        </div>
      </div>
    )
  }
}