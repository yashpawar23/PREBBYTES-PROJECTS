// //  function firstClass (){
// //     return "hellow"
// // }

// //  function Hellow(hellowMessage,name){
// //     console.log(hellowMessage() + name)
// // }

// // Hellow(firstClass ,   "javascript")

// // function outerFun(){
// //     const name = "yash";
// //     function innerFun(){
// //         console.log(name)
// //     }+-
// //     return innerFun()
// // }

// // outerFun()




// let name = {
//     Fisrtname:"yash",
//     lastName : "pawar"
// }
// let name2 = {
//     Fisrtname:"surbhi",
//     lastName : "shelar"
// }

// const printFullName = (state,homtown)=>{
//     console.log(this.Fisrtname + " " + this.lastName + " " + state + homtown)
// }

// printFullName.call(name,"maharashtra" , "mumbai")





 let add =(a,b)=>{
     let c=a+b;
      return c
 }
 let sum = add(7,8)
 console.log(sum)
  
// // // setTimeout(()=>{
// // //     console.log("yash")
// // // },1000)
  
// // setInterval(()=>{
// //     console.log("yash")

// // },1000)

// // function somemethod() {
// //     var counter1 = 1;
// //     const counter2 = 2;
// //     console.log(counter1); // undefined
// //     console.log(counter2); // ReferenceError
    
// //     }
// //     somemethod()

// //     let CallbackFun = (name)=>{
// //         console.log("Hellow" + name)
// //     }

// //     let Outerfun = (callback)=>{
// //     //   let name = prompt()
// //       callback(name)
// //     }
// //     Outerfun(CallbackFun)

// //     var a=3;
// // function greet()
// // {
// // console.log(a);
// // }
// // greet()

// // // function closuerFun(){
// // //     var name = "surbhi";
// // //      function PrintName(){
// // //         return(
// // //         alert(name)

// // //         )
// // //      }
// // //      PrintName()
// // // }

// // // var MyFunc = closuerFun()
// // // MyFunc()

// // let array = [1,1,1,55,6,6]
// // console.log(array)

// // const multiply = array.map((item)=>{
// //     return (
// //         item * 4
// //     )
// // })

// // multiply()
// // console.log(multiply)

// // const numbers = [1, 2, 3, 4];
// // const doubled = numbers.map(item => item * 2);
// // console.log(doubled); // [2, 4, 6, 8]

// // let x = 2 ;
// // let y = 2;

// // const result = (x === y ) ? ("OK THEN") : ("NOT OK THEN")
// // console.log(result);


// // const cars = ["BMW","AUDI","MAHENDRA"]
// // let text = ""
// // for(let i=0;i<cars.length;i++){
// //   text += cars[i]
// // }
// // console.log(text)

// var sum = function(a){
//    var c= 4;
//     console.log("Hellow " + a)
//     return function(b){
//         return a+b+c
//     }
// }
// var store = sum(5)
// console.log(store(8))

// // function outerFun(){
// //   var name = "18"
// //    function innerFun(){
// //     console.log(name)
// //    }
// //    innerFun()
// // }
// // var value = outerFun()
// // value()


// //     function person(fName,age){
// //         this.fName = fName,
// //         this.age = age
// //     }
// //     person.prototype.lName = "pawar"
// //     const MyName = new person("yash",23)
// //     console.log(MyName.fName,MyName.lName) 

// //     function calculateGST( productPrice ) {
// //         return productPrice * 0.05;
// //         }
// //         console.log(calculateGST(5))

//         // new Promise(function(resolve, reject) {
//         //     setTimeout(() => resolve(1), 1000);
//         //     }).then(function(result) {
//         //     console.log(result); // 1
//         //     return result * 2;
//         //     }).then(function(result) {
//         //     console.log(result); // 2
//         //     return result * 3;
//         //     }).then(function(result) {
//         //     console.log(result); // 6
//         //     return result * 4;
//         //     });



