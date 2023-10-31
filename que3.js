let candyType = [6,6,4,5];

function canEatCandy(arr){
    let obj_type ={};
    arr.forEach(elem => {
        if(obj_type[elem]) obj_type[elem]++
        else obj_type[elem] = 1;
    });
    return Math.min(Object.keys(obj_type).length, Math.floor(arr.length/2))
}
console.log(canEatCandy(candyType));