// function calculateCircleArea(radius){
//     // let pi = 3.147;
//     let pi = Math.PI;
//     radius = radius ** 2;
//     let area = pi * radius;
//     console.log(parseFloat(area).toFixed(2));
// }
// calculateCircleArea(5)

function calculateMeanAndMedian(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    let mean = Math.floor((sum)/arr.length);
    console.log("Mean is: "+ mean);
    let median;
    if(arr.length % 2 !==0){
        let center = Math.floor((arr.length)/2)
        median = arr[center];
    }else{
        let center2 = ((arr.length/2)+((arr.length/2)+1))/2;
        median = arr[center2];
    }
    console.log("Median is: "+median)
}
calculateMeanAndMedian([3,1,4,1,5,9,2,6,5])

