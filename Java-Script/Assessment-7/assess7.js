// ---------Array Of Object--------

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
{name: 'Baba', id: 101, marks : 23 },
{name: 'yaga', id: 200, marks : 45 },
{name: 'Wick', id: 115, marks : 75 } ]

// Quetion - 1

let RecordsArray =  studentRecords.length;
studentsArray = [];
str = "";
for(i = 0 ;  i< RecordsArray ; i++){
    str = studentRecords[i].name;
    caps = str.toString().toUpperCase();
    studentsArray.push(caps);
}

console.log(studentsArray)

// Quetion - 2

const Resultsmarks = studentRecords.filter( result  => result.marks  > 50 );

console.log(Resultsmarks)

// Quetion - 3


const Resultsidmarks = studentRecords.filter( result  =>  result.id > 120 );

console.log(Resultsidmarks )

// Quetion - 4


let sum = 0;

studentRecords .forEach(element => {
  sum += element.marks;
});

console.log(sum);


// Quetion - 5

// 

let  studentname= studentRecords.length

studentarray2 = [];
sum = 0


for(i=0;i< studentname;i++){
  if(studentRecords[i].marks<50){
    studentarray2.push(studentRecords[i].name)
  }
}
console.log(studentarray2)

// Quetion - 6

let studentnameid = studentRecords.length

studentarray3 = [];
sum2 = 0

for(i=0;i<studentnameid;i++){
  if(studentRecords[i].id>120){
    sum2 = sum2 + (studentRecords[i].marks)
  }
}
console.log(sum2)


