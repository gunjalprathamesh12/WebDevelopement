let names = ["prathamesh", "pranav", "arpit", "kunal", "akshay", "pranit"];
let winner = names[0];
let runnerup = names[1];
let secondrunnerup = names[2];
//slow way
//by destructuring

let [win, run, srun, ...others] = names;
console.log(win);
console.log(run);
console.log(srun);
console.log(others);

/*========================================
REST OPERATOR & ARRAY DESTRUCTURING
========================================

----------------------------------------
REST OPERATOR (...)
----------------------------------------
SIMPLE: "je kahi urlay (extra values), te saglं ekaच array madhe golा kar"

WHY:
- Function la kiti arguments yetil te AADHICH mahit nasta
- Fixed parameters (a, b, c) lihile tar extra arguments ignore hotat
- Rest Operator vaparun sagle urlele (extra) arguments EKATRA array madhe golā karta yetat

Syntax:
function functionName(...restParams) {
  // restParams ha ek ARRAY asto
}

Example:
function sum(...numbers) {
  console.log(numbers); // ARRAY
}
sum(1, 2, 3, 4); // [1, 2, 3, 4]

Fixed Parameters + Rest (ekatra vapar):
function introduce(name, age, ...hobbies) {
  console.log(name, age, hobbies);
}
introduce("Pratham", 20, "Coding", "Cricket");
// Pratham, 20, ["Coding", "Cricket"]

IMPORTANT RULE:
- Rest NEHMI SHEVATI lihava lagto
  function correct(first, ...rest) { }   ✅
  function wrong(...nums, last) { }      ❌ SyntaxError

----------------------------------------
SPREAD vs REST - GONDHAL TALAYLA (IMPORTANT)
----------------------------------------
| Type   | Kaam                          | Kuthe vaparle jate                |
|--------|--------------------------------|-------------------------------------|
| Spread | Array/object UGHADTO (expand)  | Function CALL kartana, [ ]/{ } madhe |
| Rest   | Values EKATRA GOLA karto       | Function PARAMETERS madhe (definition)|

Example (donhi ekatra):
function max(...nums) {          // REST - gola kela
  return Math.max(...nums);      // SPREAD - ughadla
}

----------------------------------------
ARRAY DESTRUCTURING
----------------------------------------
WHY:
- Array madhle individual elements kadhayla normal pdhtine lamb lihave lagते:
  const a = arr[0]; const b = arr[1];
- Destructuring vaparun he ek olit hote

WHAT:
- Array madhle values THET individual variables madhe "ulgadun" kadhne

Syntax:
const [var1, var2, var3] = array;

Basic Example:
const arr = [10, 20, 30];
const [a, b, c] = arr;
console.log(a, b, c); // 10 20 30
-- ORDER important: pahila variable pahilya element la, vagaire

Kami variables ghetle tar:
const colors = ["red", "green", "blue", "yellow"];
const [first, second] = colors;
// first="red", second="green" -- bakiche IGNORE hotat, error nahi

Elements SKIP karne (comma vaparun):
const arr2 = [10, 20, 30, 40];
const [a2, , c2] = arr2;  // dusra element skip
console.log(a2, c2); // 10 30

Default Value deणे:
const arr3 = [10];
const [a3, b3 = 100] = arr3;
console.log(a3, b3); // 10 100 (b3 nasल्यामule default vaparला)

REST sobat Destructuring (combo!):
const arr4 = [1, 2, 3, 4, 5];
const [first2, second2, ...rest2] = arr4;
console.log(first2, second2, rest2); // 1 2 [3,4,5]

Values SWAP karne (cool trick):
let x = 5, y = 10;
[x, y] = [y, x]; // swap
console.log(x, y); // 10 5
-- Temporary variable la garaj nahi, EKA OLIT swap hote

======================================== */
