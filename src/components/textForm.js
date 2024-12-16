import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState(''); 
    const handleUpClick= ()=>{
        console.log("Uppercase was clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted the text to upper case","success")
    }
    const handleLoClick= ()=>{
        console.log("Lowercase was clicked!" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted the text to lower case","success")
    }
    const handleOnClear= ()=>{
        // console.log("Lowercase was clicked!" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Cleared the text","success")
    }
    const handleonchange= (event)=>{
        setText(event.target.value)
    }
    return (
        <>
    <div>
        <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        {/* <label for="myBox" id="myBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleonchange} id="exampleFormControlTextarea1" rows="3"></textarea>
        <button type="submit" onClick={handleUpClick}  className="btn btn-primary mb-3 my-2">Convert to Uppercase
        </button>
        <button type="submit" onClick={handleLoClick}  className="btn btn-primary mb-3 my-2 mx-2">Convert to LowerCase
        </button>
        <button type="submit" onClick={handleOnClear}  className="btn btn-primary mb-3 my-2 mx-2">Clear Text
        </button>
        </div>
    </div>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p> {text.trim().split(/\s+/).length} words , {text.length} Characters</p>
        <p> No of Spaces - {text.split(" ").length-1}</p>
        <p> Average time - {0.08*text.split(" ").length} Minutes taken to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
</>
  )
}
