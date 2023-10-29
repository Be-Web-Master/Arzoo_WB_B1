// Given an integer n, return true if n is a perfect number, otherwise return false.
// Example 1:
// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.

const num =28;

function isPerfectNum(num){
    let sum =0
for(let i=0; i<num ;i++){
  if(num % i === 0){
    sum += i
  }
//   console.log(sum);
}
if(sum === num){
    return true;
}
return false;
}
console.log(isPerfectNum(num));