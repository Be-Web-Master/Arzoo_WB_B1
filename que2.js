// Capitalize first letter of every string in an array
// const arr = [ "abcd", "Pqrs", "xyz", "lmno" ]
// output - [ "Abcd", "Pqrs", "Xyz", "Lmno" ]
// function capitalizeFirstChar(arr) - this function will return array of strings with the first character as capital

const arr = [ "abcd", "Pqrs", "xyz", "lmno" ]
const res=[];
function capitalizeFirstChar(arr){
for(let i=0;i<arr.length;i++){
    const arr2= arr[i].charAt(0).toUpperCase();
    res.push(arr2);
}
return res;
}
console.log(capitalizeFirstChar(arr));