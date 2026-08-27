// variable declared inside a function is called local variable and it can be accessed only inside that function called as function scope.

let ii = 10;
function myFunction() {
  let i = 20;
  console.log(i); // Output: 20
  console.log(ii); // Output: 10
}
myFunction();
console.log(ii); // Output: 10
