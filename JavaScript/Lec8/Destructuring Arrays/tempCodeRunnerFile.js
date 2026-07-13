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
