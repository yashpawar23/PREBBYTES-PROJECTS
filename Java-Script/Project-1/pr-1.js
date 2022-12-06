



function time() {
  let dt = new Date();
  let hrs = dt.getHours();
  let min = dt.getMinutes();
  let sec = dt.getSeconds();
  let session = "AM"

  if (hrs > 12) {
    session = "PM"
  }
  
  if (hrs >= 5 && hrs < 12) {
    document.getElementById('notification_bar').innerText = "GOOD MORNING!! WAKE UP !!";
    document.getElementById('notification_bar_2').innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
  }
  else if (hrs >= 12 && hrs < 16) {
    document.getElementById('notification_bar').innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    document.getElementById('notification_bar_2').innerText = "LET'S HAVE SOME LUNCH !!";
  }
  else if (hrs >= 16 && hrs < 19) {
    document.getElementById('notification_bar').innerText = "GOOD EVENING !!";
    document.getElementById('notification_bar_2').innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  }
  else {
    document.getElementById('notification_bar').innerText = "GOOD NIGHT !!";
    document.getElementById('notification_bar_2').innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
  }

  


  const wakeUpAlarmTime = document.getElementById('set_alarm_time_wake_up').value;
  const SetLunchTime = document.getElementById('set_alarm_time_lunch').value;
  const SetNapeTime = document.getElementById('set_alarm_time_nape').value;
  const SetNightTime = document.getElementById('set_alarm_time_night').value;


0
  
  if ((hrs >= parseInt(wakeUpAlarmTime)) && (hrs <= (parseInt(wakeUpAlarmTime) + 1))) {
    document.getElementById('notification_img').src = "./images/Component 30 – 1.svg";
  } else if ((hrs >= parseInt(SetLunchTime)) && (hrs <= (parseInt(SetLunchTime) + 1))) {
    document.getElementById('notification_img').src = "./images/Component 31 – 1.svg";
    
  } else if ((hrs >= parseInt(SetNapeTime)) && (hrs <= (parseInt(SetNapeTime) + 1))) {
    document.getElementById('notification_img').src = "./images/lunch_image.png";
  } else if ((hrs >= parseInt(SetNightTime)) && (hrs <= (parseInt(SetNightTime) + 1))) {
    document.getElementById('notification_img').src = "./images/good night.svg";
  }
    else {
     document.getElementById('notification_img').src = "https://thumbs.dreamstime.com/z/wooden-closed-sign-alarm-clock-space-copy-white-brick-wall-background-176633044.jpg"; // default image
   }


  hrs = hrs % 12

  hrs = (hrs < 10) ? `0${hrs}` : hrs;
  min = (min < 10) ? `0${min}` : min;
  sec = (sec < 10) ? `0${sec}` : sec;


  document.getElementById('time_hour').innerText = hrs;
  document.getElementById('time_min').innerText = min;
  document.getElementById('time_sec').innerText = sec;
  document.getElementById('time_session').innerText = session;



  setTimeout(time, 1000);


};


time();



function myFunction(){

  const setalarmwatch = document.getElementById("set_alarm_time_wake_up").value;
  const wakeupAlarmtime = setalarmwatch % 12 ;
  const wakeAlarmSession = "AM" 
  
  if(setalarmwatch>12){
    wakeAlarmSession  = "PM"
  }
  
  document.getElementById("time_schedul_wakeup").innerText =
  `Wake Up Time : ${wakeupAlarmtime} ${wakeAlarmSession} - ${wakeupAlarmtime + 1} ${wakeAlarmSession}`

//////////////////////////////////////////////



  const setAlarmLunch = document.getElementById("set_alarm_time_lunch").value;
  const AlarmLunch =  setAlarmLunch % 12;
  const AlarmSessionLunch = "AM" 

  if(setAlarmLunch>12){
    AlarmSessionLunch  = "PM"
  }

  document.getElementById("time_schedul_lunch").innerText =
  `Lunch Time : ${AlarmLunch} ${AlarmSessionLunch} - ${AlarmLunch + 1} ${AlarmSessionLunch}`



  ///////////////////////////////////


  const setAlarmNape = document.getElementById("set_alarm_time_nape").value;
  const AlarmNape = setAlarmNape % 12;
  const AlarmSessionNape = "AM"

  if(setAlarmNape>12){
    AlarmSessionNape  = "PM"
  }


  document.getElementById("time_schedul_nape").innerText = 
  `Nape TIme : ${AlarmNape} ${AlarmSessionNape} - ${AlarmNape}+ 1}  ${AlarmSessionNape} `


  //////////////////////////////


  const setAlarmNight = document.getElementById("set_alarm_time_night").value;
  const AlarmNight = setAlarmNight % 12;
  const  AlarmSessionNight = "AM"


  if(AlarmNight>12){
    AlarmSessionNight  = "PM"
  }

  document.getElementById("time_schedul_night").innerText = 
  `Night Time : ${AlarmNight} ${AlarmSessionNight} - ${AlarmNight + 1} ${AlarmSessionNight}`

}






