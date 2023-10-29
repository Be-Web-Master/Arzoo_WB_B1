const nums = [1,0,1,1,0,1];
function maxConsecutiveOne(nums){
    let max=0, count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            count =0;
        }else count++;
// updating max
        if(count>max){
            max = count
        }else max; 
    }
    return max;
}
console.log(maxConsecutiveOne(nums));