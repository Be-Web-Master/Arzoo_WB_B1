// Remove same character from a string if it exists 3 times
// const string = "aabbaa"
// output - "bba"
// function removeSubstring(string) - this function will return string
// explanation - a appeared 3 times so we have remove 3 a's
// b appeared 2 times so can't remove
// last a will not be removed bcoz we don't have another 2 a's in the string

const string = "aabbaa"
function removeSubstring(string){
    let count= 1;
    let obj={};
for(let i=0;i<string.length;i++){
    if(obj.hasOwnProperty(string[i])){
        Object.defineProperty(obj,string[i],{
              value: count++
        });
    }else{
        Object.defineProperty(obj,string[i],{
            value: count
      });
    }
}
return obj;
}
console.log(removeSubstring(string));