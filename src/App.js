// import logo from './logo.svg';
import React from 'react'

import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TechBar from "./components/TechBar";

function App() {
  const[mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextConvertor" home="Home" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TechBar head="Text to Upper and Lower Case" mode={mode}/>
        {/* <div className="my-5">
      <About/>
        </div> */}
      </div>
    </>
  );
}

export default App;
