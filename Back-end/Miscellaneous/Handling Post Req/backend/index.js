const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.get("/register", (req, res) => {
  const { user, pass } = req.query;
  res.send(`welcome ${user} your password is ${pass}`);
});

app.post("/register", (req, res) => {
  let { user, pass } = req.query;
  res.send(`welcome ${user} your password is ${pass}`);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
