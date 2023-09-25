// Reverse an array. [1,2,3,4,5,6] -> [6,5,4,3,2,1]

let arr1 = [1,2,3,4,5,6];
let newArr = [];
for(let i=arr1.length-1;i>=0;i--){
    newArr.push(arr1[i]);
}
console.log(newArr)