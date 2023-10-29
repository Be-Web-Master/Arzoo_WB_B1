// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

const nums = [-1,0,1,2,-1,-4];

function duplicateTriplets(nums,target){
const res = [];
for(let i=0; i<nums.length; i++){
    for(let j=i+1; j<nums.length; j++){
        for(let k= j+1; k<nums.length;k++){
            if(nums[i] + nums[j] + nums[k] === target){
                console.log({i,j,k});
                res.push(nums[i],nums[j],nums[k]);
                return res;
            }
        }
    }
}
}
console.log(duplicateTriplets(nums,0));