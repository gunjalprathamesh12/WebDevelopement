const classinfo = {
  kunal: {
    grade: 90,
    city: "sangamner",
  },
  prathamesh: {
    grade: 95,
    city: "pune",
  },
};

console.log(classinfo);

console.log(classinfo.kunal);
console.log(classinfo.prathamesh.city);

classinfo.kunal.grade = 92;
console.log(classinfo.kunal.grade);
classinfo.prathamesh.city = "mumbai";
console.log(classinfo.prathamesh.city);