// // let promise = new Promise(function (resolve, reject) {
// // setTimeout(function () {
// // resolve('Promise resolved')}, 4000);
// // });
// // let asyncFunc = async ()=>{
// //     let result = await promise;
// //     console.log(result);

// // }

// // calling the async function
// // asyncFunc();

// // function addtext(){

// //     document.getElementsByClassName("btn").innerText = "MERN STACK"

// // }

// // const callbakhell = ()=>{
// //     setTimeout(()=>{
// //         console.log(1)
// //         setTimeout(()=>{
// //             console.log(2)
// //             setTimeout(()=>{
// //                 console.log(3)
// //                 setTimeout(()=>{
// //                     console.log(4)
// //                 },4000)
// //             },3000)
// //         },2000)
// //     },1000)
// // }

// //  callbakhell()
// // // callfun()

// // function myfunction(){
// //     var d=new Date().toLocaleTimeString();
// //     document.getElementById("demo").innerHTML=d;
// //     }
// //     var oneSecond = 1000;
// //     setInterval( myfunction, oneSecond);




// // new Promise (function(resolve,reject){
// //     setTimeout(()=>{
// //         resolve(1)
// //     },1000)
// // }).then((result)=>{
// //   console.log(result)
// //   return result * 2
// // }).then((result)=>{
// //     console.log(result)
// //     return result * 4
// // }).then((result)=>{
// //     console.log(result)
// //     return result * 8
// // }).then((result)=>{
// //     console.log(result)
// // })

// var obj = {
//     name : "yash",
//     lastName : "pawar",
//     age : 23,
//     cousre : "Full-stack"
// }

// for(var key in obj){
//     console.log(key + " : " + obj[key])
// }  
// var x = 1;
// do{
//     document.write("prepbytes <br>")
//     x++
// }while(x<=10)
// // const asyncFunc = ()=>{
// //     return new Promise ((resolve,reject)=>{
// //       setTimeout(()=>{
// //         resolve("PROMISE RESOLVE")
// //       },4000)
// //     }) 
// // }

// // async function CallAsyncFunc(){

// //     const result = await asyncFunc()
// //     console.log(result)
// // }
// // CallAsyncFunc()

// // const  FirstClass  = ()=>{
// //     return "HELLOW FIRST CLASS"
// // }

// // const CallFirst = (call,name)=>{
// //     console.log(call(),name)
// // }
// // CallFirst(FirstClass,"yash")


// // console.log("NUMBER PRINTING IN EVERY SECOND")

// // const num = 0
// // const prom = new Promise ((resolve,reject)=>{
// //     if(true){
// //         resolve(num)
// //     }
// //     else{
// //         reject()
// //     }
// // })
// // prom.then((e)=>(setTimeout(()=>{
// //     console.log(e++)
// // },1000)))
// // .then((e)=>(setTimeout(()=>{
// //     console.log(e++)
// // },2000)))
// // .then((e)=>(setTimeout(()=>{
// //     console.log(e++)
// // },3000)))
// // .then((e)=>(setTimeout(()=>{
// //     console.log(e++)
// // },4000)))
// // .then((e)=>(setTimeout(()=>{
// //     console.log(e++)
// // },5000)))
// // .then((e)=>(setTimeout(()=>{
// //     console.log(e++)
// // },6000)))

// // const str = "yash pawar"
// // let count = 0

// // for(let i = 0; i<=str.length;i++){
// //     if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
// //         count ++ 
// //     }
// // }
// // console.log(count)

// // const arr = [1,11,11,1,1,1,1,]
// // const mapM = arr.filter((item)=> item * 2)
// // console.log(mapM)

// // ///////DOM/////////////
// // document.getElementById("text").innerText = "TEXT"

// // //  document.getElementsByTagName("h1").innerText = "Hellow world"

// // function changtext(){
// //     document.getElementById("text-data").innerText("welcome to elvition acadmey")
// // }
// // function changedirection(){
// //     document.getElementById("parent-div").style.display = "block";
// // }

