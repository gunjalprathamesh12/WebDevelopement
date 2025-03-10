//Operators are the symbols that are used to perform operations on operands.
//Operators are used to perform operations on variables and values. 
//JavaScript has the following types of operators:
//Arithmetic operators 
let a=10;
let b=20;
console.log(`The sum of ${a} and ${b} is ${a+b}`);
console.log(`The sub of ${a} and ${b} is ${a-b}`);
console.log(`The mul of ${a} and ${b} is ${a*b}`);
console.log(`The div of ${a} and ${b} is ${a/b}`);
console.log(`The mod of ${a} and ${b} is ${a%b}`);
//Comparison operators
let x=10;
let y=20;
console.log(x==y);
console.log(x!=y);  
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);
//Logical operators
let p=true;
let q=false;
console.log(p&&q);
console.log(p||q);
console.log(!p);
console.log(!q);
//Assignment operators
let m=10;
let n=20;
m+=n;   //m=m+n
console.log(m);
m-=n;   //m=m-n
console.log(m);
m*=n;   //m=m*n
console.log(m);
m/=n;   //m=m/n
console.log(m);
m%=n;   //m=m%n
console.log(m); 
//Bitwise operators
let r=10; //Binary of 10 is 1010
let s=20; //Binary of 20 is 10100
console.log(r&s);
console.log(r|s);
console.log(~r);
console.log(r^s);
