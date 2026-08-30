// console.log(process.argv);
let args = process.argv;
for (let i = 3; i < args.length; i++) {
  console.log(`hello ${args}`);
}
// script.js
console.log("Process ID:", process.pid);
console.log("Current Directory:", process.cwd());
console.log("Execution Path:", process.execPath);
console.log("Arguments:", process.argv);

/*process in node js means in node js we are exeuting any code file like script.js prcess is an object which will tell us info about that executing script.js what is its process id location of file execution path etc is it */
