// Callback Function//-----------------

// function OuterFunction(Name) {
//     console.log("Hellow" + Name)
// }

// function CallBack(callback) {
//     let Name = prompt("Enter Your Name")
//     callback(Name)
// }
// CallBack(OuterFunction)

// CallBack Hell//-------------------

// function CallBackHell(){
//     setTimeout(()=>{
//       console.log(1)
//       setTimeout(()=>{
//         console.log(2)
//         setTimeout(()=>{
//             console.log(3)
//             setTimeout(()=>{
//                 console.log(4)
//                 setTimeout(()=>{
//                     console.log(5)
//                   },5000)
//               },4000)
//           },3000)
//       },2000)
//     },1000)
// }
// CallBackHell()

// PROMISE //--------------------------

// let SomePromise = new Promise(function (resolve, reject) {
//     let x = "prepbytes"
//     let y = "prepbytes"
//     if (x === y) {
//         resolve()
//     }
//     else {
//         reject()
//     }
// }).then(() => {
//     console.log("YOU ARE PREPBYTES STUDENT")
// }).catch(() => {
//     console.log("YOU ARE NOT PREPBYTES STUDENT")
// })

//PROMISE CHAINING//------------------------

//  const pro =  new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1)
//     }, 1000)
// }) 
// .then((result)=>{
//     console.log(result)
//     return result + 1
// }).then((result)=>{
//     console.log(result)
// })


//ASYNC FUNCTION //--------------

// let Pro = new Promise(function (resolve,reject){
//     setTimeout(()=>{
//         resolve("PROMISE IS RESOLVED")
//     },2000)
// })

// async function AsyncFun(){
//     let result = await Pro;
//     console.log(result)
//     console.log('hello');

// }
// AsyncFun()

// call apply bind//---------------------------

// let student1 = {
//         firstName : "yash",
//         lastName : "pawar"
// }
// let student2 = {
//     firstName : "Jay",
//     lastName : "jadhav"
// }

// let PrintFullName = function(state,hometown){
//    console.log(this.firstName + " " + this.lastName + " " + state + " " + hometown)
// }
// PrintFullName.call(student1,"Maharshtra","Mumbai")
// PrintFullName.apply(student2,["Gujrat","Ahemdabad"])
// const BindMethode = PrintFullName.bind(student1,"Maharshtra,Mumbai")
// console.log(BindMethode)
// BindMethode()

// "    " //

// const ApiData = async  ()=>{
//     const Data = await fetch("https://jsonplaceholder.typicode.com/users")
//     .then((Data)=>Data.json())
//     .then((Data)=>console.log(Data))
// }
// ApiData()


// constructer Function //---------------------

// function User(name,age){
//     this.name = name;
//     this.age = age 
// }

// let user1 = new User("yash",23)
// console.log(user1)

//prototype//------
// const obj1={
//     name:"shakif",
//     batch:"ea17",
//     info:function(){
//         console.log(this.name,"from",this.batch)
//     }
// }
// const obj2={
//     name:"yash"
// }
// obj2.__proto__=obj1
// console.log(obj2.batch)
// obj2.info()

//pure function//
// const square = function(number){
//     return number * number
// }
// console.log(square(4))

//reverse string//-----------

// var string = "yash pawar"
// var lengthStr = string.length
// var revestr = ''
// for(i = lengthStr - 1 ; i>=0;i--){
//     revestr += string[i]
// }
// console.log(revestr)



// function FindVowles(){
//     let char = "a"
//     if(char == "a" || char == "e" || char == "i "|| char == "o" || char == "u " ){
//         console.log("char is vowels")
//     }else{
//         console.log("char is consonent")
//     }
// }
// FindVowles()

// //-----------------------------
// function changetext(){
//     document.getElementById("heading").style.display="none"
// }


// function somemethod() {
//     console.log(counter1); // undefined
//     console.log(counter2); // ReferenceError
//     var counter1 = 1;
//     let counter2 = 2;
//     }
//     somemethod()


// console.log(message); //output : undefined
// var message = 'The variable Has been hoisted';

// var message;
// console.log(message);
// message = 'The variable Has been hoisted';

// function person(name,age){
//     this.name = name;
//     this.age = age
// }
// person.prototype.nationality = "Hindu"
// const User1 = new person("Yash",23)
// console.log(User1 )
// console.log("Nationality of my fatger is "+ User1.nationality)

// let y = "yash"
// let x = "pawar"
// const result = x.concat(y)
// console.log(result)

// const calculator = (n1,n2,callback)=>{
//     const result = (n1 + n2)
//     callback(result)
//     console.log(result)
// }
// const myCallback = (a,b)=>{
//     return a + b
// }
// calculator(100,3,myCallback)

// // let count = 10;
// // let count = 15;
// function example() {
// let count = 20;
// console.log(count);
// // output: 20
// }
// example();
// console.log(count);

// var Y = 2
// function Outer(){
//     var s = 4
//     var Inner = function Inner(){
//         console.log(s)
//     }
//     var Inner2 = function Inner2(){
//         console.log(Y)
//     }
//     Inner()
//     Inner2()
// }
// Outer()

// const countVowels = str => Array.from(str) .filter(letter => 'aeiou'.includes(letter)).length;
// console.log(countVowels('abcdefghijklmnopqrstuvwxyz')); // 5
// console.log(countVowels('test')); // 1 console.log(countVowels('ddd')); //




//    let isPrime = true
//    let num = 8
//    for(let i=2;i<num;i++){
//     if(num % i == 0){
//         isPrime = false
//     }
//     break
//    }
//    if(isPrime == true){
//     console.log("Number is Prime")
//    }else{
//     console.log("Number is not prime")   
//    }

//    const array = [2, 3, 4, 5,6,7,8,9,10];
// let odd = 0
// let even = 0
// for(let i = 0;i<=array.length;i++){
//     if(array[i] % 2){
//         odd ++ 
//     }
//     else{
//         even ++
//     }
// }
// console.log("EVEN =", even)
// console.log("ODD =", odd)

// var string = "rawap hsay"
// var lengthStr = string.length
// var revestr = ''
// for(i = lengthStr - 1 ; i>=0;i--){
//     revestr += string[i]
// }
// console.log(revestr)

// let value = "yash pawar"
// let idval = document.getElementById('get')
// idval.innerHTML = value

// const MyList = document.getElementById("Mylist")
// const Fruits = ["Apple","kiwi","chiku","Mango"]
// for(let fruit of Fruits){
//     let Newitem = document.createElement('li')
//     Newitem.textContent = fruit
//     MyList.appendChild(Newitem)
// }

// let NewItem = document.createElement('div');
// NewItem.innerHTML = "Hellow World"
// let id = NewItem.setAttribute("class",'name');

// console.log(NewItem)