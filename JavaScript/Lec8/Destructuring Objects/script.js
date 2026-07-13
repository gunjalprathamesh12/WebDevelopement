const student = {
  name: "prathamesh",
  age: 14,
  class: 9,
  subjects: ["math", "english", "science", "marathi"],
  username: "badboy11",
  password: "badboy@113",
};

// let username = student.username;
// let password = student.password;
// console.log(username);
// console.log(password);

//this is bad way if we have multiple students or their properties thats why we use destructuring

let { username, password, city = "mumbai" } = student;
console.log(username);
console.log(password);
console.log(city);
