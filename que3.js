// Reverse words in a string
// const string = "WebMaster Batch One"
// output - "One Batch WebMaster"
// function getReversedWords(string) - this function will return string of the reversed words

let str = "WebMaster Batch One"
let newStr = str.split(" ");
let resultStr=[]

function getReversedwords(newStr){
for(let i = newStr.length;i>=0;i--){
   resultStr.push(newStr[i])
}
console.log(resultStr.join(" "))
}
getReversedwords(newStr)