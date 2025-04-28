import React,{useState} from 'react';

export default function Textform(props) {
    const handleUpClick = () => {
        let newText=text.toUpperCase();
        setNewtext(newText);
    }
    const handleLoClick = () => {
        let newText=text.toLowerCase();
        setNewtext(newText);
    }
    const handleFindandReplace = () => {
        const findword=prompt("Enter the word to find");
        const repword=prompt("Enter the word to replace it with");

        if(findword!==null && repword!==null){
            const regex=new RegExp(findword,"gi");
            const repltext=text.replace(regex,repword);
            setText(repltext);
            setNewtext(repltext);

        }

        
    }
    const  handleClearText= () => {
        setText("");
        setNewtext("");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);

    }
    


    const [text, setText] = useState('');
    const [newText,setNewtext] = useState('')

  return (
    <>
    <div className="container"  style={{color: props.mode==='dark'?'white':'black'}}>
    <div className="container">
    <div className="d-flex justify-content-between align-items-center my-2">
    <h2>{props.title}</h2>
  
  </div>

    <div className="mb-3"> 
    <textarea className="form-control" value= {text} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black' }} id="myBox" rows="5" onChange={handleOnChange}></textarea>
    </div>
    <div className="d-flex justify-content-between align-items-start flex-wrap my-3">
  <div>
    <button className="btn btn-success mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-success mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-success mx-2 my-1" onClick={handleFindandReplace}>Find and Replace</button>
    <button className="btn btn-success mx-2 my-1" onClick={handleClearText}>Clear Text</button>
  </div>

  <div
    className="text-end"
    style={{
      minWidth: '200px',
      padding: '10px',
      border: props.mode === 'dark' ? '1px solid #444' : '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: props.mode === 'dark' ? '#1e1e1e' : '#f8f9fa',
      color: props.mode === 'dark' ? 'white' : 'black',
    }}
  >
    <h6 className="mb-2">Text Summary</h6>
    <p className="mb-1">
      {(text.trim().split(/\s+/).filter((word) => word.length !== 0)).length} words
    </p>
    <p className="mb-0">{text.length} characters</p>
  </div>
</div>
</div>
    <div className="conatiner ">
    <h3>Fixed Text</h3>
    <div
    style={{
      backgroundColor: props.mode === 'dark' ? 'grey' : '#f8f9fa',
      color: props.mode === 'dark' ? 'white' : 'black',
      padding: '1rem',
      borderRadius: '8px',
      border: props.mode === 'dark' ? '1px solid #444' : '1px solid #ccc',
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap',
      minHeight: '100px'
    }}
  >
    {newText.length > 0 ? newText : "Nothing to display."}
  </div>
    
 
    </div>
    </div>
    </>
    
  );
}
