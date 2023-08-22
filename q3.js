// 3. Get the unique values of an array
// — create a function that takes 2 args: arr
// — this function returns a new array of values from arr, only those which occur only once in that array

function genrateArr(length) {
  let outputArr = [];
  for (let i = 0; i < length; i++) {
    outputArr.push(Math.floor(Math.random(i) * 100));
  }
  return outputArr;
}
let arr = genrateArr(10);
console.log(arr);

let checkObj = {};
arr.forEach((key) => (checkObj[key] = 0));
// console.log(checkObj)
let newArr = Object.keys(checkObj);
console.log(newArr);