// variables declared with var are function-scoped, while variables declared with let and const are block-scoped. This means that var variables are accessible throughout the entire function in which they are declared, while let and const variables are only accessible within the block (e.g., a loop or an if statement) in which they are declared.

{
  let a = 10;
  const b = 20;
  var c = 90;
}
console.log(c); // Output: 90
console.log(a); // Output: ReferenceError: a is not defined
console.log(b); // Output: ReferenceError: b is not defined
