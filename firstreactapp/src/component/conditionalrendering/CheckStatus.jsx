import React from 'react'
import UserLogin from "./UserLogin";
import UserLogout from "./UserLogout";

const CheckStatus = ({status}) => {
    // let status = props.status;
    if(status=== true){
        return <UserLogin/>
      }
      else{
        return <UserLogout/>
      }
  
}

export default CheckStatus