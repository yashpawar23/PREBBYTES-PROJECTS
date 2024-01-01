const ApiData = async ()=>{
    const data =  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((data)=>data.json())
    .then((data)=>console.log(data))
}
ApiData()

const SomePro = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)
    },2000)
}).then((result)=>{
    console.log(result)
    return result + 1
}).then((result)=>{
    console.log(result)
    return result + 1
}).then((result)=>{
    console.log(result)
    return result + 1
}).then((result)=>{
    console.log(result)
    return result + 1
}).then((result)=>{
    console.log(result)
    return result + 1
}).then((result)=>{
    console.log(result)
    return result + 1
})