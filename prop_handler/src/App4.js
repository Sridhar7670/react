import { useState } from "react";

function App4(){
    const [temp,settemp]=useState("")
    const[a,seta]=useState([])
    function fun(e){
    settemp(e.target.value)
    }
    function fun1(){
        seta([...a,temp])
        settemp("")
    }
    function fun2(value){
        const newitems=a.filter((i)=>i !== value)
        seta(newitems)
    }
    return(
       <div>
         <input onChange={fun} value={temp}/>
         <button onClick={fun1}>Add</button>
         {
         a.length>0 && a.map((i,ind)=>{
            return (
                    <div key={ind}>
                        <div>{i}</div>
                        <button onClick={()=>fun2(i)}>Delete</button>
                    </div>
         )
                                    }
        ) 
        
        }
       </div>
    )
}
export default App4