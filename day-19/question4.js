// 4. Create a do...while, for, forEach, map loop that calculates and prints the factorial of a given number.

// ------for
// function calcFactorial(num){
//     let res =1;
//     for(let i=num;i>=1;i--){
//         res*=i;
//     }
//     console.log(res)
// }
// calcFactorial(5)

// ----do..while
// function calcFactorial(num){
//    let res=1,i=num;
//    do{
//       res*=i;
//       i--;
//    }while(i>=1)
//    console.log(res)
// }
// calcFactorial(5)

// while
// function calcFactorial(num){
//    let res=1,i=num;
//    while(i>=1){
//        res*=i;
//        i--;
//     }
// console.log(res)
// }
// calcFactorial(5)

// forEach

function calcFactorial(num){
    const outputArr = [];
    for(let i=1; i<=num; i++){
        outputArr.push(i)
    }
    return outputArr;
}
const arr = calcFactorial(5)

let res = 1;
arr.forEach(elem =>{
    res = res * elem;
    // console.log(res, elem)
    console.log(res);
})

// ----map
// function arrayGen(num){
//     let outputArr =[];
//     for(let i=1;i<=num;i++){
//      outputArr.push(i);
//     }
//     return outputArr
//  }
//  let array = arrayGen(5)
//  let res =1;
//  const mapfact = array.map((elem)=>{ 
//     return res*=elem;
//  });
// console.log(mapfact)