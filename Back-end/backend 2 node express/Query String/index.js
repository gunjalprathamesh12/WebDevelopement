const express = require("express");
const app = express();

let port = 8080;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello i am robot");
});
app.get("/:username/:id", (req, res) => {
  console.log(req.params);
  res.send("hello i am robot");
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.send("no res");
});
