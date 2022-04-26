var twoSum = function(nums, target) {
    let list = new Map()
    
    for(let i = 0; i < nums.length; i++){
        let solution = target - nums[i];
        if (list.has(solution)){
            return [list.get(solution), i]
        } else {
            list.set(nums[i], i)
        }
    }  
};

let testArr = [2,7,11,15]
let target = 9

console.log(twoSum(testArr,target))