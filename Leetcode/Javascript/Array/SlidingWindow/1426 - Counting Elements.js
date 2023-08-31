/*
Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

Example 1:

Input: arr = [1,2,3]
Output: 2
Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

*/

const test = [1,3,2,3,5,0]

var countElements = function(arr) {
    let currSet = new Set(arr)
    let answer = 0
    
    for(let i = 0; i < arr.length; ++i){
        if(currSet.has(arr[i] + 1)){
            answer++
        }
    }
    return answer
};

console.log(countElements(test))