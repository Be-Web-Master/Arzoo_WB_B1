// 9. Given an array of names, use the forEach loop to print a greeting message for each name.

let arr = ["arzoo","aastha","anushka","surbhi"];
const newArr=[];
arr.forEach((elem)=>{
     newArr.push(`Hello, ${elem}`)
})
console.log(newArr)