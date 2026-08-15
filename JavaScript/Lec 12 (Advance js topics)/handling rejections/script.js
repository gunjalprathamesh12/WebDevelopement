//to handle any erros in js we use exception handling means try catche bllocks the same concept we use incase if exception occur in function
function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  try {
    await getNum();
    await getNum();
  } catch (err) {
    console.log(err);
  }
}

demo();
