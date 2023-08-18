// 21. Using loop, Create a function that takes a string as input and returns the reverse of that string.
function reverseString(str){
    let newStr = "";
    for(let i = str.length-1;i>=0;i--){
        newStr += str[i];
    }
    console.log(newStr)
}
reverseString("arzoo")