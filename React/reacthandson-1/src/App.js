import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Component/FunctionComponent';
import ClassComponent from './Component/ClassComponent';
import React, { useState } from 'cd';

function App() {
  const [show,showPost] =useState(false)
  
const FuncComponent =()=>{
  showPost(!show)
}
const [cshow ,cshowPost]=useState(false)
const ClasComponent = ()=>{
  cshowPost(!cshow)
}
  
  return (
    <div>
      <h1 className='heading'>Styling Using Functional & Class Component</h1>
      <button className="button1" onClick={FuncComponent}>To see styling in functional component</button>
      <button className="button2" onClick={ClasComponent}>To see styling in class component</button>
       
      <div className="flex">
       {show?  <FunctionComponent/> :"" }
        {cshow? <ClassComponent/> :""}
      </div>
      
    </div>
  );
}

export default App;
