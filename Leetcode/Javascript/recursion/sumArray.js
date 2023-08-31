const test = [2,4,6]

const sumArray = (arr) => {
    
    if(arr.length === 1){
        return arr[0]
    }

    return arr[0] + sumArray(arr.slice(1))
}

console.log(sumArray(test))