// let a = ["prathamesh", " Suresh", " Gunjal"];
// function concatString(arr) {
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
//   }
//   return result;
// }
// console.log(concatString(a));

let a = ["prathamesh", " Suresh", " Gunjal"];
function concatString(arr) {
  return arr.join("");
}
console.log(concatString(a));
