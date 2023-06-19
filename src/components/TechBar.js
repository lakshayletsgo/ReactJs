import React, { useState } from "react";

function TechBar(props) {
  const handleUpClick = () => {
    const val = value.toLowerCase();
    setValue(val);
    props.showAlert("Converted to Lower Case","success");
  };
  const handleLowClick = () => {
    const val2 = value.toUpperCase();
    setValue(val2);
    props.showAlert("Converted to Upper Case","success");
  };
  const handleClearClick = () => {
    const val = "";
    setValue(val);
    props.showAlert("Area Cleared","success");
  };
  const handleCopyText = () => {
    const txt = document.getElementById("myBox");
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showAlert("Copied to clipboard ","success")
  };

  const handleOnChange = (event) => {
    console.log("There is some value the user has put in ");
    setValue(event.target.value);
  };
  const valueEval=(vale)=>{
    let arr = vale.split(" ");
    if(arr[arr.length-1]===""){
      return vale.split(" ").length-1;
    }else{
      return vale.split(" ").length;
      
    }
  }
  const [value, setValue] = useState("");
  return (
    <div className="container mt-4" 
    style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.head}</h1>
      <div className="mb-3 my-3">
        <textarea
          className="form-control"
          value={value}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Lower case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert to Upper case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopyText}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear Text
      </button>
      <h3 className="mt-5">You have entered </h3>
      <h5>No of letters: {value.length}</h5>
      <h5>No of words: {valueEval(value)}</h5>
      <h4 className="mt-4">
        You can read this entire paragraph in {0.008 * value.split(" ").length}{" "}
        min
      </h4>
      <h3 className="mt-3">Preview</h3>
      <p>{value.length>0?value:"Enter something to preview"}</p>
    </div>
  );
}

export default TechBar;
