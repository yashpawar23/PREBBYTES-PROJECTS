
// Quetion -1

const  parent  ={
    FirctName : "Yash",
    lastName :"Pawar",
    fullname(){
        return (this.FirctName +"" + this.lastName)
    }
}

const child= {
    __proto__ : parent
}

console.log(child.fullname())

// Quetion - 2



Array1 = [4,5,5,5,5];


const arraysum = {
    addarray : function(array){
        let sum =0;
        for(let i = 0;i<array.lenght;i++){
            sum =sum + array[i];

        }
        console.log(sum)
    }
}

Array.__proto__=arraysum;
Array.addarray(array1);


