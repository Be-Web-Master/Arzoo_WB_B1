// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
function checkPalindrome(str){
let newStr = "";
for(let i=str.length-1 ; i>=0 ; i--){
    newStr += str[i];
}
if(str === newStr){
    console.log("string is palindrome");
}else{
    console.log("not palindrome")
}
}
checkPalindrome("mom")