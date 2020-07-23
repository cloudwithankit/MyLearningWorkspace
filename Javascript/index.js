// // var properCamelCase = 100;
// // // console.log(`"Hi my lucky number.......
// // // .........is ${properCamelCase * properCamelCase}, ${(properCamelCase += 2)}
// // // `);
// // var myStr = `"I need double Quores"hhhh!@#\\$$%^&FFF<>?/ih""`;

// // // console.log(myStr + properCamelCase);

// // // // console.log(myStr.length);
// // // console.log(myStr[myStr.length - 1]);

// // myStr[0] = "H";

// // console.log(myStr);

// // var myArr = [
// //   ["hi ", "ankit"],
// //   ["hi ", "Amit"],
// // ];

// // console.log((myArr[1] = ["chnage", "me"]));

// // console.log(myArr);

// // var myNumArr = [
// //   [1, 2, 3],
// //   [3, [4, 77, 88], 5],
// //   [6, 7, 8],
// // ];
// // // console.log(myNumArr[1][1][1]);
// // myNumArr.push(["test", [2, 3]]);
// // console.log(myNumArr);

// // var removePop = myNumArr.pop();

// // console.log(myNumArr);

// // // console.log(removePop);

// // console.log(myNumArr.shift());

// // // console.log(myNumArr);

// // myNumArr.unshift(["ths is added", "today"]);

// // console.log(myNumArr);

// var global = 100;

// function myfunction(a, b) {
//   //   console.log(`my usable function which addss two values`, a + b);
//   //console.log(typeof global);

//   return (ass = a / b);

//   var test = 133;
// }

// console.log(myfunction(550, 77));
// // var a = [1, 2, [2, 2, 2], 46565, 88.4, "ankit"];
// // console.log(typeof a);

// // console.log(typeof test);

// // // console.log(test);

// function nextInLine(arr, num) {
//   arr.push(num);
//   arr.shift();
//   return arr;
// }

// testArr = [1, 2, 3, 4, 5, 6];

// console.log(testArr);
//  console.log(nextInLine(testArr, 88));

// var x = true;
// console.log(typeof x);

// // not strcit
// if (3 == "3.0000") {
//   console.log("its true");
// } else console.log("it was false");

// //strict equality

// if (3 === 3) {
//   console.log("its true");
// } else console.log("it was false");

// if (3 !== "3") {
//   console.log("its true");
// } else console.log("it was false");

// if (3 > 5) {
//   console.log(" its true ");
// } else if (3 > 6) {
//   console.log(" its false");
// } else console.log(" final else");

// var ans = 5;

// switch (ans) {
//   case (1, 5):
//     console.log(ans);
//   case 2:
//     console.log(ans);
//     break;
//   default:
//     console.log("dafault");
// }

// function earlyret(...args) {
//   if (args[0] > args[1]) {
//     return args[1] / args[0];
//   }
//   return args[0] + args[1];
// }
// console.log(earlyret(199, 18));

// var myDog = {
//   "limbs no": 4,
//   head: 1,
//   friends: 2,
// };

// // myDogObj = new myDog();

// // console.log(myDogObj.limbs, myDogObj.friends);

// console.log(myDog.friends, myDog.head, myDog.friends, myDog["limbs no"]);

// newFunction();

// function newFunction() {
//   myDog["limbs no"] = "Happy Kutta ";

//   console.log(myDog["limbs no"]);

//   myDog["Bite me "] = "NOOOOO";

//   myDog.Bark = "yes ";

//   delete myDog.Bark;
//   delete myDog["limbs no"];
//   console.log(myDog);
// }

// function myFunction(userValue) {
//   var lookup = {
//     alpha: "A",
//     beta: "B",
//     Charlie: "C",
//   };

//   return lookup[userValue];
// }

// console.log(myFunction("Charlie"));

// var lookup = {
//   alpha: "A",
//   beta: "B",
//   Charlie: "C",
//   delta: "D",
// };

// console.log(lookup.length);

// var myArr = [];
// var i = 0;
// while (i < 5) {
//   //myArr[i] = i;
//   myArr.push(i + 5);
//   i++;
// }

// // console.log(myArr);

// for (itr in myArr) {
//   console.log(itr);
// }

// do while

// var i = 0;
// do {
//   console.log("this is my", 5 - i, "times!!");
//   i++;
// // } while (i < 5);

// // console.log(Math.random(), Math.floor(1.88999));
// // console.log(parseInt("10011", 2));

// // trenary operator
// num = 22;
// console.log(num > 0 ? "positive" : num < 0 ? "Neagtive" : "zero");

"use strict";

// let myvar = "Ankit";
// let myvar = "Ankit 11";
// console.log(myvar);

// function objFreeze() {
//   const PI = 3.24;

//   try {
//     PI = 3.22;
//   } catch {
//     console.log("Error ");
//   }
// }

// objFreeze();

// var magic = function () {
//   return new Date();
// };

// // const magic = () => new Date();
// // console.log(magic);

// const myConcat = (arr1, arr2) => arr1.concat(arr2);

// console.log(myConcat([1, 2], [3, 4]));

// use of arrow functions to print number square for + integaers

// const realnumArr = [4, 5, 67.8, -9.0, 8, 4.5, 5.6];

// const squarelist = (arr) => {
//   const squaredInt = arr
//     .filter((num) => Number.isInteger(num) && num > 0)
//     .map((x) => x * x);
//   return squaredInt;
// };

// const squaredInt = squarelist(realnumArr);
// console.log(squaredInt);

// defaul value with function

// const myArrrowFun = (arr, value = 5) => arr * 5;
// // console.log(myArrrowFun(3));

// var mul = 1;
// const myArrrowFun = (...args) => {
//   for (let i = 0; i < args.length; i++) {
//     mul = mul * args[i];
//   }
//   return mul;
// };
/// rest opera....
var mul = 1;

// const myArrrowFun = (...args) => {
//   for (let i = 0; i < args.length; i++) {
//     mul = mul * args[i];
//   }
//   return mul;
// };
// console.log(myArrrowFun(1, 2, 3, 6));

// /// aasign values to variable from object
// var destruct = { x: 3.5, y: 55, z: 6.6 };
// const { x: a, y: b, z: c } = destruct;
// console.log(a, b, c);

// const [s, d, , f] = [1, 2, 3, 4, 5, 6];
// console.log(s, d, f);

// // const [, , , ...arr] = [1, 2, 3, 4, 5, 6];

// const [...arr] = [1, 2, 3, 4, 5, 6];
// console.log(arr);

// const person = (name, age, gender) => ({ name, age, gender });

// console.log(person("ankit", 32, "male"));

// const byke = {
//   color: 22,
//   setGear: function (gearvalue) {
//     this.gearvalue;
//   },
// };

// try catch throw finally

// try {
//   console.log("start");
//   unicycle;
//   console.log("never reached");
// } catch {
//   console.log(" this is teh error ", Error.stack);
// } finally {
//   console.log(" finally the code is completed");
// }

// import capStr from "./export_example.mjs";
// console.log(capStr("ankit agrawal"));
