let arr = [6,8,11,9,3,5,15,1,2];
let newArr = arr.map(elem=>[elem]);

function mergeSort(arr1,arr2){
    let sortedArr =[], idx1 =0,idx2=0,length=0;
    if(arr1.length>arr2.length){
        length = arr2.length;
    }else{
        length = arr1.length;
    }

    for(let i=0;i<length;i++){
        if(arr1[idx1]>arr2[idx2]){
            sortedArr.push(arr2[idx2]);
            if(arr2.length-1 !== idx2){
                idx2++;
            }else{
                sortedArr.push(...arr1.slice(idx1))
            }
        }else{
            sortedArr.push(arr1[idx1])
            if(arr1.length-1 !== idx1){
                idx1++;
            }else{
                sortedArr.push(...arr2.slice(idx2))
            }
        }
    }
    console.log(sortedArr)
}
// for(let i=0;i<newArr.length;i+=2){
    
//    console.log(mergeSort(newArr[i],newArr[i+1]))
    
// }

function newArrSort(newArr){
    let first =0, second=1;
    const resultArr = [];
    while(first<newArr.length && second<newArr.length){
        const mergedArr = mergeSort(newArr[first],newArr[second]);
        resultArr.push(mergedArr)
        if(first === newArr.length-1){
            resultArr.push(newArr[first])
            second = -1;
            return resultArr;
        }
        console.log(resultArr)
        // if(second === newArr.length-1){
            
        //     return resultArr
        // }
        first+=2;
        second+=2;
    }
}
console.log(newArrSort(newArr))





const arr2 = [1,2,3,4,5,6,7,8,9];
for(let i=0;i<arr2.length;i+=2){
let j;
if(i === arr.length-1){
   j = -1;
}
j = i+1;
console.log({i: arr2[i],j: arr2[j]})
}