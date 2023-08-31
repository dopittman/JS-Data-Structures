
/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

 */

const test = [-1,0,1,2,-1,-4]
const test1 = [0,0,0,0]

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let answer = [];
    
    for(let i = 0; i < nums.length - 2; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue; // Skip same results
        let l = i + 1, r = nums.length - 1;

        while(l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            
            if(sum < 0) l++;
            else if(sum > 0) r--;
            else {
                answer.push([nums[i], nums[l], nums[r]]);
                while(l < r && nums[l] === nums[l + 1]) l++; // Skip same results
                while(l < r && nums[r] === nums[r - 1]) r--; // Skip same results
                l++;
                r--;
            }
        }
    }
    return answer;
};

console.log(threeSum(test))