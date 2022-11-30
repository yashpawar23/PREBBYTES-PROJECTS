 function time(){
  let dt = new Date( );
  let hrs = Hour.getHours ();
  let min = Mindt.getMinutes();  
   let sec = dt.getSeconds();

  console.log(hrs ,min , sec)
    setInterval(time,1000)
  setTimeout(time,1000)

}