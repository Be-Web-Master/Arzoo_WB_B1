// Write a function to move all the negative numbers on the odd index and positive numbers on the even index, 0 considered as positive
// const arr = [-1,1,2,-2,3,4,-6,-7]
// function movePositiveAndNegativeNumbers(arr)
// output - [1,-1,2,-2,3,-6,4,-7]

let arr = [-1, 1, 2, -2, 3, 4, -6, -7];

function movePositiveAndNegativeNumbers(arr) {
let newArr =[], posArr =[], negArr=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]>=0){
        posArr.push(arr[i])
    }else{
        negArr.push(arr[i])
    }
}
for(let i=0;i<arr.length;i++){
    if(i%2===0){
        let temp = posArr.shift()
        newArr.push(temp)
    }else{
        let temp2 = negArr.shift()
        newArr.push(temp2)
    }
}
console.log(newArr)
}
movePositiveAndNegativeNumbers(arr);
