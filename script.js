// Bubble Sort
// const arr = [43,61,88,28,92,16,34,59,71];

// const bubbleSort = (arr)=>{
//     const length = arr.length;

//     for(let i=0;i<length;i++){
//         for(let j=0;j<length;j++){
//             if(arr[i]<arr[j]){
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] =temp;
//             }
//         }
//     }
//     console.log(arr)
// }
// bubbleSort(arr);

// Insertion Sort
// const arr = [43,61,88,28,92,16,34,59,71];

// function insertionSort(arr){
//     console.log(arr)
//     const length = arr.length;
//     for(let i=1; i<length;i++){
//         // arr[3]
//         let current = arr[i];
//         // j=>2
//         let j = i-1;
//         while(j>=0 && arr[j]>current){
//             // j+1 => j => 3rd idx=>88 2nd pe bhi 88
//             arr[j+1] = arr[j];
//             // j=>1
//             j--;
//         }
//         // j+1 => 2nd idx pe 28 joki hai current
//         arr[j+1] = current;
//     }
//    console.log(arr)
// }
// insertionSort(arr)

// Merge Sort

// let arr = [43,61,88,28,92,16,34,59,71];
// let seperate = arr.map((num)=>[num]);
// for(let i=0;i<seperate.length;){
//     mergeSort(seperate[i],seperate[i+1]);
//     i+=2;
// }

function mergeSort(arr1, arr2){
    let newArr = [], idx1 =0, idx2=0, length =0;
    if(arr1.length>arr2.length){
        length = arr2.length;
    }else{
        length = arr1.length;
    }

    
    for(let i=0;i<length;i++){
    if(arr1[idx1] > arr2[idx2]){
        newArr.push(arr2[idx2]);
        if(arr2.length !== idx2){
            ++idx2;
        }else{
            newArr.push(arr1.slice(idx1));
        }
    }
    else{
        newArr.push(arr1[idx1]);
        if(arr1.length !== idx1){
            ++idx1;
        }else{
            newArr.push(arr2.slice(idx2));
        }
    }
    }
    // console.log(newArr)
}


console.log(mergeSort([1,5,8], [11,45,87,102]));
