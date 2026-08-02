let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerText = input.value;

  let btn = docuemyment.createElement("button");
  btn.innerText = "Delete";
  li.appendChild(btn);
  btn.classList.add("delete-btn");
  li.appendChild(btn);
  input.value = "";
  ul.appendChild(li);
});
