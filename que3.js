// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.
// For example, if s = "abcde", then it will be "bcdea" after one shift.
// Example 1:
// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:
// Input: s = "abcde", goal = "abced"
// Output: false

// If we add original string in itself then we can check whether the rotated string is its subset or not.

function checkRotations(str1,str2){
return ((str1.length === str2.length) && ((str1 + str1).indexOf(str2) != -1));
}
 
let str1 = "AACD", str2 = "ACDA";

if(checkRotations(str1,str2)){
    console.log("true");
}else console.log("false");