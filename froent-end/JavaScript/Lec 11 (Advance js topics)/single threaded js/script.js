setTimeout(() => {
  console.log("setTimeout");
}, 2000);

console.log("start");
// js is a simgle threaded language so at a time it only executes only one task but if we try to add more than 2 set timeout fucntion in our both having same timeout at that time browsers handles these multiple tasks at a same time
// it add it into call stack and executes them one by one after the timeout is completed

//js langauge does not wait browsers can wait for the timeout to complete and then it executes the next task in the call stack
