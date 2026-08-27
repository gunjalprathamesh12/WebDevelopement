// 🟡 Mid Level
// खालचा function लिही जो एक number घेतो आणि त्याला 10 ने divide करतो. पण जर कोणी number ऐवजी string पाठवली, तर JavaScript मध्ये error येत नाही (तो NaN देतो), त्यामुळे तुला मुद्दाम error throw करावी लागेल.
// javascriptfunction divideByTen(num) {
//   try {
//     // इथे code लिही:
//     // 1. जर num हा number नसेल, तर "throw new Error('Number नाहीये!')" कर
//     // 2. नाहीतर num/10 return कर
//   } catch (error) {
//     // इथे error catch करून योग्य message console.log कर
//   }
// }

// divideByTen(50);   // काम करायला हवं
// divideByTen("hi"); // error यायला हवी, catch मध्ये पकडली जायला हवी

function divideByTen(num) {
  try {
    let result = num / 10;
    return result;
    if (typeof num !== "number") {
      throw new Error("entered value is not a number");
    }
  } catch (error) {
    console.log("Error: " + error.message);
  }
}

divideByTen(50);
