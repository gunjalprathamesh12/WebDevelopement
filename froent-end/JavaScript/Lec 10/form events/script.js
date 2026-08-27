let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Form submitted!");
  let input = document.querySelector("input");
  console.log(input.value);
});
