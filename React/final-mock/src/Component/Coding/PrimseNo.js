import React from 'react'



const PrimseNo = () => {
    const pro = new Promise((resolve,reject)=>{
        let isPrime = true;
    let Number = 9
    for(let i = 2;i<Number;i++){
        if(Number % i == 0){
            isPrime = false;
        break;
        }
    }
    })
//     let isPrime = true;
//     let Number = 9
//     for(let i = 2;i<Number;i++){
//         if(Number % i == 0){
//             isPrime = false;
//         break;
//         }
//     }
//    if( isPrime == true){
//     console.log("Number is prime")
//    }
//    else{
//     console.log("Number is not prime")
//    }
  return (
    <div>PrimseNo</div>
  )
}

export default PrimseNo