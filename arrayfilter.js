// This function filters an array based on a condition provided by the user.
// It takes an array and a condition function as arguments, iterates through the array,
// and returns a new array containing only the elements that do not satisfy the condition.
// The condition function should return true for elements to be filtered out.

function filterArray(arr, condition) {
    const result = [];
    for (const item of arr) {
        if (!condition(item)) {
            result.push(item);
        }
    }
    return result;
}

// Example usage: Remove even numbers
const numbers = [1, 2, 3, 4, 5];
const filtered = filterArray(numbers, num => num % 2 === 0);
console.log(filtered); // Output: [1, 3, 5]