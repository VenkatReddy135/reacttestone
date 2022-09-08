import React, { Component } from 'react'

export default class ClassButton extends Component {
    constructor(props){
        super(props)
        this.state={name:"venkat"}
        console.log('1')
    }
    static getDerivedStateFromProps(props,state){
        console.log('2')
        return state;
    }
    componentDidMount(){
        console.log('4')
    }
       add=()=>{
        console.log("i was clicked")
       }
    
    
  render() {
    console.log('3')
      
    return (
      <div>
        <h1>Class Component Check</h1>
        <button onClick={this.add}> ADD</button>
      </div>
    )
  }
}
