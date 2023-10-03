// Find the union of arrays
// function findUnion(arr) - this function will return an array of all the elements existing in both arrays,
// const arr1 = [ 1,2,3,4,5 ]
// const arr2 = [2,2,3,4,5,5,6]
// output - [2,2,3,4,5,5]

const arr1 = [ 1,2,3,4,5 ]
const arr2 = [2,2,3,4,5,5,6]
const resultArr =[];

function findUnion(arr1){
    let obj={};
for(let i=0;i<arr1.length;i++){
    if(arr1[i] in obj){
       obj[arr1[i]] ++
    }else{
        obj[arr1[i]] =1
    }
}
for(let i=0;i<arr2.length;i++){
    if(arr2[i] in obj){
        obj[arr2[i]] ++
     }else{
         obj[arr2[i]] =1
     }
}
let res = Object.keys(obj)
console.log(res)
}
findUnion(arr1)