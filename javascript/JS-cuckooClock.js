
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const digitalClock = document.querySelector('.digitalClock');

const cuckooBird = document.querySelector('.cuckooBird-big');
const cuckooNoise = document.querySelector('audio');

function setTime() {
  // Get the current time in hours, minutes, seconds
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const AM_PM = (0 <= hours && hours < 12) ? "AM" : "PM";
  console.log(currentTime);

  // perform cuckoo at the start of every new hour
  if (seconds === 0 && hours === 0) {
    // make the cuckoo bird appear and play the cuckoo noise
    cuckooBird.style.visibility = `visible`;
    cuckooNoise.play();
    console.log(cuckooNoise);
  };

  // if the cuckoo noise isn't playing, the cuckoo bird is hiding.
  if (cuckooNoise.ended) {
    cuckooBird.style.visibility = `hidden`;
  };
  
  // Calculate the angle for each of the hands
  const hoursDegrees = ((hours / 12) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const secondsDegrees = ((seconds / 60) * 360) + 90;

  // Apply the calculated angle to set the time
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Also set digital clock
  const stringHours = hours%12;
  const stringMinutes = (minutes < 10) ? "0"+minutes : minutes;
  const stringSeconds = (seconds < 10) ? "0"+seconds : seconds;
  digitalClock.innerHTML = `${stringHours}:${stringMinutes}:${stringSeconds} ${AM_PM}`;
  
};

  setInterval(setTime, 1000); // performs the setTime function every 1000ms = 1s