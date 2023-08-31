/* Example 1:
   Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
   Output: [1,2,2,3,5,6]
   Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
   The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1. 

    Example 2:
    Input: nums1 = [1], m = 1, nums2 = [], n = 0
    Output: [1]
    Explanation: The arrays we are merging are [1] and [].
    The result of the merge is [1].

    Input: nums1 = [0], m = 0, nums2 = [1], n = 1
    Output: [1]
    Explanation: The arrays we are merging are [] and [1].
    The result of the merge is [1].
    Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

    Constrainsts:
    nums1.length == m + n
    nums2.length == n
    0 <= m, n <= 200
    1 <= m + n <= 200
    -109 <= nums1[i], nums2[j] <= 109

 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

 let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

var merge = function(nums1, m, nums2, n) {

    // Keeps track of the last index of nums1 as we move backwards
    let currentTail = m + n - 1

    // Merges arrays until we reach the end of either nums1 or nums2
    while(m > 0 && n > 0){
        if (nums1[m - 1] > nums2[n - 1]){
            nums1[currentTail] = nums1[m - 1];
            m -= 1;
        } else {
            nums1[currentTail] = nums2[n - 1];
            n -= 1;
        }
        currentTail -= 1;
    }

    // If we reach the end of nums1 before nums2, then we fill the rest of nums1 with the elements of nums2
    while (n > 0){
        nums1[last] = nums2[n - 1];
        n -= 1;
        currentTail -= 1;
    }
};