//  const obj1={
//      name:"shakif",
//      batch:"ea17",
//      info:function(){
//          console.log(this.name,"from",this.batch)
//      }
//  }
//  const obj2={
//      name:"yash"
//  }
//  obj2._proto_=obj1
//  console.log(obj2.batch)
//   obj2.info()

// let arr1 = [1,1,1,1,1];
// let arr2 = [22,2,2,2];
// arr3 = [...arr1,...arr2]
// console.log(arr3)

//  const OuterFunc = ()=>{
//     var name = "yash";
//     const innnerFunc = ()=>{
//         console.log(name)
//     }
//     return innnerFunc
//  }
//   var callFunc = OuterFunc()
//   callFunc()

//   let SomePromise = new Promise (function (resolve,reject){
//         let x = "prepbytes"
//         let y = "prepbyte"
//         if(x===y){
//             resolve()
//         }
//         else{
//             reject()
//         }
//   }).then(()=>{
//     console.log("YOU ARE PREPBUTES STUDENT")
//   }).catch(()=>{
//     console.log("TOU ARE NOT PREPBYTES STUDENT")
//   })

// //   const ApiData = async ()=>{
// //     const res =  await fetch("https://jsonplaceholder.typicode.com/users")
// //     console.log(res.json())
// //   }
// //   ApiData()

// //   var obj = {
// //         name : "yash",
// //         lastName : "pawar",
// //         age : 23,
// //         cousre : "Full-stack"
// //     }
    
// // for(var key in obj){
// //     console.log(obj[key])
// // }

// const callBack = (name)=>{
//    console.log("Hellow" + name)
// }

// const OuterFun = (callback)=>{
//     var name = "yash vijay pawar"
//     callback(name)
// }
// OuterFun(callBack)

// var x=24;
// function OuterFunction()
// {
// var s=224;
// var innerfunction=function innerfunction()
// {
// console.log(s);

// }
// var innerfunction2=function innerfunction2()
// {
// console.log(x);
// }
// innerfunction();
// innerfunction2();

// }

// OuterFunction();
// const calculator = (n1,n2,callBack)=>{
//     const result = callBack(n1 + n2)
//     console.log(result)
// }
// const Mycallback = (a,b)=>{
//     return a + b
// }
// calculator(10,8,Mycallback)

// // const asyncFun = ()=>{
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             resolve("promise-resolve")
// //         },2000)
// //     })
// // }
// // const CallasyncFun = async()=>{
// //       const result = await asyncFun()
// //       console.log(result)
// // } 
// // CallasyncFun()

// const pro = new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         resolve(1)
//      },1000)
// }).then((result)=>{
//     console.log(result)
//     return result + 1
// }).then((result)=>{
//     console.log(result)
//     return result + 1
// }).then((result)=>{
//     console.log(result)
//     return result + 1
// }).then((result)=>{
//     console.log(result)
//     return result + 1
// }).then((result)=>{
//     console.log(result)
//     return result + 1
// }).then((result)=>{
//     console.log(result)
//     return result + 1
// }).then((result)=>{
//     console.log(result)
//     return result + 1
// })

// const Callbackfunction = (name)=>{
//    console.log("HELLOW CALLBACK"  + name)
// }

// const OuterCallback = (callback)=>{
//     var name = "JAVA SCRIPT";
//     callback(name)
// }
// OuterCallback(Callbackfunction)

// const CallBckHell = ()=>{
//     setTimeout(()=>{
//         console.log(1)
//         setTimeout(()=>{
//             console.log(2)
//         },2000)
//         setTimeout(()=>{
//             console.log(3)
//             setTimeout(()=>{
//                 console.log(4)
//             },4000)
//         },3000)
//     },1000)
// }
// CallBckHell()

// let name1 = {
//     firstName : "yash",
//     lastName : "pawar"
// }
// let name2 = {
//     firstName : "ketan",
//     lastName : "pawar"
// }

