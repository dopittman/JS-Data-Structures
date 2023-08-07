/*
Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1.

Exmaple 1

Input: nums = [-3,2,-3,4,2]
Output: 5
Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
step by step sum
startValue = 4 | startValue = 5 | nums
  (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
  (1 +2 ) = 3  | (2 +2 ) = 4    |   2
  (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
  (0 +4 ) = 4  | (1 +4 ) = 5    |   4
  (4 +2 ) = 6  | (5 +2 ) = 7    |   2

Example 2:

Input: nums = [1,-2,-3]
Output: 5
*/

// My solution
var minStartValue = function(nums) {
    let sumArr = [nums[0]]
    for(let i = 1; i < nums.length; ++i){
        sumArr.push(nums[i] += sumArr[i - 1])
    }
    let minNum = Math.min(...sumArr)
    if(minNum < 1){
        minNum = Math.abs(minNum) + 1
        return minNum
    } else {return 1}
};

console.log(minStartValue([-3,2,-3,4,2]))


// Leetcode Solution
var minStartValueSolution = function(nums) {
    let total = 0
    let minVal = 0
    for(let i = 0; i < nums.length; ++i){
        total += nums[i]
        minVal = Math.min(minVal, total)
    }
    return -minVal + 1
};
console.log(minStartValueSolution([-3,2,-3,4,2]))
