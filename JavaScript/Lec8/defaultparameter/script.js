function sum(a, b = 2) {
  return a + b;
}
console.log(sum(3)); // Output: 5

function welcome(name = "GUest") {
  console.log("good evening" + name);
}
welcome(" Prathamesh");
welcome();

/*========================================
DEFAULT PARAMETERS - QUICK SUMMARY
========================================

WHY:
- Function call kartana argument dyayla visarla, kinva mudam pass na kela,
  tar parameter ची value 'undefined' hote, ani calculation chukicha yeto
- Default Parameter vaparun sangу शकतो - "value dili nahis, tar hi default value vapar"

WHAT (Definition):
- Function lihitana parameter la AADHICH ek default value dyaychi
- Jenekaruna to argument call kartana dila nahi, tar JS ti default value aapoap vaparto

Syntax:
function functionName(param = defaultValue) {
  // code
}

----------------------------------------
Example - WITHOUT Default Parameter (Problem)
----------------------------------------
function greet(name) {
  console.log("Hello, " + name);
}

greet("Pratham"); // Hello, Pratham
greet();          // Hello, undefined  (chuk disतंय)

----------------------------------------
Example - WITH Default Parameter (Solution)
----------------------------------------
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet("Pratham"); // Hello, Pratham
greet();          // Hello, Guest  (default value vaparli)

----------------------------------------
Practical Example
----------------------------------------
function calculatePrice(price, tax = 0.18) {
  return price + price * tax;
}

console.log(calculatePrice(100));       // 118 (default tax 0.18 vaparla)
console.log(calculatePrice(100, 0.05)); // 105 (mudam dilela 0.05 vaparla)

----------------------------------------
IMPORTANT RULE - Order Matters
----------------------------------------
- Default parameter असलेला parameter SHAKYATOSH SHEVATI thev
  (middle cha parameter skip karta yet nahi सहज)

Awkward (chalte, pan karava lagte):
function example(a, b = 10, c) {
  console.log(a, b, c);
}
example(1, undefined, 3); // 1, 10, 3 (mudam undefined dyava lagla)

Clean (best practice):
function example2(a, c, b = 10) {
  console.log(a, c, b);
}
example2(1, 3); // 1, 3, 10 (sopa)

----------------------------------------
Default Value madhe dusra parameter vaparta yeto
----------------------------------------
function createUser(name, greeting = "Hello, " + name) {
  console.log(greeting);
}

createUser("Pratham");                    // Hello, Pratham
createUser("Pratham", "Welcome back!");   // Welcome back!

======================================== */
