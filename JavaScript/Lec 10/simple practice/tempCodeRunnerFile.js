let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log("color chnage");
});

function getrandomcolor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red},${green},${blue})`;
  return color;
}
console.log(getrandomcolor());
