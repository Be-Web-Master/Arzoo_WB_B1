// 7. Write a function that takes an array of numbers and calculates the sum of even numbers using a for...of loop

function arrayGen(num){
   let outputArr =[];
   for(let i=1;i<=num;i++){
    outputArr.push(i);
   }
   return outputArr;
}
let array = arrayGen(10)
console.log(array)
let sum =0;
for (let num of array) {
    if(num % 2 === 0){
       sum += num;
    }
}
console.log(sum)