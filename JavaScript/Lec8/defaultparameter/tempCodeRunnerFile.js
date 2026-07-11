function sum(a, b = 2) {
  return a + b;
}
console.log(sum(3)); // Output: 5

function welcome(name = "GUest") {
  console.log("good evening" + name);
}
welcome(" Prathamesh");
welcome();
