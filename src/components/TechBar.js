import React, { useState } from "react";

function TechBar(props) {
    const handleUpClick= ()=>{
        // console.log("Button has been clicked "+ value)
        const val = value.toLowerCase();
        setValue(val)
    }
    const handleLowClick= ()=>{
        // console.log("Button has been clicked "+ value)
        const val2 = value.toUpperCase();
        setValue(val2)
    }
    const handleClearClick=()=>{
      const val = ' ';
      setValue(val);
    }

    const handleToggleClick=()=>{
      value.split("").forEach(element => {
        if(parseInt(element)>97||parseInt(element)<122){
          element.toUpperCase();
        }else{
          element.toLowerCase();
        }
      });
      setValue(value)
    }
    const handleOnChange =(event)=>{
        console.log("There is some value the user has put in ")
        setValue(event.target.value)
    }
  const [value, setValue] = useState("");
  return (
    <div>
      <h1>{props.head}</h1>
      <div className="mb-3 my-3">
        <textarea className="form-control" value={value} id="myBox" rows="8" onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Lower  case</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Upper  case</button>
      <button className="btn btn-primary mx-2" onClick={handleToggleClick}>Toggle Text</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <h3>You have entered </h3>
      <h5>No of letters: {value.length}</h5>
      <h5>No of words: {value.split(" ").length}</h5>
      <h4>You can read this entire paragraph in {0.008*value.split(" ").length} min</h4>
      <h3>Preview</h3>
      <p>{value}</p>
    </div>
    
  );
}

export default TechBar;
