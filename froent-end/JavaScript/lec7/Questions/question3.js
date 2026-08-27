let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let avg = (ar) => {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  let aa = sum / ar.length;
  console.log(aa);
};
avg(ar);
