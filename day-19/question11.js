// 11. Write a function that takes an array of numbers and returns a new array containing only the prime numbers using the filter method.

function arrayGen(num){
   let outputArr =[];
   for(let i=1;i<=num;i++){
    outputArr.push(i);
   }
   return outputArr
}
let array = arrayGen(10);
const printPrimeNum = array.filter((elem)=>{
    for(let i=2;i<elem;i++){
        if(elem % i === 0){
            return false;
        }
        // return elem !== 1
        else if( elem !== 1){
            return true;
        }
    }
})
console.log(printPrimeNum)