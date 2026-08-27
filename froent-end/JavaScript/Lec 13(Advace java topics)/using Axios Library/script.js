let url = "https://catfact.ninja/fact";
async function getfacts() {
  try {
    let res = await fetch(url);
    console.log(res);
  } catch (e) {
    console.log("error:-", e);
  }
}
