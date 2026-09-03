const express = require("express");
const app = express();
// console.dir(app);

let port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.use((req, res) => {
//   console.log("Request received");
//   res.send("<h1>Welcome to Express</h1>");
// });
app.use((req, res) => {
  console.log("Request received");
  res.send({
    name: "prathamesh",
    age: 20,
  });
});
