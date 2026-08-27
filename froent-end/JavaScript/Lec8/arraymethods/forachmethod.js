let arr = [1, 2, 3, 4, 5];

arr.forEach(function (value, index) {
  console.log("Value: " + value + " Index: " + index);
});

/*  ========================================
JAVASCRIPT - PART 8 REVISION NOTES
========================================
(Revision purpose sathi - months/years nantar quick refresh)

----------------------------------------
1. ARRAY METHODS - forEach()
----------------------------------------
- Array chya PRATYEK element sathi dilela function EKDA chalvto (loop sarakha, pan built-in)
- for loop cha short/clean alternative

Syntax:
array.forEach((element) => {
  // pratyek element sathi he kaam kar
});

Normal for loop (juna way):
const nums = [10, 20, 30];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

forEach vaparun (navin/sopa way):
const nums = [10, 20, 30];
nums.forEach((num) => {
  console.log(num);
});
-- Dohon SAME kaam kartat (array print)

3 Parameters milतात forEach chya function la:
array.forEach((element, index, wholeArray) => {
  // element = sadhyacha value
  // index = sadhyacha position (0,1,2...)
  // wholeArray = purn array
});

IMPORTANT:
- forEach kahihi RETURN karat nahi (undefined deto)
  const result = [1,2,3].forEach((n) => n*2);
  console.log(result); // undefined
- forEach madhe 'break'/'continue' VAPARTA YET NAHI (error yeto)
  - Loop madhech thambवaycha asel tar 'for' loop vapar

for loop vs forEach - COMPARISON:
| for loop                        | forEach loop                  |
|----------------------------------|--------------------------------|
| Juna, lamb syntax                | Chota, modern syntax           |
| break/continue chalte            | break/continue CHALAT NAHI     |
| Index manually banawava lagto(i) | Index aapoap milto (parameter) |
| Kontyahi loop sathi (array,etc)  | Fakt ARRAY sathi                |

PRACTICAL REALITY (Industry madhe):
- Modern JavaScript madhe forEach/map/filter JAST vaparle jatat 'for' loop peksha
  (clean code, kami bugs, professional codebases madhe standard)
- 'for' loop FAKT specific situations sathi vaparava:
  1. Madhech loop thambवaycha asel (break/continue lagto)
  2. Array ulTya dishene (backward) firवaycha asel
  3. Performance khup critical asel (heavy computations)
  4. Don arrays parallel madhe firwaycha custom index sobat

SIMPLE RULE:
- Sadha array firवun kaam -> forEach vapar (clean)
- Madhech thambवaycha -> for loop vapar
- Navin array banwaycha (transform) -> map (pudhcha topic)
- Kahi elements filter karaycha -> filter (pudhcha topic)

========================================
Notes made on: JavaScript Part 8 - Course Revision (In Progress)
======================================== */
