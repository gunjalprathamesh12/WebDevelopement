let arr=[3,2,4,8,7,6,5,1];
console.log(arr.sort()); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]   // Sort function is called
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]   // Original array is sorted
console.log(arr.sort((a,b)=>(b-a))); // [ 8, 7, 6, 5, 4, 3, 2, 1 ]   // Sort function is called with a callback function
console.log(arr); // [ 8, 7, 6, 5, 4, 3, 2, 1 ]   // Original array is sorted