// callback 

// function OuterFun(Name){
//   console.log("Hellow" + " " + Name)
// }

// function CallFunc(callback){
//    const Name = prompt("Enter Name")
//    callback(Name)
// }
// CallFunc(OuterFun)

// Callackhell

// function CallBackHell() {
//     setTimeout(() => {
//         console.log(1)
//         setTimeout(() => {
//             console.log(2)
//             setTimeout(() => {
//                 console.log(3)
//             }, 3000)
//         }, 2000)
//     }, 1000)
// }
// CallBackHell()

// Promise

// let SomePromise = new Promise((resolve,reject)=>{
//     let X = "Prepbytes"
//     let Y = "prepbytes"
//     if(X==Y){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })
// .then(()=>{
//     console.log("You are Prepbytes student")
// })
// .catch(()=>{
//     console.log("You are not prepbytes student")
// })

// Asyn Await

// const AsyncPromise = new Promise((reslove,reject)=>{
//     setTimeout(()=>{
//         console.log("promise is resolved")
//     },1000)
// })

// async function AsyncFun(){
//     let result = await AsyncPromise
//     console.log(result)
// }
// AsyncFun()

// Promise chain

// const PromiseChain = new Promise((reslove,reject)=>{
//     setTimeout(()=>{
//         reslove(1)
//     },1000)
// })
// .then((result)=>{
//     console.log(result)
//     return result + 4
// }).then((result)=>{
//     console.log(result)
//     return result + 4
// }).then((result)=>{
//     console.log(result)
//     return result + 4
// }).then((result)=>{
//     console.log(result)
//     return result + 4
// }).then((result)=>{
//     console.log(result)
//     return result + 4
// })

// Call Apply Bind

// const student1 = {
//     Firstname:"yash",
//     Lastname : "pawar"
// }
// const student2 = {
//     Firstname:"jay",
//     Lastname : "jadhav"
// }

// const PrintFullName = function(state,city){
//   console.log(this.Firstname + " " + this.Lastname + " "  + state + " " + city)
// }
// PrintFullName.call(student1,"Maharshtra","Mumbai")
// PrintFullName.apply(student2,["Maharshtra","Mumbai"])
// const Bind = PrintFullName.bind(student1,"Maharshtra","Mumbai")
// console.log(Bind)
// Bind()

// Fetch Data

// const ApiData = async()=>{
//      await fetch("https://jsonplaceholder.typicode.com/users")
//      .then((response)=>response.json())
//      .then((response)=>console.log(response))
// }
// ApiData()

// Function Constructer

function User(name,age){
  this.name = name,
  this.age = age
} 
User.prototype.Nationality = "Hindu"
const User1 = new User("YASH PAWAR" ,23)
console.log( "The Nationality of user is" + User1.Nationality)

// Prototype

const Obj1 = {
    name:"yash",
    batch:"EA17",
    info:function(){
        console.log(this.name , "from" , this.batch)
    }
}
const Obj2 = {
    name:"jay"
}

Obj2.__proto__ = Obj1
Obj2.info()

// Closure

function OuterFun(){
    var name = "YASH PAWAR"
    function InnerFunc(){
        console.log(name)
    }
    return InnerFunc;
}

var Data = OuterFun()
Data()

// First Class

function Hello(){
    return "Hellow"
}

function FirstClass(callbck,name){
  
}