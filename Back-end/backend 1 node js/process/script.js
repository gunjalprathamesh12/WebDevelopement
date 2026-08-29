// console.log(process.argv);
let args = process.argv;
for (let i = 3; i < args.length; i++) {
  console.log(`hello ${args}`);
}
