import { memo } from "react";
import "material-icons/iconfont/material-icons.css"
const Chip=memo(({i,ind,delskill})=>{
        return(
             <div className="skill"> {/* `key={ind}` is for React, not passed inside `Chip` */}
                        <span>{i}</span>
                        <button onClick={()=>delskill(ind) }className="material-icons" style={{fontSize:"10px"}}>close</button>
                        {console.log("rendered")}
            </div>
        )
    });

export default Chip