// let printFullname = function(state,hometown){
//     console.log(this.firstName + " " + this.lastName + " " + state + " " + hometown)
// }
// printFullname.call(name1,"maharashtra","mumbai")
// printFullname.apply(name2,["Gujrat" ,"surat"])
// let bind =  printFullname.call(name1,"maharashtra","mumbai")
// console.log(bind)
// bind();


// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//     }
//     Person.prototype.nationality = "hindu";
//     const myFather = new Person("John", "Doe", 50, "blue");
//     console.log(myFather)
//     console.log("The nationality of my father is " + myFather.nationality)





//     9*


// function add(event) {
//     event.preventDefault();
//     let div = document.createElement("div")
//     div.setAttribute("id","box")
//     div.style.backgroundColor = "yellow"
//     div.style.width = "300px"
//     div.style.height = "300px"
//     let h1  = document.createElement("h1")

//     document.body.appendChild(div)
// }
//  function change(){
//     document.getElementById("demo").innerText = "hellow world"

// }

//  let object = {
//      name :"omkar",
//      batch:"EA17",
//      info : function(){
//          console.log(this.name , "from" ,this.batch)
//     }
//  }
//  let object2 ={
//      name:"jay"
//  }

//  object2.__proto__ = object
//  console.log(object.batch)
//  object2.info()

// const my = ()=>{
//     let d = new Date().toLocaleTimeString()
//     document.write()
// }
// var  i,j;
// for(i=1,i<=5;i++)
// {

//     for(j=1,j<=i;j++)
//     {
//         document.write("* &nbsp;&nbsp;&nbsp;")
//     }
//     document.write('<br>')
// }

// const names = ["yash","rashmi","jay","urvi"]
// let len = names.length
// let text = ""
// for(let i = 0;i <len;i++){
//     text = text + names[i] + '<br/>'
//     console.log(text)
// }
// document.getElementById("text").innerHTML = text

// const Data = {name:"yash",Age:14,Cousre:"Full-stack"}
// let  txt = ""
// for(let x in Data){
//     txt = txt + Data[x] + '      '
// }
// document.getElementById("text").innerHTML = txt

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";

// numbers.forEach(myFunction)
// function myFunction(value,index,array){
//   txt = txt + value +"  "
// }
// let txt = ''
// for(let i =1;i<=11;i++){
//     if(i == 5) 
//     break
//   txt = txt + i + '<br/>'
// }


// document.getElementById("text").innerHTML = txt
// const array = [4,8,1,52,4,55,2,5]
// const value = array.map(myFunction)
// function myFunction(value,index,array){
//   return value * 9
// }
// document.getElementById("list").innerHTML  = value 
// async function myDisplay(){
//   let myPromise = await new Promise((resolve,reject)=>{
    
//     let x = 0;
//     if(x==0){
//         resolve("OK DATA")
//     }else{
//         reject("NOT OK")
//     }
//   })
//   .then((response)=>{
//     console.log(response)
//   })
//   .catch((error)=>{
//     console.log(error)
//   })
// }
// myDisplay()

// for(let i =1;i<=5;i++){

//   for(k=1;k<=5-i;k++){
//     document.write("&nbsp;&nbsp")
//   }
//    for(j = 1;j<=i;j++){
//     document.write("*")
//    }
//    for(let l=2;l<=i;l++){
//     document.write("*")
//    }
//    document.write("<br/>")
// }

    // for(let i = 5 ; i>=1;i--){
    //    for(let j=1;j<=i;j++){
    //     document.write("*" )
    //    }
    //    document.write('<br/>')
    // }

// let radius = [1,5,8,9]
// const area = function (radius){
//     return Math.PI * radius * radius
// }
// const circumference = function (radius){
//     return 2 * Math.PI * radius * radius
// }
// const diameter = function (radius){
//     return 2 * radius
// }

