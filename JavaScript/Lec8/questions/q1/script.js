let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let ans = arr.every((el) => {
  el % 10 == 0;
});
console.log(ans);
