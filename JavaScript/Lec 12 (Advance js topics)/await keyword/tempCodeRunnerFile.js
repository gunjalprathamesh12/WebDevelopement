// await means wait
// await keyword we can only use when the function is async function
// what does await keyword does it stops exeution of function until its current promise get resolve
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
  await getNum();
  await getNum();
}

demo();
