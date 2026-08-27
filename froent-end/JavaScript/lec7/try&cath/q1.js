let y = 90;
try {
  console.log("Start");
  let x = y + 5;
  console.log("x: " + x);
} catch (error) {
  console.log("Error: " + error.message);
} finally {
  console.log("हे नेहमी चालतं");
}
