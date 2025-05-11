import { memo } from "react";
const Chip=memo(({i,ind,delskill})=>{
        return(
             <div > {/* `key={ind}` is for React, not passed inside `Chip` */}
                        <span>{i}</span>
                        <button onClick={()=>delskill(ind)}>Remove Skill</button>
                        {console.log("rendered")}
            </div>
        )
    });

export default Chip