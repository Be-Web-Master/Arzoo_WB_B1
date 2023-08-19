// 24. Truncate a given string to a specified length and add an ellipsis at the end using loops.

let str = "Take me back to the night we met";
let subString =""
function myTruncate(str,n){
    if(str.length>n){
        subString += str.slice(0,n-1) + "..."
    }
    else{
        return str;
    }
    return subString;
}
console.log(myTruncate(str,5))
