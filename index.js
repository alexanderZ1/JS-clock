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
     document.getElementById("demo").innerHTML= dateWithouthSecond.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
     //do something else
 }, 1000 )
}    
 newFunc() 
