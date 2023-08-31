const s = ["H","a","n","n","a","h"]
const str = ["B","a","n","a","n","a"]

// Recursive solution (returns a new array without modifying the original)
const reverseString = (s) => {
    if (!s.length) return s;
    return reverseString(s.slice(1)).concat(s[0]);
};

console.log(reverseString(s)) // prints out ['h', 'a', 'n', 'n', 'a', 'H' ]
console.log(s) // prints out ["H","a","n","n","a","h"]


// Recurseive two-pointer solution (modifies the original array)
const twoPointerSolution = (s) => {
    let left = 0
    let right = s.length - 1

    while(left <= right) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
    return s
}

console.log(twoPointerSolution(str)) // prints out [ 'a', 'n', 'a', 'n', 'a', 'B' ]
console.log(str) // prints out [ 'a', 'n', 'a', 'n', 'a', 'B' ]