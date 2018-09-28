///JS for running the timer


var hour = 0;
var min = 0;
var sec = 0;
var totalSecs = 0;
var interval;
var ringsound;
ringsound=new Audio("ringtone.mp3");


///Add hour function
function addHour(){
  if(hour!=24){
    hour++;
  }
  else{
    hour=0;
  }

  document.getElementById("hours").innerHTML = checkNumber(hour);
}
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('hour-up');
    link.addEventListener('click', function() {
        addHour();
    });
});

///minus hour function
function minusHour(){
  if(hour!=0){
    hour--;
  }
  else{
    hour=24;
  }

  document.getElementById("hours").innerHTML = checkNumber(hour);
}
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('hour-down');
    link.addEventListener('click', function() {
        minusHour();
    });
});

///Add min function
function addMin(){
  if(min!=59){
    min++;
  }
  else{
    min=0;
  }

  document.getElementById("mins").innerHTML = checkNumber(min);
}
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('min-up');
    link.addEventListener('click', function() {
        addMin();
    });
});

///Minus minute function
function minusMin(){
  if(min!=0){
    min--;
  }
  else{
    min=59;
  }

  document.getElementById("mins").innerHTML = checkNumber(min);
}
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('min-down');
    link.addEventListener('click', function() {
        minusMin();
    });
});

///Add sec function
function addSec(){
  if(sec!=59){
    sec++;
  }
  else{
    sec=0;
  }

  document.getElementById("secs").innerHTML = checkNumber(sec);
}
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('sec-up');
    link.addEventListener('click', function() {
        addSec();
    });
});

///Minus secs function
function minusSec(){
  if(sec!=0){
    sec--;
  }
  else{
    sec=59;
  }

  document.getElementById("secs").innerHTML = checkNumber(sec);
}
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('sec-down');
    link.addEventListener('click', function() {
        minusSec();
    });
});

function countdown(){
  totalSecs = sec + (min * 60) + (hour * 3600);

  interval = setInterval(function(){

    if(totalSecs==0){
      ringsound.play();
      hour=0;
      min=0;
      sec=0;
    }
    else{
      totalSecs--;
    }

    var newHours = 0;
    var newMins = 0;
    var newSecs = 0;

    newHours = Math.floor(totalSecs/3600);
    newMins = Math.floor((totalSecs-(newHours*3600))/60);
    newSecs = Math.floor((totalSecs-(newHours*3600)-(newMins*60)));

    document.getElementById("hours").innerHTML = checkNumber(newHours);
    document.getElementById("mins").innerHTML = checkNumber(newMins);
    document.getElementById("secs").innerHTML = checkNumber(newSecs);

  },1000);
}


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('start');
    link.addEventListener('click', function() {
        document.getElementById("hour-up").style.display = "none";
        document.getElementById("hour-down").style.display = "none";
        document.getElementById("min-up").style.display = "none";
        document.getElementById("min-down").style.display = "none";
        document.getElementById("sec-up").style.display = "none";
        document.getElementById("sec-down").style.display = "none";
        document.getElementById("start").style.display= "none";
        document.getElementById("space").style.display= "none";
        document.getElementById("space2").style.display= "none";
        document.getElementById("reset").style.display= "inline";
        countdown();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('reset');
    link.addEventListener('click', function() {
        clearAll();
        document.getElementById("hour-up").style.display = "inline";
        document.getElementById("hour-down").style.display = "inline";
        document.getElementById("min-up").style.display = "inline";
        document.getElementById("min-down").style.display = "inline";
        document.getElementById("sec-up").style.display = "inline";
        document.getElementById("sec-down").style.display = "inline";
        document.getElementById("start").style.display="inline";
        document.getElementById("space").style.display= "inline";
        document.getElementById("space2").style.display= "inline";
        document.getElementById("reset").style.display="none";
    });
});

function clearAll(){
  clearInterval(interval);
  ringsound.pause();
  ringsound.load();
  hour=0;
  min=0;
  sec=0;
  document.getElementById("hours").innerHTML = "00";
  document.getElementById("mins").innerHTML = "00";
  document.getElementById("secs").innerHTML = "00";
}


function checkNumber(num){
  if (num<10){
    var numString = "0" + num.toString();
  }
  else{
    var numString = num.toString();
  }
  return numString;
}
