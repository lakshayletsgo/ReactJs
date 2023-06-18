import React from 'react'
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TechBar from "./components/TechBar";
import Alert from './components/Alert';

function App() {
  const[mode, setMode] = useState('light');
  const [alert, setAlert]= useState(null);
  const showAlert = (message,alert)=>{
    setAlert({
      msg:message,
      type:alert,
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert(" Dark Mode Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode Enabled","success");
    }
  }
  
  return (
    <>
      <Navbar title="TextConvertor" home="Home" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <TechBar head="Text to Upper and Lower Case" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
