
/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

*/

const test = [1,1,1,0,0,0,1,1,1,1,0]

/*
My solution
Runtime: 52 ms
Memory Usage: 47.3 MB
 */

var longestOnes = function(nums, k) {
    let zeroes = 0, left = 0, maxLength = 0, length = 0

    for(let i = 0; i < nums.length; ++i){
        if(nums[i] === 0){
            zeroes++
        }
       length++
        while(zeroes > k){
            if(nums[left] === 0){
                zeroes--
            } 
            left++
            length--
        }
        maxLength = Math.max(maxLength, length)
    }
    return maxLength
}


console.log(longestOnes(test, 2))