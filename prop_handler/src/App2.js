import { useState } from "react"

function App2(){
    const [visble,SetVisble]=useState(true)
    return(
        <div>
            <h1>Parent Component</h1>
            <div>Child componet</div>
            <ul>
                <li>Learnt react {visble ?<button onClick={()=>SetVisble(false)}>Completed</button>:null  }</li>
                <li>LEarn gaming {visble ?<button onClick={()=>SetVisble(false)}>Completed</button>:null  }</li>
                <li>Earning started {visble ?<button onClick={()=>SetVisble(false)}>Completed</button>:null  }</li>
            </ul>
        </div>
    )
}export default App2