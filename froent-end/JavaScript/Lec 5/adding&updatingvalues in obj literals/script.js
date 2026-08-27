const student = {
  name: "Prathamesh",
  age: 19,
  marks: 90,
  city: "sangamner",
};


console.log(student);

student.city= "pune";
console.log(student);

student.marks= 95;
console.log(student);

student.country= "India";
console.log(student);

student.gender="male";
console.log(student);

student.gender="female";
console.log(student);

student.marks= [100,90,89,90];
console.log(student);

delete student.age;
console.log(student);
delete student.city;
console.log(student);
delete student.country;
console.log(student);
delete student.gender;
console.log(student);