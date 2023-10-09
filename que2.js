// Implement Binary Search
// constraint - given array will be sorted always
// function binarySearch(arr, num) - this function will return the index of the element if found, if not found return -1

const arr = [3,5,7,8,11,41,52]
const num = 8;

arr.sort();
function binarySearch(arr,num){
for(let i=0;i<arr.length;i++){
    if(arr[i]===num){
        return i;
    }
}
}
console.log(binarySearch(arr,num));