let counter = 0;
let id1 = setInterval(() => {
  counter++;
  console.log("avcoe" + counter);
  if (counter === 5) {
    clearInterval(id1);
    console.log("interval cleared");
  }
}, 1000);