// const calculation = function(radius,logic){
//     const output = []
//     for(let i = 0 ; i < radius.length ; i++){
//       output.push(logic(radius[i]))
//     }
//     return output
// }
// console.log(calculation(radius,area))

// let datas = [
//    {name:"yash",age:23},
//    {name:"jay",age:22}
// ]
// function getData (){
//    let output = ''
//    setTimeout(()=>{
//       datas.forEach((value,index)=>{
//       output+= `<li>${value.name}</li>`
//       })
//       document.body.innerHTML = output
//    },1000)
// }
// function createData(newData){
//    return new Promise ((resolve,reject)=>{
//       setTimeout(()=>{
//          datas.push(newData)
//          let error = true;
//          if(!error){
//             resolve()
//          }else{
//             reject("KUCH SAHI NAHI HE")
//          }
         
//       },2000)
//    })
   
// }
// createData({name:"urvi"}).then(getData).catch((err)=>{console.log(err)})
// getData()


// var x = "yash"
// function OuterFun(){
//    function innerFun(){
//       console.log(x)
//    }
//    return innerFun
// }
// var data = OuterFun()
// data()

// function hellow(){
//     return "Hellow"
// }
// function FirstClass(callback,name){
//  console.log(callback() + name)
// }
// FirstClass(hellow," yash")

// function User (name,age){
//     this.name = name;
//     this.age = age
// }
// User.prototype.batch = "EA17"
// const user1 = new User("yash",23)
// console.log("My name is" + " " + user1.name + " " + "Age is " + user1.age)
// console.log("The batch of user1 is" + " " + user1.batch)


// const Object = {
//     firstName : "yash",
//     lastName : "pawar",
//     age : "23",
//     FullName : function  (){
//         return this.firstName + " " + this.lastName + " " + this.age
//     }
// }

// console.log(Object.FullName())

// async function getData(){
//     const Data = await fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response=>response.json())
//     .then(json => console.log(json))

// }
// getData()

for(let i = 5; i>=1;i--){
    for(let j=1;j<=i;j++){
        document.write('*')
    }
    document.write("</br>")
}

// let Obj = {
//     name:"yash",
//     add : {
//         State : "maharashtra",
//         city : "mumbai"
//     }
// }

// let Obj2 = JSON.parse(JSON.stringify(Obj))
// Obj2.add.State = "Gujrat"
// console.log("OBJECT ONE IS ",Obj)
// console.log("OBJECT TWO IS ",Obj2)

// "use strict"
// let y =100
// console.log(y)
// let key  = "address"
// let phone  = 95364
// let member = {
//     name : "yash",
//     age : 23,
//     ["pin code"] : 400604,

//     getData : function(){
//         return this.batch
//     },
//     [key] : "Maharashtra , Mumbai" ,
//     phone 
// }
// delete member.age
// member.age = 23
// member.batch = "EA17"

// console.log(member)

// let emp = {
//     yash:15000,
//     urvi:10000,
//     sayli:10000,
//     jay:35000
// }
// let salary = 0
// for(item in emp){
//     salary = salary + emp[item]
// }
// console.log(salary)

// var a = 11
// var b = 13
// a = a + b
// b = a - b
// a = a - b
// console.log(a)
// console.log(b)

// const FizzBuzz  = (n)=>{
//     for(i=1;i<=n;i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             console.log("FizzBuzz")
//         }
//         else if(i % 3 == 0){
//             console.log("Fizz")
//         }
//         else if(i % 5 == 0){
//             console.log("Buzz")
//         }
//         else{
//             console.log(i)
//         }
//     }
// }
// FizzBuzz(20)

 for(let i = 5 ; i>=1;i++){
    for(let j = 1 ; j <=0;j++){
        document.write(j)
    }
    document.write('<br/>')
 }

// function setCounter(){
//     let count  = 1
//         return function(){
//              console.log(++count)
//     }
// }
// const counter =  setCounter()
// counter()

