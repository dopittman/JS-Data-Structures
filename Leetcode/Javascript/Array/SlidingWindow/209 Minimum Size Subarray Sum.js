/*
    Given an array of positive integers nums and a positive integer target, return the minimal length of a 
    subarray
    whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
*/

var minSubArrayLen = function(target, nums) {
    let start = 0
    let counter = 0
    let current = 0
    let minLength = 0

    for(let i = 0; i < nums.length; ++i){
        if(nums[i] === target){
            minLength = 1
            return
        }

        curent += nums[i]
        counter++

        if(current === target){
            minLength = counter
        }
        while(current > target){
            
        }


    }



    return minLength
};