console.log("hello")

var video = document.getElementById("video");

document.getElementById("video").playbackRate = 0.3;


var audio = new Audio('ding.wav'); 
audio.volume = 0.1;

var number = document.getElementById("number");
var counter = document.getElementById("count")
var count = 0

function alert(){
  count += 1
  counter.innerHTML = count;
   
  audio.play();
  if (audio.paused) {
      audio.play();
  }else{
      audio.currentTime = 0
  }

  number.innerHTML =  Math.floor(Math.random() *10000)

  
  if (count >5){
    document.getElementById("pop1").innerHTML = "Dont Stop!!"
    }

  if (count >10){
    document.getElementById("pop2").innerHTML = "You really like this huh?"
    }

  if (count >17){
  document.getElementById("pop3").innerHTML = "Keep clicking!!"
  }

  if (count >23){
  document.getElementById("pop4").innerHTML = "Wow! You're a natural!"
  }

  if (count >30){
  document.getElementById("pop5").innerHTML = "Never Give Up!!!"
  }

  if (count >38){
  document.getElementById("pop6").innerHTML = "Each click = 1 heart &lt3"
  }

  if (count >50){
  document.getElementById("pop7").innerHTML = "The determination!!"
  }

  




  }

