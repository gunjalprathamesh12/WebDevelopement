let ar = [1, 2, 3, 4, 5, 6, 7];
let minval = Math.min(ar);
console.log(minval);
//whenever i have to find any min value from an array then by this way i have to give each of array input in this min(arr[0].arr[1],arr[n])like this is very time consuming so thats why we use spread

let arr = [1, 2, 3, 4, 5, 6, 7, -0];
let minvalue = Math.min(...arr);

console.log(minvalue);
console.log(arr);

/*========================================
SPREAD OPERATOR (...) - QUICK SUMMARY
========================================

WHY:
- Array/object mule "ughadun" (expand karun) doosarikade vaparaycha asel tar
  (2 arrays jodne, function la multiple arguments pathvne, object copy karne)
- Spread Operator (...) mule he sopa hote

WHAT (Definition):
- Spread Operator (...) array/object la "ughadun" individual elements
  madhe pasarto (spread karto)
- Simple bhashet: '...' mhanje "he sagla ithe taak" asa sangणे

----------------------------------------
Basic Example - Array sobat
----------------------------------------
const nums = [1, 2, 3];
console.log(...nums); // 1 2 3 (individual elements zale)
console.log(nums);    // [1, 2, 3] (purn array)

----------------------------------------
Function Arguments madhe Spread
----------------------------------------
function add(a, b, c) {
  return a + b + c;
}
const numbers = [10, 20, 30];
console.log(add(...numbers)); // 60
// ...numbers mhanje add(10, 20, 30) zala

----------------------------------------
2 Arrays Combine karणे
----------------------------------------
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
-- concat sarkhach kaam, pan sopya pdhtine

----------------------------------------
Copy banवण्यासाठी Spread (KHUP IMPORTANT!)
----------------------------------------
const original = [1, 2, 3];
const copy = [...original];

copy.push(4);
console.log(original); // [1, 2, 3] (badlele nahi)
console.log(copy);     // [1, 2, 3, 4] (navin copy badlali)

IMPORTANT: 
- 'const copy = original;' asa kela asta tar donhi SAME array la point 
  karat astat, ek badlala ki dusra pan badalto
- Spread vaparun KHARI INDEPENDENT copy milte

----------------------------------------
Math.min/max sobat Spread vapar
----------------------------------------
let arr = [1, 2, 3, 4, 5, 6, 7];
let minvalue = Math.min(...arr);
console.log(minvalue); // 1

-- Math.min()/Math.max() la DIRECT array deta yet nahi,
   mhanun '...' vaparun array ughadावी lagते

----------------------------------------
IMPORTANT LESSON - Order/Timing Matters!
----------------------------------------
let arr = [1, 2, 3, 4, 5, 6, 7];
let minvalue = Math.min(...arr);  // ADHI calculate zala (arr madhe -0 navhtach)
arr.push(-0);                      // NANTAR -0 add kela
console.log(minvalue); // 1  (adhich calculate zalele, badlat nahi)
console.log(arr);      // [1,2,3,4,5,6,7,-0]

- JS madhe code LINE-BY-LINE, varun khali chalto
- Ekda variable la value assign zali (minvalue = 1), ki ti TYACH KSHANACHI 
  value aste - array nantar badlali tari result AAPOAP update hot nahi
- '-0' pahije asel tar push nantar PARAT Math.min call karava lagel:
  arr.push(-0);
  let minvalue = Math.min(...arr); // aata -0 sakat calculate hoil -> -0

----------------------------------------
Spread kutha-kutha vaparतात (3 mukhya thikani)
----------------------------------------
| Thikan                         | Udaharan            |
|---------------------------------|----------------------|
| Array combine karणे            | [...arr1, ...arr2]   |
| Array/Object copy karणे        | [...original]        |
| Function la multiple arguments | sum(...numbers)      |

======================================== */
let str = "PRATHAMESH";
console.log(str);
console.log(...str);
