function savetoDb(data) {
  let internetspeed = Math.floor(Math.random() * 10) + 1;
  return new Promise((success, failure) => {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed > 5) {
      success("Data saved successfully!");
    } else {
      failure("Failed to save data.");
    }
  });
}

savetoDb("data");
