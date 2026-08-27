let btn = document.querySelector("button");
btn.addEventListener("click", function (event) {
  console.log(event);
});
btn.addEventListener("mouseover", function (event) {
  console.log(event);
});

let input = document.querySelector("input");
input.addEventListener("keydown", function (event) {
  console.log(event.key);
  console.log(event.code);
  console.log(event.keyCode);
});
