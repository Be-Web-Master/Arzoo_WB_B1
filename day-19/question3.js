// 3. Write a program that uses a while loop to count down from a user-input number to 1. Print each countdown value.
function arrayGen(num){
   const outputArr =[];
   for(let i=25;i>=1;i--){
    outputArr.push(i);
   }
   return outputArr;
}
let array = arrayGen(25)

function countDown(array){
// for
for(let i=num; i>=1;i--){
    console.log(i)
}

// while
let i=num;
while(i>=1){
        console.log(i);
        i--;
    }

// forEach
// array.forEach(elem => {
//     console.log(elem)
// });
}
countDown(array)