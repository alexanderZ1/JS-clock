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

     // var imageone = "https://images.unsplash.com/photo-1612812166620-a072f77ec45b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwd2FraW5nJTIwdXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
     var imagetwo = "https://images.unsplash.com/photo-1614882046230-b939c987797f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80";



     function changeImage() {
document.getElementById("myimage").src  = imagetwo
     }

     function changeImage2() {
          document.getElementById("myimage").src = "https://images.unsplash.com/photo-1612812166620-a072f77ec45b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwd2FraW5nJTIwdXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"     
     }