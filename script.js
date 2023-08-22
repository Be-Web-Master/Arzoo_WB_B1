// LINEAR SEARCH

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// function linearSearch(arr, searchElem) {
//   for (let i = 0; i < arr.length; i++) {
//     if (searchElem === arr[i]) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(linearSearch(arr, 5));

// BINARY SEARCH
function binarySearch(arr, searchElem) {
  //   let start = 0,
  //     end = arr.length - 1;
  //   let mid = Math.floor((start + end) / 2);

  //   while (arr[mid] !== searchElem && start < end) {
  //     if (searchElem < arr[mid]) {
  //       end = mid - 1;
  //     } else if (searchElem > arr[mid]) {
  //       start = mid + 1;
  //     }
  //     mid = Math.floor((start + end) / 2);
  //   }
  //   if (arr[mid] === searchElem) {
  //     return mid;
  //   }
  //   return -1;

  let start = 0,
    end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== searchElem && start < end) {
    if (searchElem < arr[mid]) {
      end = mid - 1;
    } else if (searchElem > arr[mid]) {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (arr[mid] === searchElem) {
    return mid;
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));
