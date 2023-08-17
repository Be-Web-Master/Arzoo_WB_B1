// 8. Use the for...of loop to iterate through an array of strings and concatenate them into a single sentence
const arr = ["arzoo","aastha","anushka","sakshi"]
// const newArr=[];
let newArr;
for (let elem of arr) {
    newArr=arr.join(" ")
}
console.log(newArr)