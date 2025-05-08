import { useState } from "react";
import "./App.css";

function App1() {
  const [color, setColor] = useState(""); // Selected color
  const [sectionColors, setSectionColors] = useState(["", "", ""]); // Colors for each section

  const Fun = (index) => {
    const updatedColors = [...sectionColors];
    updatedColors[index] = color;
    setSectionColors(updatedColors);
  };

  return (
    <div>
      <div className="btn">
        <button style={{ backgroundColor: "Blue" }} onClick={() => setColor("Blue")}>Blue</button>
        <button style={{ backgroundColor: "Orange" }} onClick={() => setColor("Orange")}>Orange</button>
        <button style={{ backgroundColor: "Green" }} onClick={() => setColor("Green")}>Green</button>
      </div>

      <div className="selection">
        {sectionColors.map((bg,i)=>{
          return(
            <div key={i} onClick={()=>Fun(i)} style={{backgroundColor:bg}}>section {i+1} </div>
          )
        })}
      </div>
    </div>
  );
}

export default App1;
