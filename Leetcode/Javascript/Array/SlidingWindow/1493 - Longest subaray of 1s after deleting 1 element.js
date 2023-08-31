/*
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
*/ 

const nums = [0,1,1,1,0,1,1,0,1]

var longestSubarray = function(nums) {
    let zeroCount = 0
    let start = 0
    let longestWindow = 0

    for(let i = 0; i < nums.length; ++i){
        if(nums[i] === 0){
            zeroCount++
        }
        while(zeroCount > 1){
            if(nums[start] === 0){
                zeroCount -= 1
            }
            start++
        }
        if((i - start) > longestWindow){
            longestWindow = i - start
        }
    }
    return longestWindow
};

console.log(longestSubarray(nums))