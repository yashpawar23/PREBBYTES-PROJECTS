import React from "react";
import './Firststyle.css';


const FirstStyle = (props)=>{
    const Name=props.data;
    const calldiv = ()=>{
        alert("give 100rs")
    }
    const hovers = () => {
        prompt("Give me tips")
    }
  return <div> 
     <h1 className="Firststyle">YASH VIJAY PAWAR</h1>
     <button onClick={calldiv} className="btn">Click here</button>
     <h1 onMouseMove={hovers}>HOVER ME</h1>
     <div>
        {Name}
     </div>
    </div>
  
}

export default FirstStyle

