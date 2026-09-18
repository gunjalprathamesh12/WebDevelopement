const express = require("express");
const app = express();
const path = require("path");

const port = 8080;


// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home"); // 
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
