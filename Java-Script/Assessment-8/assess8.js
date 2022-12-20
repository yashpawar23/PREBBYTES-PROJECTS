// -----------DOM-----------

// Quetion - 1

document.getElementById("text").innerHTML ="TEXT"

// Quetion - 2

 let element = document.getElementsByTagName("h1").innerText = "TEXT1"
console.log(element)


// Quetion - 3

document.getElementsByClassName("box").innerHTML = "TEXT2"

// Quetion - 4

document.getElementById('hello_text').innerText = "hello world";

// Quetion - 5

function chnagedirection(){
  document.getElementById("flex_div").style.display = 'block';

}

function orignal() {
  document.getElementById("flex_div").style.display = 'flex';

}

// Quetion - 6

document.querySelector('h3').style.color = "red";
document.querySelector('h3').setAttribute('id','heading')="red";


// Quetion-7
function replacetext(){
  document.getElementById("hello_world_text").innerText ="Welcome To Elivation Acadmy";
}

// Quetion - 8

function time() {
  let dt = new Date();
  let hrs = dt.getHours();
  let min = dt.getMinutes();
  let sec = dt.getSeconds();
  let session = "AM"

  hrs = hrs % 12

  hrs = (hrs < 10) ? `0${hrs}` : hrs;
  min = (min < 10) ? `0${min}` : min;
  sec = (sec < 10) ? `0${sec}` : sec;



  
  document.getElementById('time_hour').innerText = hrs;
  document.getElementById('time_min').innerText = min;
  document.getElementById('time_sec').innerText = sec;
  document.getElementById('time_session').innerText = session;

  setTimeout(time, 1000);

}

time()

