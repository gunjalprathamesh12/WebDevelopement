let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(...arr);

let even = [2, 4, 6, 8, 10];
let odd = [1, 3, 5, 7, 9];
let combine = [...even, ...odd];
console.log(...combine);

/*========================================
SPREAD IN ARRAY LITERALS & OBJECT LITERALS
========================================

----------------------------------------
SPREAD IN ARRAY LITERALS
----------------------------------------
- '[...]' chya AAT spread vaparne - array madhe navin elements 
  KUTHEHI (suruvatila, madhye, shevati) add karता yetात

Example:
const fruits = ["apple", "banana"];

const moreFruits = ["mango", ...fruits, "orange"];
console.log(moreFruits); 
// ["mango", "apple", "banana", "orange"]

- 2 arrays combine karayla pan hेच vaparले jate:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1,2,3,4,5,6]

----------------------------------------
SPREAD IN OBJECT LITERALS
----------------------------------------
- '{ }' chya AAT spread vaparne - object madhe navin properties 
  ADD karता yetात, kinva EXISTING properties UPDATE karता yetात

Example - Navin property add karणे:
const user = { name: "Pratham", age: 20 };

const updatedUser = { ...user, city: "Ratnagiri" };
console.log(updatedUser); 
// { name: "Pratham", age: 20, city: "Ratnagiri" }

Example - Existing property OVERRIDE karणे:
const updatedAge = { ...user, age: 21 };
console.log(updatedAge); 
// { name: "Pratham", age: 21 }

IMPORTANT RULE:
- Spread nantar jar SAME property परत lihili, tar NANTARCHI value JINKATE
  const obj = { ...user, age: 21 };  -- age 21 hoil (user cha 20 override zala)

  Pan ULTA order kela tar:
  const obj2 = { age: 21, ...user };  -- age 20 hoil (user cha spread nantar 
                                          ala, tyacha age 20 jinkla)

----------------------------------------
ARRAY LITERAL vs OBJECT LITERAL SPREAD - COMPARISON
----------------------------------------
| Type            | Syntax        | Use case                          |
|------------------|---------------|-------------------------------------|
| Array Literal    | [...arr]      | Arrays combine/copy karायला         |
| Object Literal   | {...obj}      | Objects madhe property add/update  |
|                  |               | karायla, ya object cha copy banayla |

----------------------------------------
KEY TAKEAWAY
----------------------------------------
- Dohomdhe (array ani object) Spread cha MULE PURPOSE SAME:
  "existing data ughadun, navin data structure madhe taakne"
- Farak fakt KUTHE vaparтात - [ ] madhe array sathi, { } madhe object sathi

======================================== */
