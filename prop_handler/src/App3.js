import { useReducer } from "react"
function App3(){
    const [state, dispatch] = useReducer((state, action)=>{
        switch (action.type){
            case "v1":
                return {...state ,"v1":false}
            case "v2":
                return {...state ,"v2":false}
            case "v3":
                return {...state ,"v3":false}
        }
    },{v1:true,v2:true,v3:true})
    return(
        <div>
            <h1>Parent Component</h1>
            <div>Child componet</div>
            <ul>
                <li>Learnt react {state.v1?<button onClick={()=>dispatch({"type":"v1"})}>Completed</button>:null}</li>
                <li>LEarn gaming {state.v2? <button onClick={()=>dispatch({"type":"v2"})}>Completed</button>:null}</li>
                <li>Earning started {state.v3?<button onClick={()=>dispatch({"type":"v3"})}>Completed</button>:null}</li>
            </ul>
        </div>
    )
}export default App3