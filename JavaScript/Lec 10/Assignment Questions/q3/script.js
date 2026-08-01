let input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter your name";
document.body.appendChild(input);

let h1 = document.createElement("h1");
h1.innerText = "use rname willbe appear here";
document.body.appendChild(h1);

let button = document.createElement("button");
button.innerText = "click";
document.body.appendChild(button);

button.addEventListener("click", function () {
  let uname = input.value;
  h1.innerText = `Hello, ${uname}!`;
});
