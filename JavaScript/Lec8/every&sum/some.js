let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = a.every((el) => el % 2 === 0);
console.log(b); // false

//some is like lofgical OR operator. It returns true if any of the elements satisfy the condition, otherwise it returns false.
let c = a.some((el) => el % 2 === 0);
console.log(c); // true
