import { useState } from "react"
import "./App.css"
function App2(){
    const [c,setc]=useState(0)
    const[showball,setShowBall]=useState(false)
    
    function rightclick(e){e.preventDefault(); setc((c)=>c+5)

    }
    return(
        <div>
            {showball === false ?<button onClick={()=>setShowBall(true)} >Start</button> :null}
        
        {showball && 
            <div style={{position:"absolute"}}>
                <div className="ball" onContextMenu={rightclick} style={{left:`${c}px`}}></div>
            </div>
        }
        </div>
    )
}
export default App2