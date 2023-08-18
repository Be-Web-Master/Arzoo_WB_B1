// 17. Write a function that takes a positive integer as input and returns the sum of its digits each raised to the power of the number of digits in the original integer.
function numberPowerSum(num){
   let newNum = ""+num, length = newNum.length, sum=0;
   while(num>0){
    let rem = num %10;
    sum += Math.pow(rem,length);
    num = Math.floor(num/10);
   }  
console.log(sum)
   
}
numberPowerSum(123)