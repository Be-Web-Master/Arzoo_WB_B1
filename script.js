// 1. Creating Polyfill of map()
// map takes three parameters arr , callback function and this Arg. and callback also takes three parameters elem, index, array

// function myMap(arr, callback, thisArg){
//     //agr hum callback nhi denge ya uske bajaye kuch denge to error throw hoga
//     if(!callback || typeof callback!=='function'){
//         return new Error (`${callback} is not a function`)
//     }
//     if(!arr){
//         return new Error ("map is not defined")
//     }else if(!Array.isArray(arr)){
//         return new Error (`${arr} map is not a function`)
//     }
//     const resultArr =[];
//     for(let i=0;i < arr.length;i++){
//        const arrElem = callback(arr[i],i,arr);
//        resultArr.push(arrElem);
//     }
//     return resultArr;
// }
// const callFunc = (e,i,arr)=>{
//     return e ** i + arr.length;
// }
// console.log(myMap([1,2,3,4,5],callFunc));

// this is map()
// console.log([1,2,3,4,5].map((elem,i,arr)=>{
//     return elem ** i + arr.length;
// }))

// 2. filter
// function myFilter(arr, callback){
//     //agr hum callback nhi denge ya uske bajaye kuch denge to error throw hoga
//     if(!callback || typeof callback!=='function'){
//         return new Error (`${callback} is not a function`)
//     }
//     if(!arr || !Array.isArray(arr)){
//         return new Error ("filter is not defined")
//     }
//     const resultArr =[];
//     for(let i=0; i < arr.length; i++){
//        const arrElem = callback(arr[i],i,arr);
//     //    arrElem mai true ya false ayega
//        if(arrElem){
//         // callback true ya false return karega but hum truthy value print karana chahte hai, to hum elem push karenge
//         resultArr.push(arr[i]);
//        }
//     }
//     return resultArr;
// }
// const callFunc = (num)=>{
//     // yha pe if dene ki need nhi hai
//        return num > 2;
// }
// console.log(myFilter([1,2,3,4,5],callFunc));

// this is filter
// console.log([1,2,3,4,5].filter((e)=>e>2))

// 3. forEach
// function myForEach(arr, callback){
//     //agr hum callback nhi denge ya uske bajaye kuch denge to error throw hoga
//     if(!callback || typeof callback!=='function'){
//         return new Error (`${callback} is not a function`)
//     }
//     if(!arr || !Array.isArray(arr)){
//         return new Error ("filter is not defined")
//     }
//     // forEach is a iterative method
//     // foreach bs arr ke elem ko iterate krta hai vo bs callback run kr dega or existing elem ko change nhi krega
//     // foreach koi naya array print nhi krta hai
//     // const resultArr =[];
//     for(let i=0; i < arr.length; i++){
//     //    const arrElem = 
//     // keval callback ko call karenge, vo kya return kare hume usse mtlb nhi 
//        callback(arr[i],i,arr);
//     // koi bhi elem push nhi krna hai
//     //    resultArr.push(arrElem);
//     }
//     // return resultArr;
// }
// const callFunc = (num,index,arr)=>{
//     // yaha pe kuch bhi de do bs callback ko hr elem pe call krna hai
//       return num ** index
// }
// console.log(myForEach([1,2,3,4,5],callFunc));

// 4. reduce
// reduce take 2 parameters -> callback and initialValue
// this callback takes 4 parameters -> accumulator, elem, index, arr

function myReduce(arr, callback, initialValue){
    //agr hum callback nhi denge ya uske bajaye kuch denge to error throw hoga
    let accToBe, startIdx;
    if(initialValue !== undefined){
        if(!arr.length) return initialValue;
        accToBe = initialValue;
        startIdx = 0;
    }
    if(initialValue !== undefined && !arr.length){
        return new Error ("Cannot run reduce without initialValue");
    }
    if(!initialValue && arr.length){
         accToBe = arr[0];
         startIdx = 1;
    }

    for(let i=startIdx;i < arr.length;i++){
       accToBe = callback(accToBe,arr[i],i,arr);
    }
    return accToBe;
}
const callFunc = (acc,elem,idx,arr)=>{
    return acc + elem
}
console.log(myReduce([], callFunc, false));