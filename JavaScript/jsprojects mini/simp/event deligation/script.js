let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerText = input.value;
  input.value = "";
  ul.appendChild(li);
});

ul.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    let li = event.target.parentElement;
    ul.removeChild(li);
  }
});
