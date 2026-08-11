function savetoDb(data) {
  let internetspeed = Math.floor(Math.random() * 10) + 1;
  return new Promise((RESOLVE, REJECT) => {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed > 5) {
      RESOLVE("Data saved successfully!");
    } else {
      REJECT("Failed to save data.");
    }
  });
}

savetoDb("data");
