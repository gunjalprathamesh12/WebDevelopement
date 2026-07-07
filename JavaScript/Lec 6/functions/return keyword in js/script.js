function display(i, j) {
  return i + j;
  return i - j; // This line will never be executed because the function returns before it.
}

console.log(display(display(1, 10), 5)); // Output: 15

// console.log(display(10, 5)); // Output: 15
// let sum = display(10, 5);
// console.log(sum); // Output: 15
