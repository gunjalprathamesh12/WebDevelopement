let btns = document.querySelector("button");
for (btn of btns) {
  btn.addEventListener("click", sayhello());
  btn.addEventListener("click", sayhi());
}
function sayhello() {
  alert("hello my frnd");
}
function sayhi() {
  alert("hello my frnd");
}
