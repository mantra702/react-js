import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './navbar'

  export default function App() {

    const [text, setText] = useState("");
  
    const getTextData = (event) => {
  
      const myText = event.target.value;
  
      setText(myText)

    }

         
  const convertToUpper = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  }

  const convertToconcat = () => {
    setText(String(text).charAt(0).toUpperCase() + String(text).slice(1));
  }

  const convertToLower = () => {
    const uppercaseText = text.toLowerCase();
    setText(uppercaseText);
  }

  
  return <>
  <NavBar title="Word Counter" />
    
    <div className="container my-4">
      <div className="mb-3">
        <h2>Enter text to below</h2>
        <textarea className="form-control" value={text} onChange={getTextData} placeholder={text} id="my-box" rows="8"></textarea>
      </div>

      <button className='btn btn-primary' onClick={convertToUpper} >Convert To UpperCase</button>
      <button className='btn btn-info ms-2' onClick={convertToLower} >Convert To LowerCase</button>
      <button className='btn btn-success ms-2' onClick={convertToconcat} >Convert To TitleCase</button>
    </div>

    <div className="container">
      <h2>My Summary</h2>
      <p>{(text != "") ? text.split(' ').length : "0"} Words and {text.length} Characters</p>
      <p>{(text != "") ? text.split(' ').length * 0.004 : 0} Minutes for Read</p>

      <h2>Preview</h2>
      <p>{text}</p>

    </div>
      
    </>
  
}
