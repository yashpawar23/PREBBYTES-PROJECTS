const student1 = {
    Firstname : "yash",
    LastName : "Pawar"
}
const student2 = {
    Firstname : "jay",
    LastName : "jadhav"
}

const PrintFullname = function(State,city){
  console.log(this.Firstname + " " + this.LastName + " " + State + " " + city)
}

PrintFullname.call(student1,"Maharashtra","Thane")
PrintFullname.apply(student2,["Maharashtra","Kalyan"])
const Bind = PrintFullname.bind(student1,"Maharashtra","Thane")
console.log(Bind)
Bind()