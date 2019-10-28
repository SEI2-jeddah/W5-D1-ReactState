import React, { Component } from 'react'
import './App.css'
import LeftSide from './Left/LeftSide'
import Data from './Data'
import Right from './right/RightSide'
export default class App extends Component {

state={
  seta: Data,
  EventSelect :null
}
handelEventSelector=(ele)=>{
  this.setState({
    EventSelect: ele
  })
}

  render() {
    return (
      <div>
        <div className="contenerpord">
          
      <LeftSide seta={this.state.seta} handelEventSelector={this.handelEventSelector}/>
      {this.state.EventSelect!==null &&<Right EventSelect={this.state.EventSelect}/>}


        </div>
      </div>
    )
  }
}


