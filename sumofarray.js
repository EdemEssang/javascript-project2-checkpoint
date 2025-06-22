// This function takes an array of numbers and returns the sum of its elements.
// It iterates through the array, adding each number to a cumulative sum, and returns the
// final sum.
function arraySum(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

//How to use the function
const numbers = [-3, 9, 0, 8, 4];
console.log(arraySum(numbers)); // Output: 18
