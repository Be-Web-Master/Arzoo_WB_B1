let str = "fly me to moon";
function countlengthofLastWord(str){
    let newStr = str.split(" ");
    let count=0
    // console.log(newStr);
    for(let i=0;i<newStr.length;i++){
        if(i === newStr.length-1){
            // console.log(newStr[i]);
            for(let j=0;j<newStr[i].length;j++){
                count++;
            }
        }
    }
    return count;
}
console.log(countlengthofLastWord(str));