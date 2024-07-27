import React, {useState} from 'react'
import './button.css';

export default function TextForm(props) {
    const handleUpClick = ()=> {
        //console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success")
    }
    const handleOnChange = (event)=> {
        //console.log('On Change');
        setText(event.target.value);
    }
    const handleLowerClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Conerted to Lower Case", "success")
    }
    const handleClearClick = ()=> {
      let newText = '';
      setText(newText);
      props.showAlert("Text has been Cleared", "success")
  }
  const handleCopyClick = ()=> {
    navigator.clipboard.writeText(text).then(
      () => {
        //alert('Text copied to clipboard');
      },
      (err) => {
        //console.error('Failed to copy text: ', err);
      }
    );
    props.showAlert("Text has been Copid", "success")
}
const handleExSpaceClick = () => {
  let newText = text.split(/[ ]+/).join(" ");
  setText(newText);
  props.showAlert("Extra Spaces has been Removed", "success")
};
    const [text, setText] = useState('');
  return (
    <>
    <div className='container ' style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#000000' : 'white', color: props.mode==='dark' ? 'white' : 'black'}} id="MyBox" rows="8"></textarea>
</div>
<button className="btn btn primary" onClick={handleUpClick}>Upper Case</button>
<button className="btn btn primary" onClick={handleLowerClick}>Lower Case</button>
<button className="btn btn primary" onClick={handleExSpaceClick}>Remove Extra Spaces</button>
<button className="btn btn primary" onClick={handleCopyClick}>Copy</button>
<button className="btn btn primary" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h2>Your Text Summary</h2>
        {/*<p>{text.split(" ").length} words and {text.length} characters</p>*/}
        <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something in the Textbox above to Preview it"}</p>
    </div>
    </>
  )
}
