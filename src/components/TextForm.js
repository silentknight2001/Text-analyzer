import React, { useState } from "react";


export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("UpperCase was " + text);

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Uppper case", "success");

  }

  const handleLoClick = ()=> {

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to Lower case", "success");
  }
  const handleClearClick = ()=>{

    let newText = '';
    setText(newText);
  }

  const handlecopy =()=>{
    
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy", "success");
  }

  const ExtraSpace =()=>{

    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("removed extra-space", "success");

  }  
 

  const handleOnChange = (event) => {
    // console.log("on Change")
    setText(event.target.value)
  };

  const [text, setText] = useState('Enter text here');

  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'black':'white', color : props.mode==='dark'?'white':'black'}}
          id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy text</button>
      <button className="btn btn-primary mx-2" onClick={ ExtraSpace }>Remove-Extra Space</button>

    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and  {text.length} characters</p>
      <p>{0.08 * text.split(" ").length} minut's need to read</p>

      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter somting in the textBox above to preview it"}</p>

    </div>
    </>
  );
}

