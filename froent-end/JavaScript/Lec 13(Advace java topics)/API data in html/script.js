let button = document.querySelector("button");
let p = document.getElementById("output");

button.addEventListener("click", () => {
  let facts = getfacts();
  p.innerText = "fact";
});
let url = "https://catfact.ninja/fact";
async function getfacts() {
  try {
    let res = await fetch(url);
    return res.data.fact;
  } catch (e) {
    return "no fact found";
  }
}
