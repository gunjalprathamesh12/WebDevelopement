const express = require("express");
const app = express();

let port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

let jokes = [
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "Why did the math book look sad? Because it had too many problems.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
];

app.use("/joke", (req, res) => {
  console.log("Request received");
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.send({ joke: jokes[randomIndex] });
});
