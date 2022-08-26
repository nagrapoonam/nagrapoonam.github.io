

const countDownDate = new Date(new Date().getTime() + (((13 * 86400) + (8 * 3600) + (12 * 60) + (7)) * 1000))


const dropZoneTimer = setInterval(function() {

  const now = new Date().getTime();

  const startDate = countDownDate - now;
      
  const days = Math.floor(startDate / (1000 * 60 * 60 * 24));
  const hours = Math.floor((startDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((startDate % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((startDate % (1000 * 60)) / 1000);
      

  document.querySelector(".drop-zone-timer-day h1").textContent = days;
  document.querySelector(".drop-zone-timer-hours h1").textContent = hours;
  document.querySelector(".drop-zone-timer-minutes h1").textContent = minutes;
  document.querySelector(".drop-zone-timer-seconds h1").textContent = seconds;
    
  if (startDate < 0) {
    clearInterval(dropZoneTimer);
    document.querySelector(".drop-zone-time-description").textContent = "EXPIRED";
  }
}, 1000); 




