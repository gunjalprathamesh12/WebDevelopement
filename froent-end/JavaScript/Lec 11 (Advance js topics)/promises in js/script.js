function Datasave(data, sucess, failure) {
  let internetspeed = Math.floor(Math.random() * 10) + 1;
  if (internetspeed > 5) {
    console.log("data savd successfully");
    console.log(internetspeed);
  } else {
    console.log("data not saved");
  }
}

Datasave(
  "prathamesh",
  () => {
    console.log("Data saved successfully");
  },
  () => {
    console.log("Failed to save data");
  },
);
