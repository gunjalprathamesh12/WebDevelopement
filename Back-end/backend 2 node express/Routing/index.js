const express = require("express");
const app = express();

let port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("you contacted to root path");
});
app.get("/apple", (req, res) => {
  res.send("you contacted to apple path");
});
app.get("/mango", (req, res) => {
  res.send("you contacted to apple mango");
});

app.post("/",(req, res) => {
  console.log("you send post request");
});
app.use((req, res) => {
  res.send("you contacted to wrong path");
});
//http://localhost:8080/mango
//http://localhost:8080/apple
//http://localhost:8080/
