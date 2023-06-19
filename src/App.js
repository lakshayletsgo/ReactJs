import React from 'react'
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TechBar from "./components/TechBar";
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";


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
      document.title='TextUtils- Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode Enabled","success");
      document.title='TextUtils- Light Mode';
    }
  }
  
  return (
    <>
    <Router>
      <Navbar title="TextConvertor" home="Home" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<TechBar head="Text to Upper and Lower Case" mode={mode} showAlert={showAlert}/>}>
            
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
