import React, { Component } from 'react'

export default class Class extends Component {
    constructor(props){
        super()
        this.state = {count : 0};
        this.increment = this.increment.bind(this)
        
    }
    increment(){
        this.setState({count : this.state.count - 2})
    }

  render() {
    return (
      <div>Class
        <h1>{this.props.data2}</h1>
            <p>{this.state.count}</p>
            <button onClick={this.increment}>increment class count</button>
            <h3>class </h3>
      </div>
    )
  }
}
