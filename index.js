// function newFunc(time) {
//      var time = new Date(parseInt(time));
//      var local = time.toLocaleTimeString();
//      return local.replace(/:\d+ /, ' ');
//      console.log(time)
// // console.log(dateWithouthSecond.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}));
//      document.getElementById("demo").innerHTML = dateWithouthSecond.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});


// // var timetwo = time.getHours + ":" + time.getMinutes;
//      // var time  = time.getHours();


//      // document.getElementById("demo").innerHTML = local;

// }
function newFunc() {



setInterval(function(){
     var dateWithouthSecond = new Date();
     document.getElementById("demo").innerHTML= dateWithouthSecond.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit', second:'2-digit'});
     //do something else
 }, .00000000000000001 )
}    
 newFunc() 

     // var imageone = "https://images.unsplash.com/photo-1612812166620-a072f77ec45b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwd2FraW5nJTIwdXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
     var imagetwo = "https://images.unsplash.com/photo-1614882046230-b939c987797f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80";



     function changeImage() {
document.getElementById("myimage").src  = imagetwo
     }

     function changeImage2() {
          document.getElementById("myimage").src = "https://images.unsplash.com/photo-1612812166620-a072f77ec45b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwd2FraW5nJTIwdXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"     
     }


     // function PlaySound(melody) {
     //      alert("On press of"+melody);
     //      const path = "path\\to\\melody\\"
     //      var snd = new Audio(path + melody + ".mp3");
     //      snd.play()
     // }



    document.querySelector("#audio").addEventListener("click", function() {
     var tom1 = new Audio("crash.mp3");
      tom1.play();
    })
var sound = new Audio("./crash.mp3 ");
sound.loop = true;

var h2 = document.getElementById('clock');

// display current time by the second
var currentTime = setInterval(function(){
var date = new Date();

var hours = (12 - (date.getHours()));
// var hours = date.getHours();

var minutes = date.getMinutes();

var seconds = date.getSeconds();

var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';
if (hours < 0) {
hours = hours * -1;
} else if (hours == 00) {
hours = 12;
} else {
hours = hours;
}


h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;

},1000);


/*functions to get hour, min, secs, 
am or pm, add zero, set alarm time and sound, clear alarm
*/

function addZero(time) {

return (time < 10) ? "0" + time : time;

}

function hoursMenu(){

var select = document.getElementById('alarmhrs');
var hrs = 12

for (i=1; i <= hrs; i++) {
select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);

}
}
hoursMenu();

function minMenu(){

var select = document.getElementById('alarmmins');
var min = 59;

for (i=0; i <= min; i++) {
select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
}
}
minMenu();

function secMenu(){

var select = document.getElementById('alarmsecs');
var sec = 59;

for (i=0; i <= sec; i++) {
select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
}
}
secMenu();


function alarmSet() {

var hr = document.getElementById('alarmhrs');

var min = document.getElementById('alarmmins');

var sec = document.getElementById('alarmsecs');

var ap = document.getElementById('ampm');


var selectedHour = hr.options[hr.selectedIndex].value;
var selectedMin = min.options[min.selectedIndex].value;
var selectedSec = sec.options[sec.selectedIndex].value;
var selectedAP = ap.options[ap.selectedIndex].value;

var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;
console.log('alarmTime:' + alarmTime);

document.getElementById('alarmhrs').disabled = true;
document.getElementById('alarmmins').disabled = true;
document.getElementById('alarmsecs').disabled = true;
document.getElementById('ampm').disabled = true;


//when alarmtime is equal to currenttime then play a sound
var h2 = document.getElementById('clock');

/*function to calcutate the current time 
then compare it to the alarmtime and play a sound when they are equal
*/

setInterval(function(){

var date = new Date();

var hours = (12 - (date.getHours()));
// var hours = date.getHours();

var minutes = date.getMinutes();

var seconds = date.getSeconds();

var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


//convert military time to standard time

if (hours < 0) {
hours = hours * -1;
} else if (hours == 00) {
hours = 12;
} else {
hours = hours;
}

var currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;


if (alarmTime == currentTime) {
sound.play();
}

},1000);


// console.log('currentTime:' + currentTime);	

}


function alarmClear() {

document.getElementById('alarmhrs').disabled = false;
document.getElementById('alarmmins').disabled = false;
document.getElementById('alarmsecs').disabled = false;
document.getElementById('ampm').disabled = false;
sound.pause();
}


