import logo from './logo.svg';
import './App.css';
import React from 'react';
import Student from './Student';

class Component extends React.Component{
  constructor(){
    super();
    this.state={
      name:"awais"
    }

    this.state={
      count:0
    }

    this.state={
      show:true
    }
  }

  componentDidMount(){
    
  }

  componentDidUpdate(preProps,preState,snapshot){
    console.log(preState);
  }

  // shouldComponentUpdate(){
  //   console.log(this.state.count);
  //   if(this.state.count>5 && this.state.count<10){
  //   return true;
  //   }
  // }


render(){
  return (
    <div className="App">
      <h1>hello world  {this.state.name}</h1>
      <button onClick={()=>this.setState({name:"asad"})}>update name</button>
      <br></br>
      <h1>hello world  {this.state.count}</h1>
      <button onClick={()=>this.setState({count:this.state.count+1})}>update name</button>

      <br></br>
      {
        this.state.show ? <Student /> : <h1>child remove</h1>
      }
      <button onClick={()=>this.setState({show:!this.state.show})}>Toggle</button>
    </div>
  );
}
}

export default Component;
