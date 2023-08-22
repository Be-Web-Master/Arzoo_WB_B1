// 5. Create an array of numbers in the given range
// — create a function that takes 3 args: startNum, endNum, steps
// — this function returns an array which has numbers from startNum, to endNum in steps.

function genArr(startNum,endNum,steps){
    let arr=[];
    for(let i=startNum;i<=endNum;i+=steps){
        arr.push(i);
    }
    return arr;
}
console.log(genArr(5,25,5))