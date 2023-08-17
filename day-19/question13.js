// 13.  Write a program that finds the maximum value in an array of numbers using the reduce method.
function arrayGen(num){
    let outputArr =[];
    for(let i=1;i<=num;i++){
     outputArr.push(Math.floor(Math.random()*10));
    }
    return outputArr
}

let array = arrayGen(5);
console.log(array)
let initialVal =0
const calcMax = array.reduce((acc,curr)=>{
      if(curr > acc){
        return curr
      }
      return acc
 },initialVal)
 console.log(calcMax)