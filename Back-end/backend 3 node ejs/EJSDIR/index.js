const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("home page");
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
