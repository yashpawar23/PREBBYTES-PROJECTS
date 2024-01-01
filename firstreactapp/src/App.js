


import React from "react";
import FirstStyle from "./component/FirstStyle"
import CheckStatus from "./component/conditionalrendering/CheckStatus";
import Prepbytes from "./component/conditionalrendering/Prepbytes";
import RoutingCmp from "./component/Routing/RoutingCmp";
import { Route, Routes } from "react-router-dom";
import Home from '../src/component/Routing/Home'
import About from '../src/component/Routing/About'
import PropsCmp from "./component/Routing/PropsCmp";
import CleanUpcmp from "./component/CleanUpcmp";
import FetchAxioscmp from "./component/FetchAxioscmp";
import AcceptApi from "./component/AcceptApi";
import UseContextcmp from "./component/UseContextcmp";


const App = () => {

   const Name = "yash"
  return (<div>
    <UseContextcmp/>
    <RoutingCmp/>
     <h1>HELLOW YASH</h1>
    <FirstStyle data={Name}/>
   <CheckStatus status={true}/>
<PropsCmp   student={{name:"Yash"}}/>
    <Prepbytes/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
<AcceptApi/>
    </Routes>
    <CleanUpcmp/>
    <FetchAxioscmp/>


   
  </div>)
  

}

export default App

