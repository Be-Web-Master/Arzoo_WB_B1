// 23. Convert a given string to uppercase using a loop.
let str = "Arzoo Jain";
let newStr ="";
function toUppercase(str){
    for(let i=0;i<str.length;i++){
        if((str.charCodeAt(i) >= 97) && (str.charCodeAt(i)<= 122) ){
            newStr += String.fromCharCode(str.charCodeAt(i)-32);
        }
        else{
            newStr += String.fromCharCode(str.charCodeAt(i));
        } 
    }
    console.log(newStr);
}
console.log(toUppercase(str))