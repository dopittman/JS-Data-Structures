var twoSum = function(nums, target) {
    // Create map to hold possible solutions to our problem
    let list = new Map()
    
    // Loop through given array
    for(let i = 0; i < nums.length; i++){
        // Solution is the complement of the current 'nums' element and the target number
        let solution = target - nums[i];
        
        // If the Map contains the solution variable as a key, 
        // return the saved index value of the first number
        if (list.has(solution)){
            return [list.get(solution), i]
        } else {
            // Otherwise crate a key-value pair of currentElement: currentIndex
            list.set(nums[i], i)
        }
    }  
};

// Testing purposes only
let testArr = [2,7,11,15]
let target = 9

console.log(twoSum(testArr,target))