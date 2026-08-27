//async keyword is use to create async function
//async functions return promise
//if async function get sucessfully exectue then it return promise after sucessful execution it will show promise fullfilled or in case if execution cause any error then it return promise rejected
async function greet() {
  console.log("hi");
}
greet();
//--------------------------------------------------------------

async function prath() {
  return "hi";
}

prath()
  .then(() => {
    console.log("hi");
  })
  .catch((err) => {
    console.log("erro");
  });
