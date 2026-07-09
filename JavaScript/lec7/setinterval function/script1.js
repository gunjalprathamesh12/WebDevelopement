let counter = 0;
const timer = setInterval(() => {
  counter++;
  console.log("Tick " + counter);
  
  if (counter === 3) {
    clearInterval(timer);
    console.log("Stopped");
  }
}, 1000);
