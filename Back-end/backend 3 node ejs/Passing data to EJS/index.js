const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  //   console.log("home page");
  res.render("home.ejs"); //or we can write home also
});
app.get("/roldice", (req, res) => {
  const diceval = Math.floor(Math.random() * 6) + 1;
  res.render("roldice.ejs", { num: diceval }); //or we can write home also
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
