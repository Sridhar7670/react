import InputField from "./components/InputField"
import DisplayField from "./components/DisplayField"
import {useState} from 'react'
import './App.css';

function App1() {
  const [text,setText]=useState("")
  return (
    <div className="container" style={{margin:"20vh 42vw"}}>
      <InputField text={text} setText={setText}/>
      <DisplayField text={text}/>

    </div>
  )
}

export default App1;
