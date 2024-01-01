import { useEffect, useState } from "react";
const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];

export default function Deopdown() {
  // state to store the value of the country
  const [country,setCountry] = useState([])
  useEffect(()=>{

  },[country])
 console.log("HELLOW \"YASH PAWAR\"")
  return (
    <div className="App">
     {/* DropDown 1 */}
      <select 
      value={country}
      onChange={(e)=>{
        setCountry(e.target.value)
      }}
      >
        {countries.map((item,index)=>{
            return (
                <option key={index} value={index}>{item.name}</option>
            )
        })}
      </select>

      {/* Drop Down2 */}
      <select>
        {countries[country] && 
          countries[country].cities.map((item,index)=>{
            return(
                <option value={index}>{item}</option>
            )
          })
         }
         
      </select>
        
    </div>
  );
}
