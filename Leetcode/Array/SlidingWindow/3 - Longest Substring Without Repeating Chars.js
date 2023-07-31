/*
Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/
let test  = "abcabcbb"

var lengthOfLongestSubstring = function(s) {
    let dupeSet = new Set(), longest = 0, left = 0, curr = 0

    for(let right = 0; right < s.length; ++right){
        curr++
        while(dupeSet.has(s[right])){
            dupeSet.delete(s[left])
            left++
            curr--
        }
        dupeSet.add(s[right])
        longest = Math.max(longest, curr)
    }

    return longest
};

console.log(lengthOfLongestSubstring(test))
