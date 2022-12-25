// Quetion-1

let string1 ='abcadeecfb';
myStrArr= string1.split('');

for(let i = 0 ; i <myStrArr.length ; i++){
    for(let j =i+1 ; j<myStrArr.length ; j++){
        if(myStrArr[i] === myStrArr[j]){
          myStrArr.splice(j, 1);
        }
    }    
}
myStr = myStrArr.join("");

console.log('After Deletion : ',string1);

// Quetion-2
string2
let string2 ='abcadeecfb';

for(let i = 0 ; i < string2.length ; i++){
    count = 1;
    for(let j = i + 1 ; j < string2.length ; j++){

        if(string2[i] === string2[j]){
            count = count + 1;
            console.log(`${string2[i]} = ${count}`);
        }
        else if (string2.indexOf(i) === string2.lastIndexOf(i)){
            console.log(`${string2[i]} = ${count}`);
        }
        

    }
}