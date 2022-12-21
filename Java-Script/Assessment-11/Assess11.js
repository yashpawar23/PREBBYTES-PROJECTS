
// Quetion-1

function callback (X,Y,add){
    console.log(X);
    add(5,6)
    console.log(Y)

}

function add(a,b){
    console.log(`sum of ${a + b}`)
}

callback(5,6,add)

// Quetion-2

  const calculater = (num1, num2, callback) => {
        const result = callback(num1, num2)
        console.log(result)
    }
    
    const myCallback = (a, b) => {
        return a * b
    }
    
    calculater( 100, 3, myCallback )
// calculator( 100, 3, () => return a / b )

setTimeout(() => {
    console.log(1)
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
            setTimeout(() =>{
                console.log(4);
            },1000)
        },1000)
    },1000)
},1000)

// Quetion-3

let prntnumber = (tme, num) => {
    return new Promise((res, rej) => {
        if(num){
            setTimeout(()=>{
                res(num());
            }, tme)
        }
        else{
            rej(console.log("No Number"))
        }

    })
}

prntnumber(0, ()=>console.log("Number"))
.then(()=>{
    prntnumber(1000, ()=>console.log("1"))
})
.then(()=>{
    prntnumber(2000, ()=>console.log("2"))
})
.then(()=>{
    prntnumber(3000, ()=>console.log("3"))
})
.then(()=>{
    prntnumber(4000, ()=>console.log("4"))
})
.then(()=>{
    prntnumber(5000, ()=>console.log("5"))
})
.then(()=>{
    prntnumber(6000, ()=>console.log("6"))
})
.then(()=>{
    prntnumber(7000, ()=>console.log("7"))
})

// Quetion-4

let x = function(condition){
    return new Promise((resolve, reject)=>{
        if(condition == 'yes'){
            resolve('promise resolved')
        }
        else{
            reject('promise rejected')
        }
    })
}

x('yes').then(response => console.log(response)).catch(err=>console.log(err))


   