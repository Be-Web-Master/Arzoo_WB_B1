// 2. Get indices of all occurrences of a value in an array (almost polyfill of Array.prototype.findIndex)
// — create a function that takes 2 args: arr, value
// — this function returns a an array of numbers, where each number is the index position of the value in arr

function genrateArr(length){
    let outputArr =[];
    for(let i=0;i<length;i++){
        outputArr.push(i);
    }
    return outputArr;
}
let arr = genrateArr(5);

function checkOcc(arr,value){
    let count = 0;
    let index;
    for(let i=0;i<arr.length;i++){
        if(value===arr[i]){
            count++;
            index =i;
        }
        else{
            count=0;
        }
    }

    // arr.forEach(elem => {
    //     if(value === elem){
    //         count++;
    //         index = elem;
    //     }else{
    //         count=0;
    //     }
    // });
    return {count,index};
}
console.log(checkOcc(arr,4))