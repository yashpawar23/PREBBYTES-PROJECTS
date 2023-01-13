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

// Quetion-7

let totalMarks = 0 ;
let ques1Arrlength5 = studentRecords.length;
  
for (let i  = 0 ; i < ques1Arrlength5 ; i++){
    if (studentRecords[i].marks > 50){
        totalMarks+= studentRecords[i].marks ;

    }
    else{
        studentRecords[i].marks = studentRecords[i].marks+15;
    }

}
console.log(`Total marks of Students with marks greater than 50 are : ${totalMarks}`);
console.log(`New Array will  be : `, studentRecords);



// Quetion-8

function Student( name , classes , rollNo  ){
  this.name = name;
  this.classes = classes;
  this.rollNo = rollNo;

}

// Creating Objects of student :

let student1 = new Student("Rohan", 'B.Tech' , 1)
let student2 = new Student("Jay", 'M.Tech' , 12)
let student3 = new Student("Yash", 'B.A' , 13)
let student4 = new Student("shashank", 'M.Pharma' , 9)
let student5 = new Student("arohi", 'PHD' , 18)
let student6 = new Student('toto', 'LLB' , 12)

let arrayOfStudent = [];
arrayOfStudent.push(student1)
arrayOfStudent.push(student2)
arrayOfStudent.push(student3)
arrayOfStudent.push(student4)
arrayOfStudent.push(student5)
arrayOfStudent.push(student6)

console.log("Student details are : ", arrayOfStudent);



