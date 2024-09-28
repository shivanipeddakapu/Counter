//! using States  create increment , decrement , reset buttons
import React, { Component }  from "react";
import "./index.css";
export default class App  extends Component{
constructor(props){
  super(props)
  this.state={
   count:0,
   time:toLocaleString
  }

}


increment=()=>{
  this.setState({count:this.state.count+1})
}
decrement=()=>{
  this.setState({count:this.state.count-1})
}
zero=()=>{
  this.setState({count:0})
}
date=()=>{
  this.setState({date:new Date().toLocaleString()})
}
render(){
  return(
  
   <>
   <div className="container">
    <img src="https://cdn.pixabay.com/photo/2019/10/16/09/09/doraemon-4553920_1280.png" alt="dora" height="500px" width="500px" />
   <h2>{this.state.date}</h2>
    <div id="id"><h1>{this.state.count}</h1></div>
    <div id="btn1"> <button onClick={this.increment}>+</button></div>
    <div id="btn2"><button onMouseOver={this.decrement}>-</button></div>
   <div id="btn3"> <button onClick={this.zero}>Reset</button></div>
    </div>
  
    
    </>
  )
}
}
