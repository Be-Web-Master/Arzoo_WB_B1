// 14. Without using substring, Extract a substring from a given string based on start and end indices using loops.

function mysubString(idx1, idx2){
    let str = "You remind me of wine";
    let newStr ="";
    for(let i=idx1;i<idx2;i++){
        newStr += str[i];
    }
    return newStr
}
console.log(mysubString(0,3))