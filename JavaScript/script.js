// // // // // // // // // // // // // let score = 50;
// // // // // // // // // // // // // console.log(score);
// // // // // // // // // // // // // score = 90;
// // // // // // // // // // // // // console.log(score);
// // // // // // // // // // // // // const pi = 3.14;
// // // // // // // // // // // // // pi = 3.15;
// // // // // // // // // // // // // console.log(pi);

// // // // // // // // // // // // const arr = [1, 2, 3, 4];
// // // // // // // // // // // // arr.push(5);
// // // // // // // // // // // // arr.push(6);
// // // // // // // // // // // // console.table(arr);

// // // // // // // // // // // // var a = 10;
// // // // // // // // // // // // var a = 20;
// // // // // // // // // // // // console.log(a);

// // // // // // // // // // // // for (var i = 0; i < 3; i++) {
// // // // // // // // // // // //   setTimeout(() => {
// // // // // // // // // // // //     console.log(i);
// // // // // // // // // // // //   }, 1000);
// // // // // // // // // // // // }

// // // // // // // // // // // // let a = 20;
// // // // // // // // // // // // console.log(typeof a);
// // // // // // // // // // // // let b = "prathamesh";
// // // // // // // // // // // // console.log(typeof b);
// // // // // // // // // // // // let c = 1.11;
// // // // // // // // // // // // console.log(typeof c);
// // // // // // // // // // // // let d = true;
// // // // // // // // // // // // console.log(typeof d);
// // // // // // // // // // // // let e = null;
// // // // // // // // // // // // console.log(typeof e);
// // // // // // // // // // // // let f = 123n;
// // // // // // // // // // // // console.log(typeof f);

// // // // // // // // // // // // let arr = [1, 2, 3, 4];
// // // // // // // // // // // // console.log(typeof arr);

// // // // // // // // // // // // let stud = {
// // // // // // // // // // // //   name: "ravi",
// // // // // // // // // // // //   age: 90,
// // // // // // // // // // // //   salary: 90000,
// // // // // // // // // // // // };
// // // // // // // // // // // // console.log(typeof stud);

// // // // // // // // // // // // let aa;
// // // // // // // // // // // // let bbb = null;
// // // // // // // // // // // // console.log(typeof aa);
// // // // // // // // // // // // console.log(typeof bbb);

// // // // // // // // // // // // let a = 0.9999999999999999999;
// // // // // // // // // // // // console.log(a);

// // // // // // // // // // // console.log("5" + 3);
// // // // // // // // // // // console.log("5" - 3);
// // // // // // // // // // // console.log("4" * 4);
// // // // // // // // // // // console.log("10" + 20 + 30);

// // // // // // // // // // console.log(typeof NaN);

// // // // // // // // // console.log(10 + 5 * 2);
// // // // // // // // // console.log(10 + 19 * 5 - 2);

// // // // // // // // // console.log("5" * 2);
// // // // // // // // // console.log("8" - 2);
// // // // // // // // // console.log("12" / 2);
// // // // // // // // // console.log("5" + "5");

// // // // // // // // // let name = "prathamesh";
// // // // // // // // // let age = 19;
// // // // // // // // // console.log(`my name is ${name}
// // // // // // // // //      and my
// // // // // // // // //      age
// // // // // // // // //       is :${age}`);

// // // // // // // // let a = "APPLE";
// // // // // // // // let b = "APPLE";
// // // // // // // // if (a == b) {
// // // // // // // //   console.log(true);
// // // // // // // // } else {
// // // // // // // //   console.log(false);
// // // // // // // // }

// // // // // // // // let choice = 1;
// // // // // // // // switch (choice) {
// // // // // // // //   case 1:
// // // // // // // //     console.log("choosed one");
// // // // // // // //     break;
// // // // // // // //   default:
// // // // // // // //     console.log("wrong choice");
// // // // // // // // }

// // // // // // // let str = "prathamesh";
// // // // // // // console.log(str.toUpperCase());
// // // // // // // console.log(str.toLowerCase());

// // // // // // // let strr = " hello world  hi   ";
// // // // // // // console.log(strr.trim().toUpperCase());
// // // // // // // console.log(strr.repeat(2));

// // // // // // let arr = ["pubg", "bgmi", "dr driving", "shadow fight"];
// // // // // // console.log(arr[0]);
// // // // // // console.log(arr[1]);
// // // // // // console.log(arr[3]);
// // // // // // console.log(arr.length);

// // // // // let a = [1, "apple", { name: "prathamesh" }, 90];
// // // // // console.table(a);
// // // // // console.log(a[2]);

// // // // let i = [1, 2, 3, 4];
// // // // i[11] = 11;
// // // // console.table(i);

// // // let arr = [1, 2, 3, 4, 5];
// // // let arr1 = [6, 7, 8, 9];
// // // // let arrr = arr.concat(arr1);
// // // // console.log(arrr);
// // // let combine = [...arr, arr1];
// // // console.log(combine);
// // // console.log(arr.reverse());

// // for (let i = 1; i < 100; i++) {
// //   console.log(i);
// // }

// // let no = 4;
// // for (let i = 1; i <= 10; i++) {
// //   console.log(no * i);
// // }

// for (let i = 1; i < 4; i++) {
//   for (let j = 1; j < 4; j++) {
//     console.log(j);
//   }
//   console.log(i);
// }

let a = 10;
while (a < 100) {
  console.log(a);
  a++;
  if (a == 50) {
    console.log("ok our kaam is done");
    break;
  }
}
