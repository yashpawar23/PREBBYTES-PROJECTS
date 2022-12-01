 
 
 
 
 function time(){
  let dt = new Date( );
  let hrs = dt.getHours ();
  let min = dt.getMinutes();  
   let sec = dt.getSeconds();
   let session = "AM"

   if(hrs>12){
    session = "PM"
   }
if( hrs >=5 && hrs<12){
  document.getElementById('notification_bar').innerText = "GOOD MORNING!! WAKE UP !!";
  document.getElementById('notification_img').src = "./images/Component 30 – 1.svg";
  document.getElementById('notification_bar_2').innerText = "GRAB SOME HEALTHY BREAKFAST!!!";



}
else if(hrs>=12 && hrs<16){
  document.getElementById('notification_bar').innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
  document.getElementById('notification_img').src = "./images/Component 31 – 1.svg";
  document.getElementById('notification_bar_2').innerText = "LET'S HAVE SOME LUNCH !!";



}
else if(hrs>=16 && hrs<19){
  document.getElementById('notification_bar').innerText = "GOOD EVENING !!";
  document.getElementById('notification_img').src = "./images/lunch_image.png";
  document.getElementById('notification_bar_2').innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";


}

else {
  document.getElementById('notification_bar').innerText = "GOOD NIGHT !!";
  document.getElementById('notification_img').src = "./images/good night.svg";
  document.getElementById('notification_bar_2').innerText = "CLOSE YOUR EYES AND GO TO SLEEP";




}

   hrs = hrs%12 

   hrs = (hrs<10) ? `0${hrs}`: hrs;
   min = (min<10) ? `0${min}`: min;
   sec = (sec<10) ? `0${sec}`: sec;


document.getElementById('time_hour').innerText = hrs;
document.getElementById('time_min').innerText = min;
document.getElementById('time_sec').innerText = sec;
document.getElementById('time_session').innerText = session;


  
  setTimeout(time,1000);


};

time();


