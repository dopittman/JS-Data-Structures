/* 

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
Any answer with a calculation error less than 10-5 will be accepted.

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

*/

const test = [-1]

var findMaxAverage = function(nums, k) {
    let right = 0, curr = 0, answer = -Number.MAX_VALUE;
    let total = 0

    
    for(let left = 0; right < nums.length; ++left){
        console.log(right)
        while(curr < k){
            console.log(curr)
            total += nums[right]
            right++
            curr++
            console.log(total)
            console.log(right)

        }
        
        
        let average = total / k
        console.log(answer)
        console.log(average)
        if(average > answer){
            answer = average
        }
        total -= nums[left]
        curr--
        console.log(curr)

        
    }
    return answer
};

console.log(findMaxAverage(test, 1))

const nums = [1,12,-5,-6,50,3]

var findMaxAverag2 = function(nums, k) {
    let maxSum = 0
    for(let i = 0; i < k; ++i){
        maxSum += nums[i]
    }
    if(nums.length===k){
        let avg= maxSum/k 
        return avg.toFixed(5);  
      };
      let currentSum = maxSum
      for(let i = k; i < nums.length; ++i){
        currentSum = currentSum - nums[i-k] + nums[i]
        maxSum = Math.max(currentSum, maxSum)
      }
      return maxSum/k
}

console.log(findMaxAverag2(nums, 4))