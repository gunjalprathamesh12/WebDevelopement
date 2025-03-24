let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
let flag = 0;
for (let i = 0; i < 5; i++) {
  if (arr[i] === arr2[i]) {
    flag = 1;
  } else {
    flag = 0;
  }
}
if (flag == 1) {
  console.log("Same array elements");
} else {
  console.log("not same");
}
