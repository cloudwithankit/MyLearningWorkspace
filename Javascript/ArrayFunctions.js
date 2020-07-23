var myArr = [2, 2, 3, 77, 21];

//forEach

myArr.forEach((element) => {
  console.log(element);
});
// map

const doublemyArr = myArr.map((element) => element * 2);
console.log(doublemyArr);
// filter
const filtermyArr = myArr.filter((element) => element % 2 == 0);
console.log(filtermyArr);
// reduce
const reducemyArr = myArr.reduce((element, result) => result + element);
console.log(reducemyArr);

// some

const someArr = myArr.some((element) => element % 2 == 0);
console.log(someArr);

// every

const evryArr = myArr.every((element) => element % 2 == 0);
console.log(evryArr);

//find

const findArr = myArr.find((element) => element % 7 == 0);
console.log(findArr);

// find index

const indexArr = myArr.findIndex((element) => element % 8 == 0);
console.log(indexArr);
