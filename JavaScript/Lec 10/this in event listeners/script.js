let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");

btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
//////OR OR OR oR oR oR oRoR

function changeColor() {
  console.log(this.innerText);
  this.style.backgroundColor = "green";
}
