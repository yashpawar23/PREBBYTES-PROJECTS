
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



const parent2 = {
    firstname : 'Yash',
    lastname : 'Pawar',
    City : 'Thane',
    State : 'Maharashtra',

    
    Deatils(){
        return (`${this.firstname} ${this.lastname} from ${this.City} in ${this.State} `)
    }

}

const child2 = {
    __proto__:parent2
}
const son1 = {
    __proto__:child2
}

console.log(son1.Deatils());


// Quetion-3
            arr = [1, 2, 3, 4]
            arr1 = [3, 2, 5, 4]
            arr2 = [4, 2, 2, 4]
                    
            const array = {
                    add: function (a){
                        sum=0;
                        for(i=0; i < a.length; i++){
                            sum = sum + a[i]
                        }
                        console.log(sum);
                    }
                    }
                    
            Array.__proto__=array
            Array.add(arr1)
           
    //   Quetion-4


        var obj = {
            name : "Yash ",
            company : "TCS",
            Stream : "Mechanical",
            
        }
        result = Object.keys(obj)
        console.log(result);
          





