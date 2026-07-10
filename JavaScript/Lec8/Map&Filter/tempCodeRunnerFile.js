let arr = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let even = arr.filter((el) => el % 2 === 0);
console.log(even); // [2,4,8,10,12,14,16,18,20]
let odd = arr.filter((el) => el % 2 === 1);
console.log(odd); // [1,3,5,7,9,11,13,15,17,19]
