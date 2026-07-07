let a = [1, 2, 3, 4, 5, 6, 7];
function retar(a, n) {
  for (i = 0; i < a.length; i++) {
    if (a[i] > n) {
      console.log(a[i]);
    }
  }
}
retar(a, 3);
