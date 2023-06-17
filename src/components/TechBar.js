import React, { useState } from "react";

function TechBar(props) {
    const handleUpClick= ()=>{
        console.log("Button has been clicked "+ value)
        const val = value.toLowerCase();
        setValue(val)
    }
    const handleOnChange =(event)=>{
        console.log("There is some value the user has put in ")
        setValue(event.target.value)
    }
  const [value, setValue] = useState("This is state function");
  return (
    <div>
      <h1>{props.head}</h1>
      <div className="mb-3 my-3">
        <textarea className="form-control" value={value} id="myBox" rows="8" onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}  >Convert to Lower  case</button>
    </div>
  );
}

export default TechBar;
