const express = require("express");
const app = express();

let port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((req, res) => {
  console.log("Request received");
  res.send({
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
  });
});
