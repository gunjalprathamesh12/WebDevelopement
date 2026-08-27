let div = document.createElement("div");
let ul = document.createElement("ul");
let li = document.createElement("li");

div.addEventListener("click", function () {
  div.stopPropagation();
  console.log("div clicked");
});

ul.addEventListener("click", function () {
  console.log("div clicked");
});

for (li of lis) {
  li.addEventListener("click", function () {
    console.log("li was clicked");
  });
}
