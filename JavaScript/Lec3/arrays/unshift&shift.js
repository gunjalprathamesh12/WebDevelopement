let a=["kunal","satyarth","satyam","satyarth"];
a.unshift("rohit");
console.log(a);
a.shift();
console.log(a);
// push and pop are used to add and remove elements from the end of the array respectively.
let b=a.shift();
console.log(b);
console.log(a);
// unshift and shift are used to add and remove elements from the beginning of the array respectively.


let months=["january","february","march","april"];
console.log(months);
months.unshift("december");
console.log(months);
months.shift();
console.log(months);

console.log(months.indexOf("march"));
months.unshift("march");
console.log(months);
console.log(months.indexOf("march"));