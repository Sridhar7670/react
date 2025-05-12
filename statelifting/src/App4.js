import { useCallback,useState } from "react";
import Chip from "./chip";
function App4(){
    const [skills , setSkills]=useState([])
    const [temp,setTemp]=useState('')
    const addSkills=  useCallback( ()=>{
        if (temp.trim()!==""){
        setSkills(skills=>[...skills,temp])
        setTemp("")
        console.log(skills)}
    },[temp,skills])  // Dependency array ensures that addSkills is only re-created when `temp`,`skills` changes
    const delskill=useCallback((i)=>{
        setSkills(skills=> skills.filter((_,ind) => ind!==i ))
        
    },[])
    

    return(
        <div>
            <input 
            onChange={(e)=>setTemp(e.target.value)} 
            onKeyUp={(e)=>{
                if(e.key==="Enter")
                {addSkills()}}
                }
            placeholder="enter skill"
            value={temp}/>
            <button onClick={addSkills} >Add</button>

            {skills.length> 0 && <div className="skill-container">
                {skills.map((i,ind)=>
                (
                    <Chip key={ind} i={i} ind={ind} delskill={delskill}/>
                ))}
                    </div>}
        </div>
    )
}export default App4;