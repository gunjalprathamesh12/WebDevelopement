let a=[1,2,3,4,5,6,7,8];
let b=[9,10,11,12,13,14,15,16];

let concatarr=a.concat(b);
console.log(concatarr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]   // Concatenation of two arrays

let color=["red","green","blue"];
let color2=["yellow","pink","black"];
let colorconcat=color.reverse().concat(color2);
console.log(colorconcat); // [ 'red', 'green', 'blue', 'yellow', 'pink', 'black' ]   // Concatenation of two arrays

let cars=["BMW","Audi","Mercedes"];
console.log(cars.reverse()); // [Function: reverse]   // Reverse function is not called