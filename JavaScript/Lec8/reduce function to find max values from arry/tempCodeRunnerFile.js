let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = -1;

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);
//by using reduce method
let ans = arr.reduce((max, ele) => {
  return Math.max(max, ele);
});
console.log(ans);
