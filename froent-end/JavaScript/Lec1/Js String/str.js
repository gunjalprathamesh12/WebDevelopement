let a="Prathamesh";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);  // a[2] is 
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);
console.log(a[9]);
console.log(a[10]); // a[10] is undefined

console.log(a.charAt(0));
console.log(a.lenght);

let n="tony stark";
console.log(n.toUpperCase());
console.log(n.toLowerCase());
console.log(n[0]); // n is not changed because string is immutable
console.log(n[0].toUpperCase()); // n is not changed because string is immutable
console.log(n); // n is not changed because string is immutable
console.log(n.charAt(0).toUpperCase() + n.slice(1)); // n is not changed because string is immutable
console.log(n[10000]);
console.log(n.length);
console.log(n[4]);