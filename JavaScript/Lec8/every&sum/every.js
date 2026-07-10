let a = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let b = a.every((el) => el % 2 === 0);
console.log(b); // true

let d = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let c = d.every((el) => el % 2 === 0);
console.log(c); // false

//every function is like logical AND operator. It returns true if all the elements satisfy the condition, otherwise it returns false.
