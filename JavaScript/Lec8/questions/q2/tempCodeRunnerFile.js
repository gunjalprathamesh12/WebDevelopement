let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let small = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < small) {
    small = arr[i];
  }
}
console.log(small);

let ans = arr.reduce((small, ele) => {
  return Math.min(small, ele);
});
console.log(ans);
