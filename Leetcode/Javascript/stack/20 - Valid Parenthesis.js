/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
 */


var isValid = function(s) {
    let stack = [];

    for(c of s) { 
        if(c === '{' || c === '[' || c === '(') {
            stack.push(c);
        } else {
            if(stack.length === 0){
                return false;
            }
            let last = stack.pop();
            if(c === '}' && last !== '{') {
                return false;
            }
            if(c === ']' && last !== '[') {
                return false;
            }
            if(c === ')' && last !== '(') {
                return false;
            }
        }
    }
    return stack.length === 0;
}