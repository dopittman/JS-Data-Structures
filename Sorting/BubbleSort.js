
/*
Pros:
    Simple Implementation: Bubble Sort is easy to understand and implement. The logic behind the algorithm is straightforward, making it a good choice for educational purposes or small, simple datasets. 
    
    Space Efficiency: Bubble Sort is an in-place sorting algorithm, meaning it operates directly on the input array without requiring additional space for auxiliary data structures. It only uses a constant amount of extra space for temporary variables during the swapping process.
Cons:
    Inefficiency: Bubble Sort has a time complexity of O(n^2) in the average and worst case scenarios. This means that its performance decreases significantly as the number of elements in the array increases. For large datasets, Bubble Sort can be highly inefficient compared to more advanced sorting algorithms like Merge Sort or Quick Sort.

    Lack of Adaptive Behavior: Bubble Sort's performance is not adaptive to the initial order of elements. Regardless of whether the array is already sorted or nearly sorted, Bubble Sort always performs the same number of comparisons and swaps. This makes it less suitable for cases where the input data is often partially sorted.

    Lack of Stability: Bubble Sort is not a stable sorting algorithm. Stable sorting algorithms preserve the relative order of elements with equal values. In Bubble Sort, when two equal elements are encountered, their relative order may change during the swapping process.

*/


const test = [5,1,2,7,9,3,4,6,8];

const BubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i; j++){
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
              }
        }
    }
}

BubbleSort(test);
console.log(test);