// Find the peak of the mountain
// const arr = [ 1,2,4,3,6,3,1 ]
// output - 6
// function getPeak(arr) - this function will return peak of the mountain, 6 is greater among all so 6 is the peak

const arr = [ 1,2,4,3,6,3,1 ]
let max = arr[0]
function getPeak(arr){
for(let i=1;i<arr.length;i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
return max;
}
console.log(getPeak(arr));