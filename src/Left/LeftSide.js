import React, { Component } from 'react'
import Name from './Name'

export default class LeftSide extends Component {
    render() {
       var name=this.props.seta.map(ele=>{
            return <Name name={ele.name} handelEventSelector={this.props.handelEventSelector}  ele={ele}/>
        })
        return (
            <div className="left">
                    <div className="Instructors">
                        <h2 className="coror">Welcome to</h2>
                        <h4 className="coror">Instructors board</h4>
                    </div>
                    {name}
        </div>
        )
}
}
