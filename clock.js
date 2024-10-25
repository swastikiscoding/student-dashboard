function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  

let month =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const d = new Date();
document.getElementById("date").innerHTML = `${[d.getDate()]} ${month[d.getMonth()]} ${d.getFullYear()} (${day[d.getDay()]})`;


document.addEventListener("DOMContentLoaded", startTime);