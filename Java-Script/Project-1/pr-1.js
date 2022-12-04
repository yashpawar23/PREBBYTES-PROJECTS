



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
    console.log("inside   wakeup iffff")

    document.getElementById('notification_img').src = "./images/Component 30 – 1.svg";
  } else if ((hrs >= parseInt(SetLunchTime)) && (hrs <= (parseInt(SetLunchTime) + 1))) {
    console.log("inside ifffffffff")
    document.getElementById('notification_img').src = "./images/Component 31 – 1.svg";
    
  } else if ((hrs >= parseInt(SetNapeTime)) && (hrs <= (parseInt(SetNapeTime) + 1))) {
    document.getElementById('notification_img').src = "./images/lunch_image.png";
  } else if ((hrs >= parseInt(SetNightTime)) && (hrs <= (parseInt(SetNightTime) + 1))) {
    document.getElementById('notification_img').src = "./images/good night.svg";
  }
    else {
     document.getElementById('notification_img').src = "https://images.unsplash.com/photo-1438129749798-ea5ca739b4cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2VycyUyMG5hdHVyZXxlbnwwfHwwfHw%3D&w=1000&q=80"; // default image
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






