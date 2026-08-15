let jsondata =
  '{"message":"https://images.dog.ceo/breeds/poodle-standard/n02113799_4946.jpg","status":"success"}';

let validresponse = JSON.parse(jsondata);
console.log(validresponse.message);
// accessing jason data

//creating data into jason forma
let student = {
  name: "prathamesh",
  age: 90,
  email: "gunjalprathamesh1212@gmail.com",
};

let str = JSON.stringify(student);
console.log(str);
