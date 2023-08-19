// 25. Find and print the longest word in a sentence using loops.
let str = "I go back to December all the time";
function longestWord(str){
    let newStr = str.split(" ");
    let max = 0;
    let word = "";
    for(let i=0; i<newStr.length;i++){
        if(newStr[i].length>max){
            max += str[i].length;
            word = newStr[i]
        }
    }
    return word
}
console.log(longestWord(str));