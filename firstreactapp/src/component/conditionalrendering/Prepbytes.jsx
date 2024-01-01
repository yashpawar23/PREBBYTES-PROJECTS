import React from 'react'

const Prepbytes = () => {
   const CodeMore = true;
  return (
    <div>
    <div style={{textAlign:'center',fontSize:'40px',color:'grey',backgroundColor:'black'}}>HELLO.. I AM YASH PAWAR & I AM FROM MAHARASHTRA</div>
    <div>
         {CodeMore && <h2>WE WILL PLACED ACCENTURE</h2>}   
         {CodeMore ? <h2>WE WILL PLACED ACCENTURE</h2>:<h2>WE WILL NOT PLACED IN ACCENTURE</h2>}           
    </div>
    </div>
  )
}

export default Prepbytes