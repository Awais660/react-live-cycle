import logo from './logo.svg';
import './App.css';
import React from 'react';

class Student extends React.Component{

    
  componentWillUnmount(){
    console.log("will update");
  }

render(){
  return (
    <div className="App">
      <h1>student component</h1>
    </div>
  );
}
}

export default Student;
