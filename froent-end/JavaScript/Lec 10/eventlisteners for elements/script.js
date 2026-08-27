let p = document.querySelector("p");
p.addEventListener("click", function () {
  console.log("you clicked the paragraph");
});

let count = 0;
let dic = document.querySelector(".box");
dic.addEventListener("mouseenter", function () {
  console.log("you entered the div");
  count++;
  console.log("Count:", count);
});
