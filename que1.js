// Write a function to move all the negative numbers on the odd index and positive numbers on the even index, 0 considered as positive
// const arr = [-1,1,2,-2,3,4,-6,-7]
// function movePositiveAndNegativeNumbers(arr)
// output - [1,-1,2,-2,3,-6,4,-7]

let arr = [-1, 1, 2, -2, 3, 4, -6, -7];
arr = arr.sort();
console.log(arr);
let newArr = [];
function movePositiveAndNegativeNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      for (let i = 1; i < newArr.length; i += 2) {
        newArr.push(arr[i]);
      }
    } else if (arr[i] >= 0) {
      for (let i = 0; i < newArr.length; i += 2) {
        newArr.push(arr[i]);
      }
    }
  }
  console.log(newArr);
}
movePositiveAndNegativeNumbers(arr);
