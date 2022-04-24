/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    // Create new map object
    list = new Map()

    // Loop through array argument
    for(let i = 0; i < nums.length; i++){
        // if map object already contains a duplicate element return true
        if (list.has(nums[i])){
            return true;
        } else {
            // If map object does not contain the element already add it to the Map and continue looping
            list.set(nums[i], i)
        } 
    }
    // If no duplicate is found we return false
    return false;
};