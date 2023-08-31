/* 
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "hello"
Output: "holle"

*/
const s = "leetcode"
const reverseVowels = (s) => {
    let left = 0
    let right = s.length - 1
    let arr = s.split("")
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', "I", 'O', 'U']
    
    while(left < right){
        if(vowels.indexOf(arr[left]) !== -1 && vowels.indexOf(arr[right]) !== -1)
            {
                [arr[left], arr[right]] = [arr[right], arr[left]]
                ++left;
                --right;
            }
        if(vowels.indexOf(arr[left]) == -1){
            ++left
        }
        if(vowels.indexOf(arr[right]) == -1){
            --right
        }
    }
    return arr.join("")
};

console.log(reverseVowels(s))