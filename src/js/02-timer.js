import Swal from 'sweetalert2';
 


const deadlineDate = document.querySelector('#date-selector');
const startTimerBtn = document.querySelector(".starts");
const daysEnd = document.querySelector("[data-days]");
const hoursEnd = document.querySelector("[data-hours]");
const minutesEnd = document.querySelector("[data-minutes]");
const secondsEnd = document.querySelector("[data-seconds]");

startTimerBtn.addEventListener("click", startTimer);
deadlineDate.addEventListener("input", validation);
let setId = 1;

startTimerBtn.setAttribute("disabled", true);

function validation() {
  const unixDateInput = Date.parse(deadlineDate.value);
  startTimerBtn.removeAttribute("disabled"); 
  
  if (unixDateInput <= Date.now()) {
    startTimerBtn.setAttribute("disabled", true);
    clearInterval(setId);
    hoursEnd.textContent = "00";
    minutesEnd.textContent = "00";
    secondsEnd.textContent = "00";
    daysEnd.textContent = "00";
      
    return Swal.fire('Please choose a date in the future');
  }
}

function startTimer()  {
  
  clearInterval(setId);

  const endTime = deadlineDate.value;
 
  startSetInterval(endTime);
}


function startSetInterval(value) {
      const unixEndDate = Date.parse(value);
        
    setId = setInterval(() => {
      const startTime = Date.now();
    
   
    const time = unixEndDate - startTime;
  
    const con = convertMs(time);
    a(con);}, 1000)
}



function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


function a({ days, hours, minutes, seconds }) {
  daysEnd.textContent = days;
  hoursEnd.textContent = hours;
  minutesEnd.textContent = minutes;
  secondsEnd.textContent = seconds;
}