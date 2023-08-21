// 22. Create a program that counts the occurrence of each character in a given string and displays the character count
let str = "hi my name is arzoo";
function checkOccurrence(str,char){
    let counter = {};
    let newStr = str.split("");
    for(let i=0;i<newStr.length;i++){
        if(counter[newStr[i]]){
            counter[newStr[i]] = counter[newStr[i]]+1;
        }
        else{
            counter[newStr[i]] = 1;
        }
    }
    return{counter, char: counter[char]}

}
console.log(checkOccurrence(str,'h'))