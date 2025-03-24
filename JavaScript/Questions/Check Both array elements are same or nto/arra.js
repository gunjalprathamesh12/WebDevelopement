let arr = [1, 29, 3, 4, 5];
let arr2 = [1, 20, 3, 4, 5];
let flag = 1;
for (let i = 0; i < 5; i++) {
  if (arr[i] === arr2[i]) {
    flag = 1;
  } 
}
if (flag == 0) {
  console.log("Same array elements");
} else {
  console.log("not same");
}
