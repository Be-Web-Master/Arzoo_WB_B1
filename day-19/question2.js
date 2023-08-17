// 2. Implement a for loop to generate and print the first n terms of the Fibonacci sequence.

// function fibonacci(num){
//    let first = 0, second = 1;
//     console.log(first)
//     console.log(second)
    
//     for(let i=3;i<=num;i++){
//         const third = first+second;
//         console.log(third);
//         first = second;
//         second = third;
//     }
// }
// fibonacci(10)

// while
// function fibonacci(num){
//     let first = 0, second = 1;
//      console.log(first)
//      console.log(second)
     
//      let i = 3;
//      while(i<=num){
//         const third = first + second;
//         console.log(third);
//         first = second;
//         second=third;
//         i++;
//      }
//  }
//  fibonacci(10)

// -----forEach
// function arrayGen(num){
//    let outputArr =[];
//    for(let i=1;i<=num;i++){
//     outputArr.push(i);
//    }
//    return outputArr
// }
// let array = arrayGen(8)
// [1,2,3,4,5,6,7,8]
// let newArr = [0,1];
// newArr.forEach(indx => {
//     let indx1 = newArr[0];
//     let indx2 = newArr[1]
//     let indx3 = newArr[indx+2];
//     indx3 = indx1+indx2;
//     // newArr.push(newArr[indx+2]);
//     console.log(newArr)
//     indx1 = indx2;
//     indx2 = indx3;

// });

