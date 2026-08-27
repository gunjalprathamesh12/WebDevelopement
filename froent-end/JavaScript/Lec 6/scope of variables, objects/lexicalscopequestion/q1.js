let great = "hello";
function changegreet() {
  let great = "hi";
  console.log(great);
  function innerfunction() {
    console.log(great);
  }
}
console.log(great);
changegreet();

//ineerfunction will not exectuee because here we have only declared it not called
