import React , {useState } from "react";

export default function TextForm(props) {
    const handleOnchange = (event)=> {
        // console.log("handleOnchange");
        setText(event.target.value);
    }

    const handleUpClick = ()=> {
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into UpperCase!","success")
    }
    const handleLowClick = ()=> {
      
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted into LowerCase!","success")
  }
  const handleClearClick = ()=> {
    
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!","success")
}
const handleExtraSpace = ()=> {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extera spaces removed!","success")
}
const handleCopy = ()=> {
    let newText = document.getElementById("textBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to clipboard!","success")
  
}

// const handleReverseClick = ()=> {
//   
//   let newText = text;
//   setText(newText);
// }

    const [text, setText] = useState("");

  return (
    <>
    <div className={`text-${props.mode==="light"?"#6c757d":"light"} bg-${props.mode==="light"?"light":"#6c757d"}`}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnchange} id="textBox" rows="6" placeholder="Enter text here"></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
      {/* <button type="button" className="btn btn-primary mx-1" onClick={handleReClick}>Reverse Text</button> */}
      <button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className={`container text-${props.mode==="light"?"#6c757d":"light"} bg-${props.mode==="light"?"light":"#6c757d"}my-3`}>
      <h2>Your input Summary</h2>
      <p>{text.length===0?"0":(text.trim(" ")).split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Enter your text in the above box to preview here"}</p>
    </div>
    </>
  );
}
