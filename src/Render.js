import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './user/User';

function Render() {
    const[name,setName]=React.useState("awais");
  return (
    <div className="App">
      <User name={name}/>
      {/* <button onClick={()=>setName("asad")}>update name</button> */}
    </div>
  );
  }

export default Render;
