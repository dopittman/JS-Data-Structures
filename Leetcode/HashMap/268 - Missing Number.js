/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
2 is the missing number in the range since it does not appear in nums.

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 
2 is the missing number in the range since it does not appear in nums.
*/

const test = [0,1]

var missingNumber = function(nums) {
    let setAnswer = new Set(nums)
    let i = 0
    while(i < setAnswer.size){
        if(!setAnswer.has(i)){
            return i
        }
        i++
    }
    return i
};

console.log(missingNumber(test))

// Math solution


var missingNumberMath = function(nums) {
    let total = 0
    let expected = 0

    for(let i = 0; i < nums.length; ++i){
        total += nums[i]
        expected += i + 1
    }
    return expected - total
}
console.log(missingNumberMath(test))