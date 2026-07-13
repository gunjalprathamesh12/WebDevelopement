function min(a, b, c, d) {
  console.log(arguments);
}
min(1, 2, 3, 4);

function min(...args) {
  return Math.min(...args);
}
console.log(min(1, 2, 3));
