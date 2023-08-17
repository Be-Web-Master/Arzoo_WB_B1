// 12.  Implement a function that uses the reduce method to calculate the sum of all elements in an array.

function arrayGen(num){
    let outputArr =[];
    for(let i=1;i<=num;i++){
     outputArr.push(i);
    }
    return outputArr
 }
 let array = arrayGen(5);
 let initialVal =0;
 const calcSum = array.reduce((acc,curr)=>{
      return acc + curr
 },initialVal)
 console.log(calcSum)