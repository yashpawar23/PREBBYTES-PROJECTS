

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
   