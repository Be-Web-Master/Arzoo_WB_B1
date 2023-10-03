// Write a function to get the pair which have maximum sum
// const arr = [2,3,11,5,7,9]
// function getMaxPair(arr) - this function will return the pairs which have maxium sum
// output - [11, 9]
// 11 + 9 = 20 are the pairs which have maximum sum

const arr = [2,3,11,5,7,9]
let max = arr[0]
let max2 = arr[0]
const maxPair = []
function getMaxPair(arr){
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
    if(arr[i]>max2 || arr[i]<max){
        max2 = arr[i];
    }
}
maxPair.push(max)
maxPair.push(max2)
console.log(maxPair)
}
getMaxPair(arr)