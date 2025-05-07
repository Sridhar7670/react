import { useReducer } from 'react';


function Usereducer(){
    const [state,dispatch]=useReducer((state,action)=>{
        switch (action.type){
            case "inc":
                return{...state,"c1":state.c1+1}
            case "dec":
                return {...state,"c1":state.c1-1}
            case "reset":
                return {...state,"c1":0}
            case "inc c2":
                return {...state,"c2":state.c2+1}
            case "dec c2":
                return {...state,"c2":state.c2-1}
            case "inc c3":
                return {...state,"c2":state.c2+1}
            case "dec c3":
                return {...state,"c2":state.c2-1}
            default:
                throw new Error(`Unknown action type: ${action.type}`);
            
        }
    },{"c1":0,"c2":0,"c3":0})
    return(
        <div style={{textAlign:"center",margin:"10vh"}}>        
            <h1>{state.c1}</h1>
            <button onClick={()=>dispatch({type:"inc"})}>Increment</button>
            <button onClick={()=>dispatch({type:"dec"})}>Decrement</button>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
            {/* <button onClick={()=>dispatch({type:"some random"})}>Reset</button> */}

            <h1>{state.c2}</h1>
            <button onClick={()=>dispatch({type:"inc c2"})}>Increment</button>
            <button onClick={()=>dispatch({type:"dec c2"})}>Increment</button>
            <button onClick={()=>dispatch({type:"reset"})}>Increment</button>

            <h1>{state.c3}</h1>
            <button onClick={()=>dispatch({type:"inc c3"})}>Increment</button>
            <button onClick={()=>dispatch({type:"dec c3"})}>Increment</button>
            <button onClick={()=>dispatch({type:"reset"})}>Increment</button>

        </div>
    )

}

export function Clock(){
    const [state,dipatch]=useReducer((state,action)=>{
        switch (action.type){
            case "start":
                setInterval(inc,1000)
            break 
            case "stop":
                
                

        }

    })
}
export default Usereducer;