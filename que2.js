// Find if the given number exists in an array - ( do not use built-in function ) [11,34,22,21,5,22] -> find 21 if exists return true otherwise false


function findNumber(num){
    let arr = [11,34,22,21,5,22];
    for(let i=0;i<arr.length;i++){
        if(arr[i] === num){
            return true;
        }
    }
    return false;
}
console.log(findNumber(21))