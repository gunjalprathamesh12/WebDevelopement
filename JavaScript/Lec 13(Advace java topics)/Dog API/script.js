let button = document.querySelector("button");
let p = document.querySelector("p");
let url = "https://dog.ceo/api/breeds/image/random";

button.addEventListener("click", () => {
  let link = getimage();
  let img = document.querySelector("img");
  img.setAttribute("src", link);
});

async function getimage() {
  try {
    let res = await axios.get(url);
    return res.data.message;
  } catch (e) {
    console.log(e);
  }
}
