// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// function groupAnagrams(strs) - this will return array of grouped anagrams

const strs = ["eat","tea","tan","ate","nat","bat"];
const resArr =[];
const sum =0;
function groupAnagrams(arr){
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        arr[i][j].charCodeAt(j) 
    }
}
}
console.log(groupAnagrams(arr));