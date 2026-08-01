let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log(input.value);
});

input.document.addEventListener("mouseout", function () {
  alert("Mouse out of input field!");
});

let p = document.querySelector("p");
p.addEventListener("click", function () {
  p.style.backgroundColor = "red";
});

input.addEventListener("keypress", function (event) {
  console.log(event.key);
});