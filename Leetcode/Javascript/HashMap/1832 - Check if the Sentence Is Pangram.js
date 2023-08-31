/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.


*/

let sentence ="thequickbrownfoxjumpsoverthelazydog"

var checkIfPangram = function(sentence) {
    let sentSet = new Set(sentence)
    if(sentSet.size === 26){
        return true
    } return false
};

console.log(checkIfPangram(sentence))