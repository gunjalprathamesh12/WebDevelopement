let arr = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let even = arr.filter((el) => el % 2 === 0);
console.log(even); // [2,4,8,10,12,14,16,18,20]
let odd = arr.filter((el) => el % 2 === 1);
console.log(odd); // [1,3,5,7,9,11,13,15,17,19]

/*========================================
MAP() & FILTER() - QUICK SUMMARY
========================================

----------------------------------------
MAP() FUNCTION
----------------------------------------
- Pratyek element var function chalvun, tyacha result NAVIN array madhe return karto
- MULA array BADALAT NAHI (tashich rahते)

Syntax:
const newArray = array.map((element) => {
  return // badlelela value
});

Example:
const nums = [1, 2, 3];
const doubled = nums.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]
console.log(nums);    // [1, 2, 3] -- mul array tashich

RULE: Navin array havi asel (transform karayacha) -> map vapar

----------------------------------------
FILTER() FUNCTION
----------------------------------------
- Pratyek element var CONDITION (true/false) check karto
- Je elements TRUE detat, TECH navin array madhe thevto

Syntax:
const newArray = array.filter((element) => {
  return // condition (true/false)
});

Example:
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4, 6]

RULE: Kahi specific elements SELECT/REJECT karayche astil -> filter vapar

----------------------------------------
MAP vs FILTER - COMPARISON
----------------------------------------
| Method | Kaay karto                      | Return kaay              |
|--------|-----------------------------------|---------------------------|
| map    | pratyek element BADLTO (transform)| navin array (SAME length) |
| filter | pratyek element SELECT/REJECT     | navin array (KAMI/equal length) |

----------------------------------------
CHAINING (ekatra vaparta yetat)
----------------------------------------
const nums = [1, 2, 3, 4, 5, 6];

const result = nums
  .filter((n) => n % 2 === 0)  // aadhi even kadh -> [2, 4, 6]
  .map((n) => n * 10);          // mag pratyekala *10 kar -> [20, 40, 60]

console.log(result); // [20, 40, 60]

======================================== */
