import React , {useState } from "react";

export default function TextForm(props) {
    const handleOnchange = (event)=> {
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
    // let newText = document.getElementById("textBox");
    // newText.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!","success")
  
}

    const [text, setText] = useState("");

  return (
    <>
    <div className={`text-${props.mode==="light"?"#6c757d":"light"} bg-${props.mode==="light"?"light":"#6c757d"}`}>
    <h1 className="mb-2">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnchange} id="textBox" rows="6" placeholder="Enter text here"></textarea>
      </div>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lowercase</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className={`container text-${props.mode==="light"?"#6c757d":"light"} bg-${props.mode==="light"?"light":"#6c757d"}my-3`}>
      <h2>Your input Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Nothing to preview!"}</p>
    </div>
    </>
  );
}
