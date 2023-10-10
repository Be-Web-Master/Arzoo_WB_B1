// Implement Quick Sort
// const arr = [5,3,4,6,11,2,1]
// output - [1,2,3,4,5,6,11]
// function quickSort(arr) - this function will return an sorted array in ascending order

const arr = [5,3,4,6,11,2,1];
function quickSort(arr){
if(arr.length < 1){
    return arr;
}
let pivot = arr[0], leftArr =[], rightArr=[];

for(let i=1;i<arr.length;i++){
    if(arr[i]<pivot){
        leftArr.push(arr[i])
    }else{
        rightArr.push(arr[i])
    }
}
return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}
console.log(quickSort(arr));