// Prefix sums allow us to find the sum of any subarray in O(1)O(1)

const testArr = [1,2,3,4,5,6,7]

const prefixSum = (arr) => {
    let prefix = [arr[0]]
    for(let i = 1; i < arr.length; ++i){
        prefix.push(arr[i] + prefix[prefix.length - 1])
    }
    return prefix
}

const sumArr = prefixSum(testArr)

console.log(sumArr)

// To get the sum of a subarray of the prefix-sum array you can subtract the value of the item before the starting index [i - 1] 
// in the subarray from the last item (j)
// So if you want the sum of index 2 through 5 you would do sumArray(5) - sumArr[1]

// thirdToSixth = 21 - 6 = 15
const thirdToSixth = sumArr[5] - sumArr[2] + testArr[2]
console.log(thirdToSixth)



let aqTest = [1, 6, 3, 2, 7, 2]
let queries = [[0, 3], [2, 5], [2, 4]]
let limit = 13

var answerQueries = function(nums, queries, limit) {
    let prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }
    console.log(prefix)
    
    let ans = [];
    for (const [x, y] of queries) {
        let curr = prefix[y] - prefix[x] + nums[x];
        console.log(curr)
        ans.push(curr < limit);
    }
    
    return ans;
};

console.log(answerQueries(aqTest,queries,limit))


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
