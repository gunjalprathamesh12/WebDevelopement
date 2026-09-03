/*Module export is use when we have to acces function from one file to another file so we use module.export  */

//writing some functions in one file and pass then in another file so we can use those functions in another code file

//this is the example of file to file transfer

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;
//1 way
module.exports = { sum, sub, mul, g, PI };

//2nd way
let obj = {
  sum: sum,
  sub: sub,
  mul: mul,
  g: g,
  PI: PI,
};


//3rd way

// module.export.sum = (a, b) => a + b;
// module.export.sub(a, b) => a - b;
// module.export.mul(a, b) => a * b;
// module.export.g = 9.8;
// module.export.PI = 3.14;