import React ,{useState} from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    
    const handleUpClick = () =>{
        if(text===" "){
           alert("Enter a text to convert to Uppercase");  
        }
        else{
            let newtext = text.toUpperCase();
            setText(newtext);
        }
        
    }

    const handleLowClick = () =>{
        let newtext2 = text.toLowerCase();
        setText(newtext2);
    }

    const handleFirstLetterCapClick = () =>{
        let newtext3 = text.split(" ");

        for (let i = 0; i < newtext3.length; i++) {
            newtext3[i] = newtext3[i][0].toUpperCase() + newtext3[i].substring(1);   
        }
        setText(newtext3.join(" "));
        
    }

    const handleClearTextClick = () =>{
        let newtext4 = ' ';
        setText(newtext4);
    }

    

    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }}  id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>

            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleFirstLetterCapClick}>Capitalize first letter of every word</button>

            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearTextClick}>Clear text</button>
        </div>

    
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words, {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Enter Something in above textbox to preview here"}</p>
        </div>
        </>
    )
}
