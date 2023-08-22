// 4. Compare two Arrays (polyfill of Array.prototype.every)
// — create a function that takes 2 args: arr1, arr2
// — this function returns either true or false, if each element of both the arrays are equal with ===

// function compareArr(arr1, arr2) {
//   let flag=true;
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     // console.log(arr1[i], arr2[i]);
//     if (arr1[i] !== arr2[i]) {
//       flag = false;
//     } 
//   }
//   return flag;
// }
// console.log(compareArr([1, 2, 3, 4], [1, 2, 4, 4]));
